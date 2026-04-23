/**
 * URL에서 플랫폼 정보를 추출하는 유틸리티
 */
export const detectPlatform = (url) => {
  if (url.includes('programmers.co.kr')) return 'Programmers';
  if (url.includes('codeup.kr')) return 'CodeUp';
  return 'Unknown';
};

/**
 * 프로그래머스 URL에서 문제 정보를 추출하는 유틸리티
 */
export const parseProgrammersHtml = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // 제목 추출
  let title = doc.title || '제목 없음';
  title = title.replace('코딩테스트 연습 - ', '')
              .replace(' | 프로그래머스 스쿨', '')
              .replace(' | 프로그래머스', '')
              .trim();

  // 본문 추출 (문제 설명 섹션)
  let content = '';
  const guideSection = doc.querySelector('.guide-section') || doc.querySelector('.markdown-main');
  
  if (guideSection) {
    content = parseNodeToMarkdown(guideSection);
  }

  const template = `

---

### 💡 나의 풀이
\`\`\`cpp
// 코드를 작성하세요
\`\`\`

### 📝 복기 및 배운 점
- 

### 🔗 참고 자료
- 
`;

  return { title, content: content + template };
};

/**
 * CodeUp URL에서 문제 정보를 추출하는 유틸리티
 */
export const parseCodeUpHtml = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // 제목 추출
  const titleElement = doc.querySelector('.problem-title') || doc.querySelector('h1') || doc.querySelector('.main h1');
  let title = titleElement ? titleElement.textContent.trim() : '제목 없음';

  // 본문 추출
  let content = '';
  const problemBox = doc.getElementById('pro1');
  if (problemBox) {
    content = parseNodeToMarkdown(problemBox);
  }

  const template = `

---

### 💡 나의 풀이
\`\`\`cpp
// 코드를 작성하세요
\`\`\`

### 📝 복기 및 배운 점
- 

### 🔗 참고 자료
- 
`;

  return { title, content: content + template };
};

// HTML 노드를 마크다운으로 변환하는 공통 로직
const parseNodeToMarkdown = (rootNode) => {
  const processNode = (node) => {
    if (node.nodeType === 3) { // Text node
      return node.textContent;
    }
    
    if (node.nodeType !== 1) return ''; // Not an element

    const nodeName = node.nodeName;
    const textContent = node.textContent.trim();
    
    // 특정 텍스트 건너뛰기
    if (textContent === '문제 설명' || textContent === '문제설명') return '';

    switch (nodeName) {
      case 'H1': return `\n# ${textContent}\n`;
      case 'H2': return `\n## ${textContent}\n`;
      case 'H3': 
      case 'H4':
      case 'H5': return `\n### ${textContent}\n`;
      case 'P': return `\n${Array.from(node.childNodes).map(processNode).join('')}\n`;
      case 'UL':
      case 'OL':
        let listText = '\n';
        node.querySelectorAll(':scope > li').forEach(li => { 
          listText += `- ${Array.from(li.childNodes).map(processNode).join('').trim()}\n` 
        });
        return listText + '\n';
      case 'TABLE': return parseTable(node);
      case 'DIV':
      case 'SECTION':
      case 'ARTICLE':
        return Array.from(node.childNodes).map(processNode).join('');
      case 'BR':
        return '\n';
      case 'A':
        return `[${textContent}](${node.getAttribute('href')})`;
      case 'PRE':
        return `\n\`\`\`\n${node.textContent.trim()}\n\`\`\`\n`;
      case 'CODE':
        return `\`${textContent}\u200B\``;
      case 'STRONG':
      case 'B':
        return ` **${textContent}** `;
      default:
        return Array.from(node.childNodes).map(processNode).join('');
    }
  };

  return Array.from(rootNode.childNodes).map(processNode).join('').trim();
};

// 테이블을 마크다운으로 변환
const parseTable = (table) => {
  let tableText = '\n';
  const rows = Array.from(table.querySelectorAll('tr'));
  if (rows.length === 0) return '';

  rows.forEach((tr, rowIndex) => {
    const cells = Array.from(tr.querySelectorAll('th, td'));
    tableText += `| ${cells.map(c => c.textContent.trim().replace(/\n/g, ' ')).join(' | ')} |\n`;
    if (rowIndex === 0) {
      tableText += `| ${cells.map(() => '---').join(' | ')} |\n`;
    }
  });
  return tableText + '\n';
};
