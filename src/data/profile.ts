export const socialLinks = {
  github: 'https://github.com/asdfdk123',
  blog: 'https://velog.io/@dnjsgud',
  email: 'mailto:chldnjsgud@gmail.com',
};

export const techStack = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS',
  'TanStack Query',
  'Zustand',
  'Supabase',
  'Three.js',
  'StompJS',
];

export interface HistoryItem {
  id: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string[];
  descriptionText?: string;
  color: 'sage' | 'coffee' | 'sand';
}

export const history: HistoryItem[] = [
  {
    id: 'bootcamp',
    title: '구름 딥다이브 부트캠프',
    subtitle: 'Frontend 과정 수료',
    period: '2025.07 - 2026.01',
    description: [
      'Lighthouse 기반 웹 성능 최적화 방법론 학습',
      'Git Flow 협업 및 코드 리뷰 문화 체득',
    ],
    color: 'sage',
  },
  {
    id: 'paper',
    title: '대한전자공학회 논문 게재',
    subtitle: '추계학술대회 (학부생 부문)',
    period: '2025.11',
    descriptionText:
      '주제: AI 품질 분석과 실시간 경매 기능을 통합한 중고 전자기기 거래 플랫폼 구현',
    color: 'coffee',
  },
  {
    id: 'university',
    title: '한경국립대학교',
    subtitle: '소프트웨어융합 전공',
    period: '2020.03 - 2026.02',
    descriptionText: '학과 학생회장(2024) 역임 - 갈등 조율 및 소통 능력 함양',
    color: 'sand',
  },
];
