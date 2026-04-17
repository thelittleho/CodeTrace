# 🚀 CodeTrace

**CodeTrace**는 알고리즘 문제 풀이 과정과 본인의 GitHub 코드를 한곳에서 관리할 수 있는 스마트 학습 노트입니다. 프로그래머스 등의 플랫폼에서 문제 정보를 자동으로 추출하고, 본인의 GitHub 저장소를 탐색하며 소스 코드를 노트에 즉시 첨부할 수 있습니다.

![CodeTrace Hero](./src/assets/hero.png)

## ✨ 주요 기능

-   **문제 정보 자동 추출**: 프로그래머스 문제 URL만 입력하면 제목과 문제 설명을 자동으로 가져옵니다.
-   **GitHub 저장소 통합**: 본인의 GitHub 저장소를 실시간으로 탐색하고, 소스 코드를 한 번의 클릭으로 노트에 마크다운 블록으로 첨부할 수 있습니다.
-   **실시간 클라우드 동기화**: Firebase를 통해 작성한 모든 노트와 즐겨찾기 저장소가 모든 기기에서 실시간으로 동기화됩니다.
-   **강력한 마크다운 에디터**: 코드 하이라이팅과 실시간 미리보기를 지원하는 유려한 편집 환경을 제공합니다.
-   **다크 모드 지원**: 사용자 시력 보호를 위한 다크 모드 테마를 완벽하게 지원합니다.

## 🛠 Tech Stack

-   **Frontend**: Vue 3 (Composition API), Vite
-   **Database/Auth**: Firebase Firestore, GitHub OAuth
-   **Styling**: Vanilla CSS (Modern CSS Variables)
-   **Libraries**: `marked` (Markdown), `highlight.js` (Syntax Highlighting), `lucide-vue-next` (Icons)

## 🏗 프로젝트 구조

최적화된 성능과 유지보수성을 위해 기능별로 모듈화되어 있습니다.

```text
src/
├── components/          # 재사용 가능한 UI 컴포넌트 (Sidebar, NoteEditor, GithubExplorer)
├── composables/         # 비즈니스 로직 분리 (useAuth, useProblems, useGithub, useTheme)
├── utils/               # 유틸리티 함수 (Markdown Renderer, HTML Parser)
├── firebase.js          # Firebase 초기화 및 설정
└── App.vue              # 메인 엔트리 및 레이아웃
```

## 🚀 시작하기

### 환경 변수 설정
`.env` 파일을 루트 디렉토리에 생성하고 Firebase 설정값을 입력하세요.

```env
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

### 설치 및 실행
```bash
npm install
npm run dev
```

## 📄 라이선스
MIT License.
