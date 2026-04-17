let marked = null
let hljs = null

export async function renderMarkdown(content) {
  if (!marked) {
    const [markedMod, { markedHighlight }, hljsMod] = await Promise.all([
      import('marked'),
      import('marked-highlight'),
      import('highlight.js')
    ])
    
    marked = markedMod.marked || markedMod
    hljs = hljsMod.default || hljsMod

    // 커스텀 렌더러 설정: 모든 링크를 새 탭에서 열기
    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => {
      const titleAttr = title ? ` title="${title}"` : '';
      return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
    };

    marked.use(
      markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      }),
      { renderer } // 커스텀 렌더러 등록
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
