import json
import re
from pathlib import Path


RESUME_PATH = Path("src/data/resume.json")
OUTPUT_DIR = Path("public/skills")


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return value.strip("-") or "skill"


def color_palette(index: int) -> tuple[str, str]:
    palette = [
        ("#0f766e", "#38bdf8"),
        ("#0ea5e9", "#6366f1"),
        ("#2563eb", "#0ea5e9"),
        ("#9333ea", "#ec4899"),
        ("#14b8a6", "#22c55e"),
        ("#f97316", "#facc15"),
        ("#334155", "#64748b"),
        ("#0f172a", "#1d4ed8"),
        ("#0ea5e9", "#14b8a6"),
        ("#7c3aed", "#22d3ee"),
        ("#0891b2", "#9333ea"),
        ("#1f2937", "#4f46e5"),
    ]
    return palette[index % len(palette)]


def make_svg(title: str, subtitle: str, colors: tuple[str, str]) -> str:
    start, end = colors
    return f"""<svg xmlns="http://www.w3.org/2000/svg" width="970" height="700" viewBox="0 0 970 700" fill="none">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{start}" />
      <stop offset="100%" stop-color="{end}" />
    </linearGradient>
  </defs>
  <rect width="970" height="700" rx="48" fill="url(#grad)" />
  <rect x="48" y="48" width="874" height="604" rx="36" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.18)" />
  <text x="80" y="320" fill="#f8fafc" font-size="52" font-family="Arial, Helvetica, sans-serif" font-weight="700">{title}</text>
  <text x="80" y="380" fill="#e2e8f0" font-size="26" font-family="Arial, Helvetica, sans-serif">{subtitle}</text>
  <text x="80" y="460" fill="#ffffff" font-size="18" font-family="Arial, Helvetica, sans-serif" letter-spacing="4">INTELECHOAI</text>
</svg>"""


def main() -> None:
    data = json.loads(RESUME_PATH.read_text(encoding="utf-8"))
    skills = data.get("skills", [])[:12]

    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    images = []
    for idx, skill in enumerate(skills):
        slug = slugify(skill)
        filename = f"{slug}.svg"
        subtitle = "Core Skill"
        svg = make_svg(skill, subtitle, color_palette(idx))
        (OUTPUT_DIR / filename).write_text(svg, encoding="utf-8")
        images.append(f"/skills/{filename}")

    Path("src/data/skills-marquee.json").write_text(
        json.dumps({"images": images}, indent=2), encoding="utf-8"
    )
    print(f"Generated {len(images)} skill tiles.")


if __name__ == "__main__":
    main()
