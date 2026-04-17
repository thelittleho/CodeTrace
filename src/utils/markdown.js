let marked = null
let hljs = null

export async function renderMarkdown(content) {
  if (!marked) {
    // Dynamic imports for performance
    const [markedMod, { markedHighlight }, hljsMod] = await Promise.all([
      import('marked'),
      import('marked-highlight'),
      import('highlight.js')
    ])
    
    // Some environments might not have .default or might have it differently
    marked = markedMod.marked || markedMod
    hljs = hljsMod.default || hljsMod

    marked.use(
      markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      })
    )

    marked.setOptions({
      breaks: true
    })
  }
  
  return marked(content || '')
}

export async function highlightCode(code, lang) {
  if (!hljs) {
    const hljsMod = await import('highlight.js')
    hljs = hljsMod.default || hljsMod
  }
  
  try {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(code, { language: lang }).value
    }
    return hljs.highlightAuto(code).value
  } catch (e) {
    console.error('Highlight.js error:', e)
    return code
  }
}
