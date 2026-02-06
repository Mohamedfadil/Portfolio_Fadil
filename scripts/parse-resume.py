import json
import re
import shutil
import zipfile
from pathlib import Path
from xml.etree import ElementTree

from pypdf import PdfReader


RESOURCES_DIR = Path("resources")
OUTPUT_PATH = Path("src/data/resume.json")
PORTFOLIO_PATH = Path("src/data/portfolio.json")
PUBLIC_DIR = Path("public")


MONTH_PATTERN = r"(January|February|March|April|May|June|July|August|September|October|November|December|Jan|Feb|Mar|Apr|Jun|Jul|Aug|Sept|Sep|Oct|Nov|Dec)"
DATE_RANGE_PATTERN = re.compile(
    rf"{MONTH_PATTERN}\s+\d{{4}}\s*-\s*(Present|{MONTH_PATTERN}\s+\d{{4}})",
    re.IGNORECASE,
)
BULLET_PATTERN = re.compile(r"[•\u2022\u2023\u25CF]")


def find_resume_file() -> Path:
    for ext in (".pdf", ".docx", ".txt", ".md"):
        matches = list(RESOURCES_DIR.glob(f"*{ext}"))
        if matches:
            return matches[0]
    raise FileNotFoundError("No resume found in resources/. Add a PDF, DOCX, or TXT file.")


def extract_text(file_path: Path) -> str:
    if file_path.suffix.lower() == ".pdf":
        reader = PdfReader(str(file_path))
        return "\n".join(page.extract_text() or "" for page in reader.pages)
    if file_path.suffix.lower() == ".docx":
        return extract_docx_text(file_path)
    return file_path.read_text(encoding="utf-8", errors="ignore")


def extract_docx_text(file_path: Path) -> str:
    with zipfile.ZipFile(file_path) as docx:
        xml_content = docx.read("word/document.xml")
    root = ElementTree.fromstring(xml_content)
    ns = {"w": "http://schemas.openxmlformats.org/wordprocessingml/2006/main"}
    paragraphs = []
    for para in root.findall(".//w:p", ns):
        texts = [node.text for node in para.findall(".//w:t", ns) if node.text]
        if texts:
            paragraphs.append("".join(texts))
    return "\n".join(paragraphs)


def clean_text(text: str) -> list[str]:
    cleaned = text.replace("â€¢", "•")
    cleaned = cleaned.replace("â€“", "-").replace("â€”", "-")
    lines = [line.strip() for line in cleaned.splitlines() if line.strip()]
    return lines


def normalize_bullets(lines: list[str]) -> list[str]:
    expanded: list[str] = []
    for line in lines:
        parts = [part.strip() for part in BULLET_PATTERN.split(line) if part.strip()]
        expanded.extend(parts)
    return expanded


def slice_section(lines: list[str], start: str, end_labels: list[str]) -> list[str]:
    if start not in lines:
        return []
    start_idx = lines.index(start) + 1
    end_idx = len(lines)
    for idx in range(start_idx, len(lines)):
        if lines[idx] in end_labels:
            end_idx = idx
            break
    return lines[start_idx:end_idx]


def parse_summary(lines: list[str]) -> str:
    return " ".join(lines).replace("  ", " ").strip()


def parse_experience(lines: list[str]) -> list[dict]:
    items = []
    lines = normalize_bullets(lines)

    def is_role_line(index: int) -> bool:
        if index + 1 >= len(lines):
            return False
        return DATE_RANGE_PATTERN.search(lines[index + 1]) is not None

    idx = 0
    while idx < len(lines):
        if not is_role_line(idx):
            idx += 1
            continue
        role = lines[idx]
        company_line = lines[idx + 1]
        date_match = DATE_RANGE_PATTERN.search(company_line)
        if date_match:
            date_range = date_match.group(0)
            company = company_line[: date_match.start()].strip()
        else:
            company = company_line
            date_range = ""
        idx += 2
        highlights = []
        while idx < len(lines) and not is_role_line(idx):
            highlights.append(lines[idx].strip())
            idx += 1
        highlights = merge_wrapped_lines(highlights)
        items.append(
            {
                "role": role,
                "company": company,
                "dates": date_range,
                "highlights": highlights,
            }
        )
    return items


def parse_projects(lines: list[str]) -> list[dict]:
    items = []
    lines = normalize_bullets(lines)

    def get_project_meta(index: int) -> tuple[str, str, int] | None:
        if index + 1 >= len(lines):
            return None
        if DATE_RANGE_PATTERN.search(lines[index + 1]):
            date_match = DATE_RANGE_PATTERN.search(lines[index + 1])
            dates = date_match.group(0) if date_match else ""
            return ("", dates, 2)
        if index + 2 < len(lines) and DATE_RANGE_PATTERN.search(lines[index + 2]):
            date_match = DATE_RANGE_PATTERN.search(lines[index + 2])
            dates = date_match.group(0) if date_match else ""
            return (lines[index + 1], dates, 3)
        return None

    idx = 0
    while idx < len(lines):
        meta = get_project_meta(idx)
        if not meta:
            idx += 1
            continue
        title = lines[idx]
        company, dates, offset = meta
        idx += offset
        highlights = []
        while idx < len(lines) and not get_project_meta(idx):
            if lines[idx] in ("EDUCATION", "CERTIFICATIONS", "AWARDS & HONORS"):
                break
            highlights.append(lines[idx].strip())
            idx += 1
        highlights = merge_wrapped_lines(highlights)
        items.append(
            {
                "title": title,
                "company": company,
                "dates": dates,
                "highlights": highlights,
            }
        )
    return items


def parse_skills(text: str) -> list[str]:
    cleaned = text.replace("â€¢", "").replace("•", "")
    cleaned = cleaned.replace("\n", ",")
    cleaned = re.sub(r"\(([^)]*?)\)", lambda m: "(" + m.group(1).replace(",", " /") + ")", cleaned)
    parts = [item.strip() for item in cleaned.split(",")]
    skills = []
    for part in parts:
        if not part:
            continue
        if part.lower() in ("and", "or"):
            continue
        skills.append(re.sub(r"\s+", " ", part))
    unique = []
    for skill in skills:
        if skill not in unique:
            unique.append(skill)
    return unique


def merge_wrapped_lines(lines: list[str]) -> list[str]:
    merged: list[str] = []
    for line in lines:
        if not line:
            continue
        if merged and (
            merged[-1].rstrip().endswith(",")
            or not merged[-1].rstrip().endswith((".", "!", "?"))
        ):
            merged[-1] = f"{merged[-1]} {line}"
        else:
            merged.append(line)
    return merged


def copy_resume(file_path: Path) -> Path:
    PUBLIC_DIR.mkdir(parents=True, exist_ok=True)
    dest = PUBLIC_DIR / f"resume{file_path.suffix.lower()}"
    shutil.copy2(file_path, dest)
    return dest


def update_portfolio_resume_path(resume_path: Path) -> None:
    if not PORTFOLIO_PATH.exists():
        return
    data = json.loads(PORTFOLIO_PATH.read_text(encoding="utf-8"))
    data.setdefault("social", {})
    data["social"]["resume"] = f"/{resume_path.name}"
    PORTFOLIO_PATH.write_text(json.dumps(data, indent=2), encoding="utf-8")


def main() -> None:
    resume_file = find_resume_file()
    raw_text = extract_text(resume_file)
    lines = clean_text(raw_text)

    summary_lines = slice_section(lines, "SUMMARY", ["EXPERIENCE"])
    summary = parse_summary(summary_lines)

    experience_lines = slice_section(lines, "EXPERIENCE", ["PROJECT", "EDUCATION"])
    experience = parse_experience(experience_lines)

    project_lines = slice_section(lines, "PROJECT", ["EDUCATION"])
    projects = parse_projects(project_lines)

    education_lines = slice_section(lines, "EDUCATION", ["CERTIFICATIONS"])
    education = normalize_bullets(education_lines)

    certification_lines = slice_section(lines, "CERTIFICATIONS", ["AWARDS & HONORS"])
    certifications = normalize_bullets(certification_lines)

    awards_lines = slice_section(lines, "AWARDS & HONORS", ["SKILLS"])
    awards = normalize_bullets(awards_lines)

    skills_lines = slice_section(lines, "SKILLS", [])
    skills_text = "\n".join(skills_lines)
    skills = parse_skills(skills_text)

    core_competencies = skills[:10]

    data = {
        "name": lines[0] if lines else "",
        "email": "sfadilcs@gmail.com",
        "phone": "+91 73958 92648",
        "linkedin": "in/mohamed-fadil-888453277",
        "summary": summary,
        "coreCompetencies": core_competencies,
        "skills": skills,
        "experience": experience,
        "projects": projects,
        "education": education,
        "certifications": certifications,
        "awards": awards,
    }

    OUTPUT_PATH.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT_PATH.write_text(json.dumps(data, indent=2), encoding="utf-8")
    copied = copy_resume(resume_file)
    update_portfolio_resume_path(copied)

    print(f"Parsed resume: {resume_file}")
    print(f"Wrote {OUTPUT_PATH}")
    print(f"Copied resume to {copied}")


if __name__ == "__main__":
    main()
