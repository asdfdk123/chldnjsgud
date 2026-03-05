export interface ProjectDetailSection {
  title: string;
  body?: string;
  bullets?: string[];
}

export interface ProjectStar {
  role: string[]; // 담당 기능 및 구현 범위
  challenge: string[]; // 기술적 도전 / 핵심 과제
  solution: string[]; // 해결 방법
  learning: string[]; // 성과 & 배운 점
}

export interface Project {
  id: string;
  title: string;
  period: string;
  type: 'Team Project' | 'Personal Project' | 'Graduation Project';
  description: string;
  summary: string;
  techStack: string[];
  troubleShooting: {
    title: string;
    problem: string;
    solution: string;
  };
  links: {
    github?: string;
    demo?: string;
  };
  images?: { src: string; alt: string; type?: 'image' | 'video' }[];
  color: 'sage' | 'orange' | 'blue';
  details?: ProjectDetailSection[];
  star?: ProjectStar;
  published?: boolean; // 기본 true로 취급(없으면 true)
}

export const projects: Project[] = [
  {
    id: 'parkybara',
    title: 'Parkybara',
    period: '2025.12 - 2026.01',
    type: 'Team Project',
    summary: '혼잡도 기반 서울 주요 공원 추천 서비스',
    description:
      '서울 주요 공원의 혼잡도와 주변 시설 정보를 지도 기반으로 제공해, 사용자가 상황에 맞는 공원을 탐색할 수 있도록 구현한 서비스입니다.',
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
    troubleShooting: {
      title: '협업 기준 정렬',
      problem: '기획 단계에서 PM, QA 단계에서 PD와 요구사항 해석 차이가 발생.',
      solution: '기획 의도와 QA 기준을 다시 문서화·정렬해 구현 기준을 통일.',
    },
    links: {},
    color: 'sage',
    images: [
      {
        src: '/projects/parkybara/parkybara1.jpg',
        alt: 'Parkybara 스크린샷 1',
      },
      {
        src: '/projects/parkybara/parkybara.mp4',
        alt: 'Parkybara 데모 영상',
        type: 'video',
      },
    ],
    star: {
      challenge: [
        '지도 기반 서비스 특성상 위치 정보, 공원 정보, 혼잡도 데이터 등 여러 정보를 한 화면에서 직관적으로 보여줘야 했음',
        '외부 라이브러리와 지도 API를 함께 사용할 때 화면 구조가 복잡해지기 쉬워 재사용 가능한 컴포넌트 설계가 중요했음',
        '협업 과정에서 기획 단계에서는 PM, QA 단계에서는 PD와 요구사항 해석 차이가 발생해 구현 기준을 정리할 필요가 있었음',
      ],
      role: [
        '프론트엔드 3인 협업 프로젝트에서 UI 개발, 기능 구현, 기술 협업 담당',
        '외부 라이브러리 기반 공통 컴포넌트 구성 및 재사용 가능한 UI 구조 설계',
        'Kakao Map API를 활용한 지도 화면 구현',
        '지도 위 공원 혼잡도 및 주변 시설 정보 시각화',
        '데이터 조회 흐름에 맞춘 화면 인터랙션 및 상태 반영 로직 구현',
      ],
      solution: [
        '공통 컴포넌트를 먼저 정리한 뒤 지도/정보 표시 기능에 연결해 반복 UI를 줄이고 유지보수성을 높임',
        'Kakao Map API와 데이터 렌더링 구조를 분리해 지도 표현과 정보 표시 책임을 나눠 구현함',
        '공원 혼잡도와 주변 시설 정보를 사용자 시점에서 빠르게 확인할 수 있도록 지도 중심 UX를 구성함',
        '협업 충돌이 발생했을 때 기획 의도와 QA 기준을 다시 문서화·정렬하는 과정으로 해결함',
      ],
      learning: [
        '외부 API 연동 및 재사용 가능한 컴포넌트 설계 역량을 키움',
        '직군 간 협업 조율의 중요성과 문서 기반 기준 정렬의 효과를 체감함',
        'PM, PD, BE 등 다양한 직군과의 협업 경험을 통해 커뮤니케이션 방식을 개선함',
      ],
    },
  },

  {
    id: 'mind-safe',
    title: 'Mind-Safe',
    period: '2025.10.15 - 2025.10.29',
    type: 'Team Project',
    summary: '익명 고민상담 SNS 서비스',
    description:
      '익명으로 고민을 공유하고 소통할 수 있는 SNS 서비스에서, 게시글 작성 흐름의 사용자 경험과 즉각적인 피드백을 중심으로 구현한 프로젝트입니다.',
    techStack: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS v4',
      'React Query v5',
      'Zustand',
      'React Hook Form',
      'Zod',
    ],
    troubleShooting: {
      title: '낙관적 업데이트 동기화',
      problem:
        '게시글 등록 직후 서버 응답 대기 없이 즉각적인 피드백이 필요했음.',
      solution:
        'React Query 기반 낙관적 업데이트를 적용해 작성된 게시글이 리스트 최상단에 즉시 노출되도록 구현.',
    },
    links: {
      github: 'https://github.com/2SIONN/minds-safe.git',
      demo: 'https://minds-safe.vercel.app/',
    },
    color: 'blue',
    images: [
      {
        src: '/projects/mind-safe/mind-safe1.jpg',
        alt: 'Mind-Safe 스크린샷 1',
      },
      {
        src: '/projects/mind-safe/mind-safe2.jpg',
        alt: 'Mind-Safe 스크린샷 2',
      },
      {
        src: '/projects/mind-safe/mind-safe3.jpg',
        alt: 'Mind-Safe 스크린샷 3',
      },
      {
        src: '/projects/mind-safe/mind-safe4.jpg',
        alt: 'Mind-Safe 스크린샷 4',
      },
    ],
    star: {
      challenge: [
        '게시글 작성 기능을 모달 내부에서 자연스럽게 처리하면서도 기획안과 요건 정의서에 맞는 일관된 사용자 흐름을 구현해야 했음',
        '등록 직후 서버 응답을 기다리지 않고도 사용자에게 즉각적인 피드백을 주는 경험이 필요했음',
        '낙관적 업데이트 적용 시 목록 데이터와 서버 상태 간 동기화 흐름을 안정적으로 관리해야 했음',
      ],
      role: [
        '팀 A 소속으로 게시글 작성 기능 구현 담당',
        '/write 게시글 작성 기능 전반 구현',
        '태그를 포함할 수 있는 게시글 작성 모달 UI 구현',
        '입력/검증 흐름을 반영한 작성 폼 구성',
        '게시글 등록 후 리스트에 즉시 반영되는 낙관적 업데이트 적용',
      ],
      solution: [
        '공통 컴포넌트를 활용해 작성 모달을 구성하고 입력 흐름을 UI 단위로 분리해 재사용성과 유지보수성을 높임',
        'React Query 기반 낙관적 업데이트를 적용해 작성된 게시글이 리스트 최상단에 즉시 노출되도록 구현함',
        '기능 구현, 테스트, 문서화 및 PR 작성·리뷰에 참여하며 협업 프로세스를 따름',
      ],
      learning: [
        '사용자 액션 이후 결과를 빠르게 반영하는 UX 설계 경험을 얻음',
        '서버 상태 관리와 캐시 업데이트 패턴을 실전에서 학습함',
        '낙관적 업데이트의 동작 방식과 실패 상황을 고려한 상태 처리 흐름을 이해하게 됨',
      ],
    },
  },

  {
    id: 'plantiful',
    title: 'Plantiful',
    period: '2025.10 - 2025.12',
    type: 'Team Project',
    summary: '식물 관리 서비스',
    description:
      '식물의 상태 확인, 관리 주기 계산, 정보 수정 기능을 통해 사용자가 반려식물을 체계적으로 관리할 수 있도록 구현한 서비스입니다.',
    techStack: [
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'React Query',
      'Supabase',
    ],
    troubleShooting: {
      title: '접근성·SEO 개선',
      problem: 'Lighthouse 기준 접근성 82, SEO 82로 낮은 수치.',
      solution:
        'aria-label, 시맨틱 태그, metadata, robots.txt를 적용해 접근성 100, SEO 100으로 개선.',
    },
    links: {
      github: 'https://github.com/teamPlantiful/plantiful.git',
      demo: 'https://plantiful-ten.vercel.app/',
    },
    color: 'sage',
    images: [
      { src: '/projects/plantiful/plantiful.jpg', alt: 'Plantiful 화면 0' },
      { src: '/projects/plantiful/plantiful1.jpg', alt: 'Plantiful 화면 1' },
      { src: '/projects/plantiful/plantiful2.jpg', alt: 'Plantiful 화면 2' },
      { src: '/projects/plantiful/plantiful3.jpg', alt: 'Plantiful 화면 3' },
      { src: '/projects/plantiful/plantiful4.jpg', alt: 'Plantiful 화면 4' },
      { src: '/projects/plantiful/plantiful5.jpg', alt: 'Plantiful 화면 5' },
      { src: '/projects/plantiful/plantiful6.jpg', alt: 'Plantiful 화면 6' },
      { src: '/projects/plantiful/plantiful7.jpg', alt: 'Plantiful 화면 7' },
    ],
    star: {
      challenge: [
        '식물 상세 모달 안에서 상태 확인과 설정 기능이 함께 제공되어야 해 정보 확인과 수정 흐름을 명확히 분리할 필요가 있었음',
        '물주기, 영양제, 분갈이와 같이 날짜 기반으로 달라지는 정보를 사용자에게 직관적으로 보여주기 위해 계산 로직의 정확성이 중요했음',
        '기능 구현 이후에도 서비스 완성도를 높이기 위해 SEO와 웹 접근성 개선이 필요했음',
      ],
      role: [
        '프론트엔드 4인 협업 프로젝트에서 검색·정렬 기능 및 식물 상세 모달 구현 담당',
        '식물 상세 모달 내 상태 / 설정 탭 UI 분리 구현',
        '식물 닉네임 변경, 식물 정보 수정, 삭제 기능 구현',
        '물주기 / 영양제 / 분갈이 주기를 기준으로 D-day 계산 로직 구현',
        '닉네임 및 주기 수정 시 상세 정보가 즉시 반영되는 업데이트 흐름 구현',
      ],
      solution: [
        '상태 탭과 설정 탭을 분리해 상세 모달의 역할을 명확히 나누고 조회와 수정 흐름이 섞이지 않도록 UI를 구성함',
        '날짜 계산 로직을 통해 식물 관리 주기를 D-day 형태로 시각화해 사용자가 필요한 관리 시점을 빠르게 파악할 수 있도록 구현함',
        'RootLayout에 metadata를 추가하고 robots.txt를 설정해 검색 엔진 수집 환경을 개선함',
        'FAB 버튼과 마이페이지 링크에 aria-label을 추가하고 색상 대비와 시맨틱 태그를 보완해 접근성을 개선함',
      ],
      learning: [
        'Lighthouse 기준 접근성 82 → 100, SEO 82 → 100으로 개선, 성능 98 → 97 수준으로 유지',
        '단순 기능 구현을 넘어 사용성·접근성·검색 노출까지 포함한 프론트엔드 품질 개선의 중요성을 배움',
        '식물 정보 조회와 수정 흐름이 자연스럽게 이어지도록 사용자 인터랙션 중심 화면 구현 경험을 얻음',
      ],
    },
  },

  {
    id: 'used-market',
    title: 'Used Market',
    period: '2025.03 - 2025.11',
    type: 'Graduation Project',
    summary: 'AI 기반 중고기기 경매 플랫폼',
    description:
      'AI 품질 분석 모델과 실시간 경매 시스템을 결합해, 중고 전자기기의 상태 확인부터 입찰까지 이어지는 거래 경험을 제공하는 서비스입니다.',
    techStack: ['React', 'Vite', 'React Query', 'StompJS'],
    troubleShooting: {
      title: '메시지 유실 방지',
      problem:
        '채팅방 진입 직후 소켓 연결(0.5~1초) 전 작성된 메시지가 전송되지 않고 증발하는 현상.',
      solution:
        'useChat 훅 내부에 대기열(Queue)을 구현. 연결 전 메시지는 큐에 쌓고, 연결 즉시 자동 전송(Flush)하여 전송 보장.',
    },
    links: {
      github: 'https://github.com/asdfdk123/usedmarket.git',
    },
    images: [
      {
        src: '/projects/used-market/used-market1.png',
        alt: 'Used Market 화면 1',
      },
      {
        src: '/projects/used-market/used-market2.png',
        alt: 'Used Market 화면 2',
      },
      {
        src: '/projects/used-market/used-market3.png',
        alt: 'Used Market 화면 3',
      },
    ],
    color: 'orange',
    star: {
      challenge: [
        '백엔드 API와의 연동 과정에서 화면에 필요한 데이터 구조와 요청/응답 흐름을 정확히 이해하고 연결해야 했음',
        '실시간 채팅/경매 기능 구현 시 WebSocket 기반 이벤트를 사용자 화면에 안정적으로 반영하는 구조가 필요했음',
        '연결 끊김/재연결, 이벤트 순서 차이, 중복 수신 등 실시간 기능 특유의 예외 상황을 고려해야 했음',
      ],
      role: [
        '프론트엔드 기능 개발 및 UI 구현 담당',
        '상품 목록 / 상세 / 등록 / 수정 화면 UI 구현',
        '실시간 채팅 기능 구현',
        '상품 상세 페이지 내 실시간 경매 기능 구현',
        '경매 상태 변화에 따른 입찰/낙찰 UI 반영 로직 구현',
      ],
      solution: [
        'API 스펙을 기준으로 화면 데이터와 요청/응답 흐름을 정리하며 프론트엔드-백엔드 인터페이스 협업 경험을 쌓음',
        'WebSocket(STOMP) 기반 통신 방식을 적용해 구독/수신 이벤트를 UI 상태에 반영하는 패턴을 구현함',
        '메시지/입찰/낙찰 등 이벤트 단위로 상태가 변하는 구조를 이해하고 화면 로직을 기능 단위로 분리해 구현함',
      ],
      learning: [
        '실시간 기능 구현 과정에서 클라이언트 관점의 상태 동기화와 예외 처리 중요성을 학습함',
        'WebSocket(STOMP) 기반 실시간 통신 패턴과 연결 전/후 메시지 처리 로직(Queue + Flush)을 직접 설계함',
        '프론트엔드-백엔드 인터페이스 협업 방식과 API 스펙 기반 데이터 흐름 정리 역량을 쌓음',
      ],
    },
  },

  {
    id: 'template',
    title: '프로젝트 제목',
    period: '기간',
    type: 'Team Project',
    summary: '요약',
    description: '설명',
    techStack: ['기술스택'],
    troubleShooting: { title: '제목', problem: '문제', solution: '해결' },
    links: { github: '#', demo: '#' },
    color: 'sage',
    images: [],
    published: false,
  },
];
