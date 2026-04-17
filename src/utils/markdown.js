let marked = null
let hljs = null

export async function renderMarkdown(content) {
  if (!marked) {
    const [markedMod, { markedHighlight }, hljsMod] = await Promise.all([
      import('marked'),
      import('marked-highlight'),
      import('highlight.js')
    ])
    
    marked = markedMod.marked
    hljs = hljsMod.default

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
    hljs = hljsMod.default
  }
  return hljs.highlightAuto(code).value
}
