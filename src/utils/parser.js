/**
 * 프로그래머스 URL에서 문제 정보를 추출하는 유틸리티
 */
export const parseProgrammersHtml = (htmlString) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  // 제목 추출 (초단순화: 불필요한 고정 문구만 제거)
  let title = doc.title || '제목 없음';
  
  // 1. 프로그래머스 특유의 고정 문구들 제거
  title = title.replace('코딩테스트 연습 - ', '');
  title = title.replace(' | 프로그래머스 스쿨', '');
  title = title.replace(' | 프로그래머스', '');
  title = title.trim();

  // 본문 추출 (문제 설명 섹션)
  let content = '';
  const guideSection = doc.querySelector('.guide-section');
  
  if (guideSection) {
    const processNode = (node) => {
      if (node.nodeType === 3) {
        const text = node.textContent.trim();
        if (text === '문제 설명') return '';
        return node.textContent.replace(/^\s+|\s+$/g, '');
      }
      
      const nodeName = node.nodeName;
      const textContent = node.textContent.trim();
      if (textContent === '문제 설명') return '';

      switch (nodeName) {
        case 'H5': return `\n### ${textContent}\n`;
        case 'P': return `\n${textContent}\n`;
        case 'UL':
        case 'OL':
          let listText = '\n';
          node.querySelectorAll('li').forEach(li => { listText += `- ${li.textContent.trim()}\n` });
          return listText + '\n';
        case 'TABLE': return parseTable(node);
        case 'DIV':
        case 'SECTION':
          return Array.from(node.childNodes).map(processNode).join('');
        case 'BR':
          return '\n';
        case 'A':
          return `[${textContent}](${node.href})`;
        default:
          return node.textContent;
        }
    };
    content = Array.from(guideSection.childNodes).map(processNode).join('').trim();
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

// 테이블을 마크다운으로 변환
const parseTable = (table) => {
  let tableText = '\n';
  const rows = Array.from(table.querySelectorAll('tr'));
  if (rows.length === 0) return '';

  rows.forEach((tr, rowIndex) => {
    const cells = Array.from(tr.querySelectorAll('th, td'));
    tableText += `| ${cells.map(c => c.textContent.trim()).join(' | ')} |\n`;
    if (rowIndex === 0) {
      tableText += `| ${cells.map(() => '---').join(' | ')} |\n`;
    }
  });
  return tableText + '\n';
};
