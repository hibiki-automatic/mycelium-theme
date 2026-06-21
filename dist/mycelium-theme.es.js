const r = {
  bg: "#ffffff",
  fg: "#1a1a2e",
  heading: "#1a1a2e",
  link: "#0066cc",
  code: "#d63031",
  codeBg: "#f4f4f8",
  codeBorder: "#e0e0e8",
  em: "#555577",
  strong: "#1a1a2e",
  quote: "#666688",
  quoteBg: "#f8f8fc",
  quoteBorder: "#c0c0d8",
  keyword: "#8b008b",
  string: "#228b22",
  number: "#b8860b",
  comment: "#808080",
  type: "#00688b",
  operator: "#555555",
  meta: "#999999",
  cursor: "#333333",
  selection: "#c8d8f8",
  lineHighlight: "#f7f7fa",
  gutter: "#aaaaaa",
  gutterBg: "#f4f4f8",
  border: "#e0e0e8"
}, i = {
  bg: "#1e1e2e",
  fg: "#cdd6f4",
  heading: "#cba6f7",
  link: "#89b4fa",
  code: "#f38ba8",
  codeBg: "#181825",
  codeBorder: "#313244",
  em: "#a6adc8",
  strong: "#cdd6f4",
  quote: "#a6adc8",
  quoteBg: "#181825",
  quoteBorder: "#45475a",
  keyword: "#cba6f7",
  string: "#a6e3a1",
  number: "#fab387",
  comment: "#6c7086",
  type: "#89dceb",
  operator: "#89dceb",
  meta: "#6c7086",
  cursor: "#f5c2e7",
  selection: "#45475a",
  lineHighlight: "#252535",
  gutter: "#6c7086",
  gutterBg: "#181825",
  border: "#313244"
};
function o(e) {
  return `
/* mycelium preview theme */
.mycelium-preview {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 16px;
  color: ${e.fg};
  background: ${e.bg};
  line-height: 1.7;
  padding: 16px;
}
.mycelium-preview h1 { font-size: 1.6em; font-weight: bold; color: ${e.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h2 { font-size: 1.4em; font-weight: bold; color: ${e.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h3 { font-size: 1.2em; font-weight: bold; color: ${e.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h4 { font-size: 1.1em; font-weight: bold; color: ${e.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h5, .mycelium-preview h6 { font-weight: bold; color: ${e.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview strong { font-weight: bold; color: ${e.strong}; }
.mycelium-preview em { font-style: italic; color: ${e.em}; }
.mycelium-preview a { color: ${e.link}; text-decoration: underline; }
.mycelium-preview code {
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  color: ${e.code};
  background: ${e.codeBg};
  padding: 0.15em 0.3em;
  border-radius: 3px;
  font-size: 0.9em;
}
.mycelium-preview pre {
  background: ${e.codeBg};
  border: 1px solid ${e.codeBorder};
  border-radius: 6px;
  padding: 12px 16px;
  overflow-x: auto;
}
.mycelium-preview pre code {
  background: none;
  padding: 0;
  color: ${e.fg};
}
.mycelium-preview blockquote {
  color: ${e.quote};
  background: ${e.quoteBg};
  border-left: 4px solid ${e.quoteBorder};
  padding: 8px 16px;
  margin: 0.8em 0;
  font-style: italic;
}
.mycelium-preview ul, .mycelium-preview ol { padding-left: 2em; margin: 0.5em 0; }
.mycelium-preview li { margin: 0.2em 0; }
.mycelium-preview hr { border: none; border-top: 1px solid ${e.border}; margin: 1.5em 0; }
.mycelium-preview p { margin: 0.7em 0; }
.mycelium-preview table { border-collapse: collapse; width: 100%; }
.mycelium-preview th, .mycelium-preview td { border: 1px solid ${e.border}; padding: 6px 12px; }
.mycelium-preview th { background: ${e.codeBg}; font-weight: bold; }
/* syntax highlight colors matching editor */
.mycelium-preview .hljs-keyword { color: ${e.keyword}; }
.mycelium-preview .hljs-string { color: ${e.string}; }
.mycelium-preview .hljs-number { color: ${e.number}; }
.mycelium-preview .hljs-comment { color: ${e.comment}; font-style: italic; }
.mycelium-preview .hljs-type { color: ${e.type}; }
`.trim();
}
function m(e) {
  return o(e).replace(/\.mycelium-preview/g, ".mycelium-preview.dark");
}
const c = o(r), n = m(i), d = "mycelium-preview", l = "markdown-body", a = "code-wrap", t = "copy-btn", g = "copied", p = "hl-code", s = "mermaid", u = "math-renderer", f = "data-typeset", y = "data-processed", w = "js-display-math", b = "katex", h = "katex-display";
export {
  y as ATTR_PROCESSED,
  f as ATTR_TYPESET,
  a as CLASS_CODE_WRAP,
  t as CLASS_COPY_BTN,
  g as CLASS_COPY_BTN_COPIED,
  w as CLASS_DISPLAY_MATH,
  p as CLASS_HL_CODE,
  b as CLASS_KATEX,
  h as CLASS_KATEX_DISPLAY,
  l as CLASS_MARKDOWN_BODY,
  s as CLASS_MERMAID,
  d as CLASS_PREVIEW,
  u as TAG_MATH_RENDERER,
  i as darkTokens,
  m as makeDarkPreviewCss,
  o as makePreviewCss,
  c as myceliumCss,
  n as myceliumDarkCss,
  r as tokens
};
