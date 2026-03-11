# vigos_admin

Vigos Admin은 전시/작가/작품 정보를 관리하기 위한 웹 기반 어드민 페이지입니다. 
정적 HTML/CSS/JS로 구성되어 있으며, 데이터는 Firebase Firestore와 이미지 파일은 Firebase Storage에 저장됩니다.


### 기술 스택
- HTML, CSS, Vanilla JavaScript
- Firebase: Firestore, Storage

### 주요 기능
- 대시보드: 방문자/전시 종료 정보 카드, 세션 차트
- 작가 관리: 목록 조회, 등록, 수정, 삭제
- 작품 관리: 목록 조회, 등록, 수정, 삭제
- 이미지 업로드: 작가/대표작/작품/QR 이미지 Firebase Storage 업로드
- 삭제 확인 토스트, 입력 유효성 검사

### 실행 화면
- `docs/screenshots/dashboard.png`
- `docs/screenshots/artist-list.png`
- `docs/screenshots/artist-form.png`
- `docs/screenshots/artwork-list.png`
- `docs/screenshots/artwork-form.png`

### 설치 방법
```
# 저장소 클론
git clone https://github.com/byu-rin/vigos_admin.git

2. 정적 서버 실행을 위한 환경 준비 (예: Python 또는 Node)
3. Firebase 프로젝트 설정 확인

```

### 실행 방법
- 빌드 과정 없음
- 정적 서버 실행
  - `python -m http.server`
  - `npx serve`
- 브라우저에서 `dashboard.html` 또는 `sidebar.html`로 접속

### 설계 결정 및 기술적 고민
- 정적 HTML/CSS/JS로 빠르게 프로토타입을 구축
- Firebase를 사용해 서버 없이 데이터 저장/파일 업로드 구현
- CDN 기반 Firebase SDK 사용으로 초기 설정을 단순화
- 향후 확장 시 패키지 기반 번들링(Vite 등)으로 전환 여부 검토
- 보안 규칙과 권한 관리를 강화하기 위한 Auth 도입 필요





### Tech Stack
- HTML, CSS, Vanilla JavaScript
- Firebase: Firestore, Storage
- Chart.js

### Key Features
- Dashboard: visitor/exhibition cards, session chart
- Artist management: list, create, edit, delete
- Artwork management: list, create, edit, delete
- Image upload: artist/representative/artwork/QR images via Firebase Storage
- Delete confirmation toast and basic validation

### Screenshots
- `docs/screenshots/dashboard.png`
- `docs/screenshots/artist-list.png`
- `docs/screenshots/artist-form.png`
- `docs/screenshots/artwork-list.png`
- `docs/screenshots/artwork-form.png`

### Installation
1. Clone the repository
2. Prepare a static server environment (e.g., Python or Node)
3. Verify Firebase project configuration

### Run Locally
- No build step required
- Start a static server
  - `python -m http.server`
  - `npx serve`
- Open `dashboard.html` or `sidebar.html` in the browser

### Design Decisions and Technical Considerations
- Built as a static HTML/CSS/JS app for fast iteration
- Firebase provides data storage and file uploads without a custom backend
- CDN-based Firebase SDK to simplify setup
- Consider moving to a bundler (Vite) if the project grows
- Strengthen security rules and add Auth for role-based access
