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
- ![alt text](<Screenshot 2025-09-23 at 8.06.51 PM.png>)
- ![alt text](<Screenshot 2025-09-23 at 8.07.17 PM.png>)
- ![alt text](<Screenshot 2025-09-23 at 8.07.17 PM-1.png>)
- ![alt text](<Screenshot 2025-09-23 at 8.07.48 PM.png>)

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
- ![alt text](<Screenshot 2025-09-23 at 8.06.51 PM.png>)
- ![alt text](<Screenshot 2025-09-23 at 8.07.17 PM.png>)
- ![alt text](<Screenshot 2025-09-23 at 8.07.17 PM-1.png>)
- ![alt text](<Screenshot 2025-09-23 at 8.07.48 PM.png>)

### Design Decisions and Technical Considerations
- Built as a static HTML/CSS/JS app for fast iteration
- Firebase provides data storage and file uploads without a custom backend
- CDN-based Firebase SDK to simplify setup
- Consider moving to a bundler (Vite) if the project grows
- Strengthen security rules and add Auth for role-based access