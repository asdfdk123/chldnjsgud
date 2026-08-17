export const socialLinks = {
  github: 'https://github.com/asdfdk123',
  blog: 'https://velog.io/@dnjsgud',
  email: 'mailto:cwh0607@naver.com',
  resume: '/resume/choi-wonhyeong-resume.pdf',
};

export interface StrengthCard {
  id: string;
  title: string;
  summary: string;
  project: string;
  detail: string;
}

export interface TechStackItem {
  name: string;
  summary: string;
  projects: string[];
}

export interface HistoryItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
  descriptionText?: string;
  color: 'sage' | 'coffee' | 'sand';
}

export const strengths: StrengthCard[] = [
  {
    id: 'realtime-sync',
    title: '실시간 상태 동기화',
    summary:
      '실시간 이벤트가 들어올 때 화면 상태를 어떻게 나눠 반영할지 고민하며 채팅과 경매 UI를 구현했습니다.',
    project: 'Used Market',
    detail:
      'WebSocket(STOMP) 기반 채팅과 경매 이벤트를 구독하고, 메시지·입찰·낙찰 상태가 화면에 자연스럽게 반영되도록 로직을 구성했습니다.',
  },
  {
    id: 'message-queue',
    title: '메시지 유실 방지',
    summary:
      '연결이 늦게 열리는 순간에도 사용자가 입력한 메시지가 사라지지 않도록 전송 흐름을 보완했습니다.',
    project: 'Used Market',
    detail:
      '소켓 연결 전 메시지를 Queue에 저장하고, 연결 완료 후 Flush하는 방식으로 채팅방 진입 직후 발생하는 메시지 유실 문제를 줄였습니다.',
  },
  {
    id: 'accessibility-seo',
    title: '접근성·SEO 개선',
    summary:
      '기능 구현 이후에도 화면 품질을 높이기 위해 접근성과 검색 노출까지 함께 점검했습니다.',
    project: 'Plantiful',
    detail:
      'aria-label, 시맨틱 태그, metadata, robots.txt를 적용해 Lighthouse 기준 접근성과 SEO 점수를 82에서 100으로 개선했습니다.',
  },
  {
    id: 'requirement-alignment',
    title: '협업 기준 정렬',
    summary:
      '요구사항 해석이 어긋날 때 구현을 밀어붙이기보다 기준을 다시 문서로 맞추는 쪽을 선택했습니다.',
    project: 'Parkybara',
    detail:
      'PM, PD, QA와 함께 요구사항을 다시 정리하고 구현 기준을 맞춰, 해석 차이로 생기는 커뮤니케이션 비용을 줄였습니다.',
  },
];

export const techStack: TechStackItem[] = [
  {
    name: 'React / Next.js',
    summary:
      '화면 구조 설계, 라우팅 기반 페이지 구성, 메타데이터 설정, 프로젝트 단위 UI 구현 경험이 있습니다.',
    projects: ['Parkybara', 'Mind-Safe', 'Plantiful'],
  },
  {
    name: 'TypeScript',
    summary:
      '프로젝트 데이터 구조, 폼 입력, 상태 흐름을 타입으로 정리해 컴포넌트와 로직을 안정적으로 관리했습니다.',
    projects: ['Parkybara', 'Mind-Safe', 'Plantiful'],
  },
  {
    name: 'TanStack Query / React Query',
    summary:
      '서버 상태 조회와 캐시 업데이트를 다뤘고, 게시글 작성 후 낙관적 업데이트를 적용한 경험이 있습니다.',
    projects: ['Parkybara', 'Mind-Safe', 'Plantiful', 'Used Market'],
  },
  {
    name: 'Zustand',
    summary:
      '지도 중심 화면이나 작성 흐름처럼 컴포넌트 간에 공유해야 하는 클라이언트 상태를 단순하게 관리했습니다.',
    projects: ['Parkybara', 'Mind-Safe'],
  },
  {
    name: 'StompJS / WebSocket',
    summary:
      '실시간 채팅과 경매 이벤트를 수신하고, 연결 상태에 따라 UI와 메시지 흐름을 동기화했습니다.',
    projects: ['Used Market'],
  },
  {
    name: 'Tailwind CSS',
    summary:
      '반응형 UI와 공통 컴포넌트 스타일을 빠르게 구성하고, 섹션 간 톤을 유지하면서 화면을 정리했습니다.',
    projects: ['Parkybara', 'Mind-Safe', 'Plantiful', 'Portfolio'],
  },
  {
    name: 'Supabase',
    summary:
      '데이터 조회와 수정 흐름을 연결하고, 식물 정보 변경 후 화면에 즉시 반영되는 경험을 구현했습니다.',
    projects: ['Plantiful'],
  },
];

export const history: HistoryItem[] = [
  {
    id: 'bootcamp',
    title: '구름 딥다이브 프론트엔드 과정',
    subtitle: 'Frontend 과정 수료',
    period: '2025.07 - 2026.01',
    description: [
      '프로젝트 중심으로 React, Next.js, 상태 관리, 협업 방식을 학습했습니다.',
      'Git Flow, 코드 리뷰, 문서화 기반 협업 흐름을 팀 프로젝트 안에서 경험했습니다.',
      '접근성, 성능, SEO를 함께 고려하는 프론트엔드 구현 방식을 익혔습니다.',
    ],
    color: 'sage',
  },
  {
    id: 'paper',
    title: '학회 논문 게재',
    subtitle: '졸업 작품 기반 주제 확장',
    period: '2025.11',
    descriptionText:
      'AI 품질 분석과 실시간 경매 기능을 결합한 중고 전자기기 거래 플랫폼 주제로 프로젝트 경험을 정리했습니다.',
    color: 'coffee',
  },
  {
    id: 'university',
    title: '한경대학교',
    subtitle: '소프트웨어융합학과',
    period: '2020.03 - 2026.02',
    descriptionText:
      '전공 학습과 팀 프로젝트를 병행하며 프론트엔드 개발을 중심으로 포트폴리오를 쌓고 있습니다.',
    color: 'sand',
  },
];
