import { tokens, darkTokens } from './tokens.js'
import type { ThemeTokens } from './tokens.js'

export function makePreviewCss(tk: ThemeTokens): string {
  return `
/* mycelium preview theme */
.mycelium-preview {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 16px;
  color: ${tk.fg};
  background: ${tk.bg};
  line-height: 1.7;
  padding: 16px;
}
.mycelium-preview h1 { font-size: 1.6em; font-weight: bold; color: ${tk.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h2 { font-size: 1.4em; font-weight: bold; color: ${tk.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h3 { font-size: 1.2em; font-weight: bold; color: ${tk.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h4 { font-size: 1.1em; font-weight: bold; color: ${tk.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview h5, .mycelium-preview h6 { font-weight: bold; color: ${tk.heading}; margin: 0.8em 0 0.4em; }
.mycelium-preview strong { font-weight: bold; color: ${tk.strong}; }
.mycelium-preview em { font-style: italic; color: ${tk.em}; }
.mycelium-preview a { color: ${tk.link}; text-decoration: underline; }
.mycelium-preview code {
  font-family: 'Fira Code', 'Cascadia Code', monospace;
  color: ${tk.code};
  background: ${tk.codeBg};
  padding: 0.15em 0.3em;
  border-radius: 3px;
  font-size: 0.9em;
}
.mycelium-preview pre {
  background: ${tk.codeBg};
  border: 1px solid ${tk.codeBorder};
  border-radius: 6px;
  padding: 12px 16px;
  overflow-x: auto;
}
.mycelium-preview pre code {
  background: none;
  padding: 0;
  color: ${tk.fg};
}
.mycelium-preview blockquote {
  color: ${tk.quote};
  background: ${tk.quoteBg};
  border-left: 4px solid ${tk.quoteBorder};
  padding: 8px 16px;
  margin: 0.8em 0;
  font-style: italic;
}
.mycelium-preview ul, .mycelium-preview ol { padding-left: 2em; margin: 0.5em 0; }
.mycelium-preview li { margin: 0.2em 0; }
.mycelium-preview hr { border: none; border-top: 1px solid ${tk.border}; margin: 1.5em 0; }
.mycelium-preview p { margin: 0.7em 0; }
.mycelium-preview table { border-collapse: collapse; width: 100%; }
.mycelium-preview th, .mycelium-preview td { border: 1px solid ${tk.border}; padding: 6px 12px; }
.mycelium-preview th { background: ${tk.codeBg}; font-weight: bold; }
/* syntax highlight colors matching editor */
.mycelium-preview .hljs-keyword { color: ${tk.keyword}; }
.mycelium-preview .hljs-string { color: ${tk.string}; }
.mycelium-preview .hljs-number { color: ${tk.number}; }
.mycelium-preview .hljs-comment { color: ${tk.comment}; font-style: italic; }
.mycelium-preview .hljs-type { color: ${tk.type}; }
`.trim()
}

export function makeDarkPreviewCss(tk: ThemeTokens): string {
  return makePreviewCss(tk).replace(/\.mycelium-preview/g, '.mycelium-preview.dark')
}

export const myceliumCss: string = makePreviewCss(tokens)
export const myceliumDarkCss: string = makeDarkPreviewCss(darkTokens)
