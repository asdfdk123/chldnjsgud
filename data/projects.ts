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
  imageText: string;
  color: 'sage' | 'orange' | 'blue';
}

export const projects: Project[] = [
  {
    id: 'plantiful',
    title: 'Plantiful',
    period: '2025.10 - 2025.12',
    type: 'Team Project',
    summary: '3D 인터랙티브 스마트 반려식물 케어 서비스',
    description:
      'Three.js를 활용해 식물 상태를 3D로 시각화하고, 물주기 등의 상호작용을 직관적으로 구현했습니다. 서버 응답 지연으로 인한 UX 저하 문제를 낙관적 업데이트로 해결했습니다.',
    techStack: [
      'Next.js 16',
      'TypeScript',
      'React Query',
      'Supabase',
      'Three.js',
    ],
    troubleShooting: {
      title: '0.5초의 딜레이 삭제',
      problem:
        '물주기 버튼 클릭 시 서버 응답 대기(약 0.5초)로 인해 화면 멈춤 현상 발생 및 중복 클릭 유발.',
      solution:
        'React Query의 onMutate를 활용해 UI를 선제적으로 갱신(Optimistic Updates)하고, 실패 시 롤백하는 로직 구현.',
    },
    links: {
      github: '#',
      demo: '#',
    },
    imageText: 'Plantiful Screen',
    color: 'sage',
  },
  {
    id: 'used-market',
    title: 'Used Market',
    period: '2025.03 - 2025.10',
    type: 'Graduation Project',
    summary: '실시간 경매 & 중고 거래 플랫폼',
    description:
      'WebSocket 기반의 실시간 입찰 시스템과 AI(MobileNetV2) 기반 상품 등급 판정 모델을 통합한 서비스입니다. 네트워크 불안정 상황에서도 메시지 전송을 보장합니다.',
    techStack: [
      'React 19',
      'Vite',
      'StompJS',
      'React Query',
      'Zustand',
      'Message Queue',
    ],
    troubleShooting: {
      title: '메시지 유실 방지',
      problem:
        '채팅방 진입 직후 소켓 연결(0.5~1초) 전 작성된 메시지가 전송되지 않고 증발하는 현상.',
      solution:
        'useChat 훅 내부에 대기열(Queue)을 구현. 연결 전 메시지는 큐에 쌓고, 연결 즉시 자동 전송(Flush)하여 전송 보장.',
    },
    links: {
      github: '#',
    },
    imageText: 'Used Market Screen',
    color: 'orange',
  },
];
