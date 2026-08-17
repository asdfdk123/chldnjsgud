export type ProjectType =
  | 'Team Project'
  | 'Personal Project'
  | 'Graduation Project';

export type ProjectColor = 'sage' | 'orange' | 'blue';

export type ProjectDetailKey =
  | 'overview'
  | 'role'
  | 'challenge'
  | 'solution'
  | 'troubleShooting'
  | 'outcome';

export interface ProjectDetailSection {
  key: ProjectDetailKey;
  title: string;
  body?: string;
  bullets?: string[];
}

export interface ProjectStar {
  role: string[];
  challenge: string[];
  solution: string[];
  learning: string[];
}

export interface ProjectTroubleShooting {
  title: string;
  problem: string;
  solution: string;
  impact?: string;
  keywords?: string[];
}

export interface ProjectTechHighlight {
  name: string;
  usage: string;
}

export interface ProjectLinkSet {
  github?: string;
  demo?: string;
}

export interface ProjectMedia {
  src: string;
  alt: string;
  type?: 'image' | 'video';
}

export interface Project {
  id: string;
  title: string;
  period: string;
  type: ProjectType;
  summary: string;
  description: string;
  myRole: string;
  techStack: string[];
  techHighlights?: ProjectTechHighlight[];
  troubleShooting: ProjectTroubleShooting;
  troubleShootings?: ProjectTroubleShooting[];
  outcomes: string[];
  links: ProjectLinkSet;
  images?: ProjectMedia[];
  color: ProjectColor;
  details?: ProjectDetailSection[];
  star?: ProjectStar;
  published?: boolean;
}

const createProjectDetails = ({
  overview,
  star,
  troubleShooting,
  outcomes,
}: {
  overview: string;
  star: ProjectStar;
  troubleShooting: ProjectTroubleShooting;
  outcomes: string[];
}): ProjectDetailSection[] => [
  {
    key: 'overview',
    title: '프로젝트 소개',
    body: overview,
  },
  {
    key: 'role',
    title: '내 역할',
    bullets: star.role,
  },
  {
    key: 'challenge',
    title: '기술적 도전',
    bullets: star.challenge,
  },
  {
    key: 'solution',
    title: '해결 과정',
    bullets: star.solution,
  },
  {
    key: 'troubleShooting',
    title: troubleShooting.title,
    bullets: [
      `문제: ${troubleShooting.problem}`,
      `해결: ${troubleShooting.solution}`,
      ...(troubleShooting.impact ? [`결과: ${troubleShooting.impact}`] : []),
    ],
  },
  {
    key: 'outcome',
    title: '결과 및 배운 점',
    bullets: outcomes,
  },
];

const parkybaraStar: ProjectStar = {
  role: [
    '프론트엔드 3인 협업 프로젝트에서 UI 개발, 기능 구현, 기술 협업을 맡았습니다.',
    '외부 라이브러리를 활용한 공통 컴포넌트를 구성하고 재사용 가능한 UI 구조를 설계했습니다.',
    'Kakao Map API를 활용해 지도 화면을 구현했습니다.',
    '지도 위에 공원 혼잡도와 주변 시설 정보를 시각화했습니다.',
    '데이터 조회 흐름에 맞춰 화면 인터랙션과 상태 반영 로직을 구현했습니다.',
  ],
  challenge: [
    '지도 기반 서비스 특성상 위치 정보, 공원 정보, 혼잡도 데이터처럼 서로 다른 정보를 한 화면에서 함께 보여줘야 했습니다.',
    '외부 라이브러리와 지도 API를 함께 사용할 때 화면 구조가 쉽게 복잡해질 수 있어 재사용 가능한 컴포넌트 설계가 중요했습니다.',
    '협업 과정에서 PM, PD, QA가 해석한 요구사항에 차이가 생겨 구현 기준을 다시 맞출 필요가 있었습니다.',
  ],
  solution: [
    '반복되는 UI를 먼저 공통 컴포넌트로 정리한 뒤 지도와 정보 표시 기능에 연결해 화면 구성을 단순화했습니다.',
    'Kakao Map API 처리와 데이터 렌더링 구조를 분리해 지도 표현과 정보 표시의 책임을 나눴습니다.',
    '공원 혼잡도와 주변 시설 정보를 지도 중심으로 배치해 사용자가 필요한 정보를 빠르게 파악할 수 있게 구성했습니다.',
    '협업 충돌이 생겼을 때 기획 의도와 QA 기준을 다시 문서화해 구현 기준을 정렬했습니다.',
  ],
  learning: [
    '외부 API 연동과 재사용 가능한 컴포넌트 설계를 실제 프로젝트 흐름 안에서 다뤄볼 수 있었습니다.',
    '직군 간 협업에서 문서 기반으로 기준을 맞추는 과정이 구현 정확도를 높인다는 점을 배웠습니다.',
    '기능 구현뿐 아니라 협업 과정 자체를 정리하는 역할도 프론트엔드 개발에 중요하다는 점을 체감했습니다.',
  ],
};

const parkybaraTroubleShooting: ProjectTroubleShooting = {
  title: '협업 기준 정렬',
  problem:
    '기획 단계의 의도와 QA 단계의 검수 기준이 서로 다르게 해석되면서 구현 기준이 흔들렸습니다.',
  solution:
    'PM, PD, QA와 다시 요구사항을 문서로 정리하고 기준을 맞춘 뒤 구현 범위를 재정렬했습니다.',
  impact:
    '기능 해석 차이로 인한 커뮤니케이션 비용을 줄이고 같은 기준으로 화면을 구현할 수 있었습니다.',
  keywords: ['협업', '요구사항 정리', '문서화'],
};

const mindSafeStar: ProjectStar = {
  role: [
    '팀 내 게시글 작성 기능 구현을 맡았습니다.',
    '`/write` 게시글 작성 기능 전반을 구현했습니다.',
    '태그를 포함할 수 있는 게시글 작성 모달 UI를 구현했습니다.',
    '입력과 검증 흐름을 반영한 작성 폼을 구성했습니다.',
    '게시글 등록 직후 리스트에 즉시 반영되는 낙관적 업데이트를 적용했습니다.',
  ],
  challenge: [
    '게시글 작성 기능을 모달 안에서 자연스럽게 처리하면서도 기획안에 맞는 일관된 사용자 흐름을 구현해야 했습니다.',
    '등록 직후 서버 응답을 기다리지 않고도 사용자에게 즉각적인 피드백을 주는 경험이 필요했습니다.',
    '낙관적 업데이트 적용 시 목록 데이터와 서버 상태 사이의 동기화 흐름을 안정적으로 관리해야 했습니다.',
  ],
  solution: [
    '공통 컴포넌트를 활용해 작성 모달을 구성하고 입력 흐름을 UI 단위로 분리했습니다.',
    'React Hook Form과 Zod를 활용해 입력과 검증 흐름을 폼 단계에서 정리했습니다.',
    'React Query 기반 낙관적 업데이트를 적용해 작성된 게시글이 리스트 최상단에 즉시 보이도록 구성했습니다.',
    '기능 구현뿐 아니라 테스트, 문서화, PR 작성과 리뷰에도 참여해 협업 흐름을 맞췄습니다.',
  ],
  learning: [
    '사용자 액션 직후 결과를 빠르게 반영하는 UX 설계가 체감 품질에 큰 영향을 준다는 점을 배웠습니다.',
    '서버 상태 관리와 캐시 업데이트 패턴을 실제 기능 구현 안에서 익힐 수 있었습니다.',
    '낙관적 업데이트는 성공 흐름뿐 아니라 실패 시 되돌림까지 고려해야 안정적으로 동작한다는 점을 이해했습니다.',
  ],
};

const mindSafeTroubleShooting: ProjectTroubleShooting = {
  title: '낙관적 업데이트 동기화',
  problem:
    '게시글 등록 직후 서버 응답을 기다리는 동안 사용자에게 변화가 보이지 않아 작성 완료 여부를 바로 인지하기 어려웠습니다.',
  solution:
    'React Query의 낙관적 업데이트를 적용해 작성한 게시글을 리스트 최상단에 먼저 반영하고, 서버 응답에 따라 캐시를 정리했습니다.',
  impact:
    '게시글 등록 직후 화면에서 결과를 확인할 수 있도록 해 작성 흐름의 지연감을 줄였습니다.',
  keywords: ['React Query', 'Optimistic Update', '캐시 동기화'],
};

const plantifulStar: ProjectStar = {
  role: [
    '프론트엔드 4인 협업 프로젝트에서 검색·정렬 기능과 식물 상세 모달 구현을 맡았습니다.',
    '식물 상세 모달 안에서 상태 탭과 설정 탭 UI를 분리해 구현했습니다.',
    '식물 닉네임 변경, 식물 정보 수정, 삭제 기능을 구현했습니다.',
    '물주기, 영양제, 분갈이 주기를 기준으로 D-day 계산 로직을 구현했습니다.',
    '닉네임과 주기 수정 시 상세 정보가 즉시 반영되는 업데이트 흐름을 구현했습니다.',
  ],
  challenge: [
    '식물 상세 모달 안에서 상태 확인과 설정 기능이 함께 제공되어 정보 확인과 수정 흐름을 명확히 나눌 필요가 있었습니다.',
    '물주기, 영양제, 분갈이처럼 날짜 기반으로 달라지는 정보를 사용자에게 직관적으로 보여주기 위해 계산 로직의 정확성이 중요했습니다.',
    '기능 구현 이후에도 서비스 완성도를 높이기 위해 접근성과 SEO 개선이 필요했습니다.',
  ],
  solution: [
    '상태 탭과 설정 탭을 분리해 조회와 수정 흐름이 섞이지 않도록 상세 모달의 역할을 나눴습니다.',
    '날짜 계산 로직을 통해 식물 관리 주기를 D-day 형태로 시각화해 사용자가 관리 시점을 빠르게 파악할 수 있게 했습니다.',
    'Root Layout에 metadata를 추가하고 `robots.txt`를 설정해 검색 엔진 수집 환경을 정리했습니다.',
    'FAB 버튼과 마이페이지 링크에 `aria-label`을 추가하고 색상 대비와 시맨틱 태그를 보완해 접근성을 개선했습니다.',
  ],
  learning: [
    'Lighthouse 기준 접근성 82에서 100, SEO 82에서 100으로 개선했습니다.',
    '기능 구현 이후에도 접근성, 검색 노출, 사용성까지 함께 다루는 프론트엔드 품질 개선이 필요하다는 점을 배웠습니다.',
    '조회와 수정 흐름이 자연스럽게 이어지는 화면 구조를 설계하는 경험을 쌓았습니다.',
  ],
};

const plantifulTroubleShooting: ProjectTroubleShooting = {
  title: '접근성·SEO 개선',
  problem:
    'Lighthouse 기준 접근성 82, SEO 82로 서비스 완성도를 더 높일 필요가 있었습니다.',
  solution:
    '`aria-label`, 시맨틱 태그, metadata, `robots.txt`를 적용해 접근성과 검색 엔진 수집 환경을 함께 개선했습니다.',
  impact: '접근성 100, SEO 100으로 개선했습니다.',
  keywords: ['접근성', 'SEO', 'Lighthouse'],
};

const usedMarketStar: ProjectStar = {
  role: [
    '프론트엔드 기능 개발과 UI 구현을 맡았습니다.',
    '상품 목록, 상세, 등록, 수정 화면 UI를 구현했습니다.',
    '실시간 채팅 기능을 구현했습니다.',
    '상품 상세 페이지 안에서 실시간 경매 기능을 구현했습니다.',
    '경매 상태 변화에 따라 입찰과 낙찰 UI가 반영되도록 로직을 구현했습니다.',
  ],
  challenge: [
    '백엔드 API와 연동하면서 화면에 필요한 데이터 구조와 요청·응답 흐름을 정확히 이해하고 연결해야 했습니다.',
    '실시간 채팅과 경매 기능에서 WebSocket 기반 이벤트를 사용자 화면에 안정적으로 반영하는 구조가 필요했습니다.',
    '연결 끊김, 재연결, 이벤트 순서 차이, 중복 수신처럼 실시간 기능 특유의 예외 상황을 고려해야 했습니다.',
  ],
  solution: [
    'API 스펙을 기준으로 화면 데이터와 요청·응답 흐름을 정리하며 프론트엔드와 백엔드의 인터페이스를 맞췄습니다.',
    'WebSocket(STOMP) 기반 통신 방식을 적용해 구독한 이벤트를 UI 상태에 반영하는 패턴을 구현했습니다.',
    '메시지, 입찰, 낙찰처럼 이벤트 단위로 상태가 변하는 구조를 기준으로 화면 로직을 기능 단위로 나눠 구현했습니다.',
  ],
  learning: [
    '실시간 기능에서는 클라이언트 상태 동기화와 예외 처리 설계가 핵심이라는 점을 배웠습니다.',
    'WebSocket(STOMP) 기반 실시간 통신 패턴과 연결 전후 메시지 처리 흐름을 직접 다뤄볼 수 있었습니다.',
    'API 스펙을 기준으로 데이터 흐름을 정리하고 백엔드와 협업하는 방법을 익혔습니다.',
  ],
};

const usedMarketTroubleShooting: ProjectTroubleShooting = {
  title: '메시지 유실 방지',
  problem:
    '채팅방 진입 직후 소켓 연결이 완료되기 전 0.5~1초 사이에 작성한 메시지가 전송되지 않고 사라지는 문제가 있었습니다.',
  solution:
    '`useChat` 훅 내부에 Queue를 두고 연결 전 메시지를 임시 저장한 뒤, 연결이 완료되면 자동으로 Flush하도록 구현했습니다.',
  impact:
    '소켓 연결 직후에도 사용자가 입력한 메시지가 유실되지 않도록 전송 흐름을 보완했습니다.',
  keywords: ['WebSocket', 'STOMP', 'Queue', 'Flush'],
};

export const projects: Project[] = [
  {
    id: 'parkybara',
    title: 'Parkybara',
    period: '2025.12 - 2026.01',
    type: 'Team Project',
    summary: '혼잡도 기반 서울 주요 공원 추천 서비스',
    description:
      '서울 주요 공원의 혼잡도와 주변 시설 정보를 지도 기반으로 제공해, 사용자가 상황에 맞는 공원을 탐색할 수 있도록 구현한 서비스입니다.',
    myRole:
      '지도 기반 UI와 데이터 표시 구조를 설계하고, Kakao Map API를 활용한 핵심 화면 구현을 맡았습니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS v4',
      'TanStack Query',
      'Zustand',
      'Kakao Map API',
      'Chart.js',
      'Embla Carousel',
    ],
    techHighlights: [
      {
        name: 'Kakao Map API',
        usage:
          '공원 위치와 사용자 인터랙션이 중심이 되는 지도 화면을 구현했습니다.',
      },
      {
        name: 'TanStack Query',
        usage:
          '공원 정보 조회 흐름에 맞춰 화면 상태와 비동기 데이터를 관리했습니다.',
      },
      {
        name: 'Zustand',
        usage: '지도 중심 화면에서 필요한 UI 상태를 단순하게 관리했습니다.',
      },
    ],
    troubleShooting: parkybaraTroubleShooting,
    troubleShootings: [parkybaraTroubleShooting],
    outcomes: parkybaraStar.learning,
    links: { github: 'https://github.com/Team-Capybaras/goorm-comma' },
    color: 'sage',
    images: [
      {
        src: '/projects/parkybara/parkybara1.jpg',
        alt: 'Parkybara 메인 지도 화면',
      },
      {
        src: '/projects/parkybara/parkybara.mp4',
        alt: 'Parkybara 기능 시연 영상',
        type: 'video',
      },
    ],
    star: parkybaraStar,
    details: createProjectDetails({
      overview:
        '서울 주요 공원의 혼잡도와 주변 시설 정보를 지도 위에서 함께 보여줘, 상황에 맞는 공원을 탐색할 수 있도록 만든 프로젝트입니다.',
      star: parkybaraStar,
      troubleShooting: parkybaraTroubleShooting,
      outcomes: parkybaraStar.learning,
    }),
  },
  {
    id: 'mind-safe',
    title: 'Mind-Safe',
    period: '2025.10.15 - 2025.10.29',
    type: 'Team Project',
    summary: '익명 고민상담 SNS 서비스',
    description:
      '익명으로 고민을 공유하고 소통할 수 있는 SNS 서비스에서, 게시글 작성 흐름의 사용자 경험과 즉각적인 피드백을 중심으로 구현한 프로젝트입니다.',
    myRole:
      '게시글 작성 기능과 작성 직후 결과가 반영되는 사용자 흐름을 맡아 모달 UI와 낙관적 업데이트를 구현했습니다.',
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS v4',
      'React Query v5',
      'Zustand',
      'React Hook Form',
      'Zod',
    ],
    techHighlights: [
      {
        name: 'React Query v5',
        usage:
          '게시글 등록 직후 리스트가 갱신되는 낙관적 업데이트 흐름을 구현했습니다.',
      },
      {
        name: 'React Hook Form',
        usage: '게시글 작성 모달의 입력 상태를 일관되게 관리했습니다.',
      },
      {
        name: 'Zod',
        usage: '작성 폼의 검증 규칙을 명확히 정의해 입력 흐름과 연결했습니다.',
      },
    ],
    troubleShooting: mindSafeTroubleShooting,
    troubleShootings: [mindSafeTroubleShooting],
    outcomes: mindSafeStar.learning,
    links: {
      github: 'https://github.com/2SIONN/minds-safe.git',
      demo: 'https://minds-safe.vercel.app/',
    },
    color: 'blue',
    images: [
      {
        src: '/projects/mind-safe/mind-safe1.jpg',
        alt: 'Mind-Safe 로그인 화면',
      },
      {
        src: '/projects/mind-safe/mind-safe2.jpg',
        alt: 'Mind-Safe 메인 화면',
      },
      {
        src: '/projects/mind-safe/mind-safe3.jpg',
        alt: 'Mind-Safe 게시글 작성 모달',
      },
      {
        src: '/projects/mind-safe/mind-safe4.jpg',
        alt: 'Mind-Safe 마이페이지',
      },
    ],
    star: mindSafeStar,
    details: createProjectDetails({
      overview:
        '익명으로 고민을 나누는 SNS 서비스에서 게시글 작성 경험을 개선하는 데 집중한 프로젝트입니다. 작성 모달과 작성 직후 피드백 흐름을 구현했습니다.',
      star: mindSafeStar,
      troubleShooting: mindSafeTroubleShooting,
      outcomes: mindSafeStar.learning,
    }),
  },
  {
    id: 'plantiful',
    title: 'Plantiful',
    period: '2025.10 - 2025.12',
    type: 'Team Project',
    summary: '식물 관리 서비스',
    description:
      '식물의 상태 확인, 관리 주기 계산, 정보 수정 기능을 통해 사용자가 반려식물을 체계적으로 관리할 수 있도록 구현한 서비스입니다.',
    myRole:
      '식물 상세 모달, 검색·정렬 기능, D-day 계산 로직을 맡아 조회와 수정 흐름이 자연스럽게 이어지도록 구현했습니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Supabase',
    ],
    techHighlights: [
      {
        name: 'React Query',
        usage:
          '식물 정보 수정 이후 상세 정보가 즉시 반영되도록 조회와 갱신 흐름을 연결했습니다.',
      },
      {
        name: 'Supabase',
        usage:
          '식물 데이터 조회와 수정 흐름을 연결하는 백엔드 서비스로 활용했습니다.',
      },
      {
        name: 'TypeScript',
        usage:
          '날짜 계산과 상세 모달 상태를 다루는 로직을 타입 기반으로 정리했습니다.',
      },
    ],
    troubleShooting: plantifulTroubleShooting,
    troubleShootings: [plantifulTroubleShooting],
    outcomes: plantifulStar.learning,
    links: {
      github: 'https://github.com/teamPlantiful/plantiful.git',
      demo: 'https://plantiful-ten.vercel.app/',
    },
    color: 'sage',
    images: [
      { src: '/projects/plantiful/plantiful.jpg', alt: 'Plantiful 홈 화면' },
      {
        src: '/projects/plantiful/plantiful1.jpg',
        alt: 'Plantiful 식물 등록 화면 1',
      },
      {
        src: '/projects/plantiful/plantiful2.jpg',
        alt: 'Plantiful 식물 등록 화면 2',
      },
      {
        src: '/projects/plantiful/plantiful3.jpg',
        alt: 'Plantiful 알림 센터',
      },
      {
        src: '/projects/plantiful/plantiful4.jpg',
        alt: 'Plantiful 마이페이지',
      },
      {
        src: '/projects/plantiful/plantiful5.jpg',
        alt: 'Plantiful 로그인 화면',
      },
      {
        src: '/projects/plantiful/plantiful6.jpg',
        alt: 'Plantiful 식물 상세 화면',
      },
      {
        src: '/projects/plantiful/plantiful7.jpg',
        alt: 'Plantiful 식물 수정 화면',
      },
    ],
    star: plantifulStar,
    details: createProjectDetails({
      overview:
        '반려식물의 상태를 확인하고 관리 주기를 계산해 사용자가 필요한 관리 시점을 놓치지 않도록 만든 서비스입니다.',
      star: plantifulStar,
      troubleShooting: plantifulTroubleShooting,
      outcomes: plantifulStar.learning,
    }),
  },
  {
    id: 'used-market',
    title: 'Used Market',
    period: '2025.03 - 2025.11',
    type: 'Graduation Project',
    summary: 'AI 기반 중고기기 경매 플랫폼',
    description:
      'AI 품질 분석 모델과 실시간 경매 시스템을 결합해, 중고 전자기기의 상태 확인부터 입찰까지 이어지는 거래 경험을 제공하는 서비스입니다.',
    myRole:
      '상품 화면 UI와 함께 실시간 채팅·경매 기능을 구현하고, 상태 변화가 화면에 반영되는 구조를 맡았습니다.',
    techStack: ['React', 'Vite', 'React Query', 'StompJS'],
    techHighlights: [
      {
        name: 'StompJS',
        usage:
          '실시간 채팅과 경매 이벤트를 구독하고 UI 상태에 반영하는 흐름을 구현했습니다.',
      },
      {
        name: 'React Query',
        usage: '상품 데이터 조회 흐름과 화면 상태를 연결했습니다.',
      },
      {
        name: 'Vite',
        usage: '실시간 기능이 포함된 프론트엔드 개발 환경을 구성했습니다.',
      },
    ],
    troubleShooting: usedMarketTroubleShooting,
    troubleShootings: [usedMarketTroubleShooting],
    outcomes: usedMarketStar.learning,
    links: {
      github: 'https://github.com/asdfdk123/usedmarket.git',
    },
    images: [
      {
        src: '/projects/used-market/used-market1.png',
        alt: 'Used Market 홈 화면',
      },
      {
        src: '/projects/used-market/used-market2.png',
        alt: 'Used Market 상품 목록',
      },
      {
        src: '/projects/used-market/used-market3.png',
        alt: 'Used Market 상품 상세 페이지',
      },
    ],
    color: 'orange',
    star: usedMarketStar,
    details: createProjectDetails({
      overview:
        'AI 품질 분석과 실시간 경매를 결합해 중고 전자기기 거래 흐름을 지원하는 프로젝트입니다. 프론트엔드에서는 실시간 이벤트가 화면에 자연스럽게 반영되도록 구현했습니다.',
      star: usedMarketStar,
      troubleShooting: usedMarketTroubleShooting,
      outcomes: usedMarketStar.learning,
    }),
  },
  {
    id: 'template',
    title: '프로젝트 제목',
    period: '기간',
    type: 'Team Project',
    summary: '요약',
    description: '설명',
    myRole: '내 역할 요약',
    techStack: ['기술스택'],
    techHighlights: [
      {
        name: '기술명',
        usage: '이 프로젝트에서 기술을 어떻게 사용했는지 정리합니다.',
      },
    ],
    troubleShooting: {
      title: '트러블슈팅 제목',
      problem: '문제',
      solution: '해결',
    },
    troubleShootings: [
      {
        title: '트러블슈팅 제목',
        problem: '문제',
        solution: '해결',
      },
    ],
    outcomes: ['결과 및 배운 점'],
    links: { github: '#', demo: '#' },
    color: 'sage',
    images: [],
    details: [
      {
        key: 'overview',
        title: '프로젝트 소개',
        body: '프로젝트 한 줄 소개와 목표를 작성합니다.',
      },
      {
        key: 'role',
        title: '내 역할',
        bullets: ['담당한 기능과 범위를 작성합니다.'],
      },
      {
        key: 'challenge',
        title: '기술적 도전',
        bullets: ['문제를 작성합니다.'],
      },
      {
        key: 'solution',
        title: '해결 과정',
        bullets: ['해결 방법을 작성합니다.'],
      },
      {
        key: 'troubleShooting',
        title: '트러블슈팅',
        bullets: ['문제: 내용', '해결: 내용'],
      },
      {
        key: 'outcome',
        title: '결과 및 배운 점',
        bullets: ['결과 및 배운 점을 작성합니다.'],
      },
    ],
    published: false,
  },
];
