import { describe, it, expect } from 'vitest'
import { tokens, darkTokens, myceliumCss, myceliumDarkCss, CLASS_PREVIEW, TAG_MATH_RENDERER, CLASS_MERMAID } from '../index.js'

describe('mycelium-theme tokens', () => {
  it('light tokens have required keys', () => {
    expect(tokens.bg).toBeDefined()
    expect(tokens.fg).toBeDefined()
    expect(tokens.keyword).toBeDefined()
  })
  it('dark tokens have required keys', () => {
    expect(darkTokens.bg).toBeDefined()
    expect(darkTokens.fg).not.toBe(tokens.fg)
  })
})

describe('mycelium-theme CSS', () => {
  it('myceliumCss contains markdown-body class', () => {
    expect(myceliumCss).toContain('.markdown-body')
  })
  it('myceliumDarkCss contains dark overrides for markdown-body', () => {
    expect(myceliumDarkCss).toContain('.markdown-body')
  })
  it('CSS includes heading styles', () => {
    expect(myceliumCss).toContain('h1')
  })
})

describe('class-name constants', () => {
  it('CLASS_PREVIEW is mycelium-preview', () => {
    expect(CLASS_PREVIEW).toBe('mycelium-preview')
  })
  it('TAG_MATH_RENDERER is math-renderer', () => {
    expect(TAG_MATH_RENDERER).toBe('math-renderer')
  })
  it('CLASS_MERMAID is mermaid', () => {
    expect(CLASS_MERMAID).toBe('mermaid')
  })
})
