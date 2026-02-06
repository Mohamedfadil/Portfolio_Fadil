import Script from "next/script";

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    var theme = stored || (prefersDark ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
  } catch (e) {}
})();`;

export default function ThemeScript() {
  return (
    <Script id="theme-init" strategy="beforeInteractive">
      {themeScript}
    </Script>
  );
}
