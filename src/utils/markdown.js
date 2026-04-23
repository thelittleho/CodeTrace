let marked = null
let hljs = null

export async function renderMarkdown(content, options = {}) {
  if (!marked) {
    const [markedMod, { markedHighlight }, hljsMod, { default: markedKatex }] = await Promise.all([
      import('marked'),
      import('marked-highlight'),
      import('highlight.js'),
      import('marked-katex-extension')
    ])
    
    marked = markedMod.marked || markedMod
    hljs = hljsMod.default || hljsMod

    // KateX CSS dynamically
    if (!document.getElementById('katex-css')) {
      const link = document.createElement('link')
      link.id = 'katex-css'
      link.rel = 'stylesheet'
      link.href = 'https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css'
      document.head.appendChild(link)
    }

    marked.use(
      markedHighlight({
        emptyLangClass: 'hljs',
        langPrefix: 'hljs language-',
        highlight(code, lang) {
          const language = hljs.getLanguage(lang) ? lang : 'plaintext';
          return hljs.highlight(code, { language }).value;
        }
      }),
      markedKatex({
        throwOnError: false,
        displayMode: false
      })
    )
  }

  // Create a new renderer instance for this call to avoid pollution
  const renderer = new marked.Renderer();
  const baseUrl = options.baseUrl || '';

  renderer.link = (href, title, text) => {
    let resolvedHref = href;
    if (baseUrl && !href.startsWith('http') && !href.startsWith('#')) {
      try {
        resolvedHref = new URL(href, baseUrl).href;
      } catch (e) { /* ignore */ }
    }
    return `<a href="${resolvedHref}"${title ? ` title="${title}"` : ''} target="_blank" rel="noopener noreferrer">${text}</a>`;
  };

  renderer.image = (href, title, text) => {
    let resolvedHref = href;
    if (baseUrl && !href.startsWith('http')) {
      try {
        resolvedHref = new URL(href, baseUrl).href;
      } catch (e) { /* ignore */ }
    }
    return `<img src="${resolvedHref}"${title ? ` title="${title}"` : ''}${text ? ` alt="${text}"` : ''} style="max-width: 100%; height: auto;">`;
  };

  return marked.parse(content || '', { renderer, breaks: true })
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
