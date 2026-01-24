import { Code } from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiThreedotjs,
} from 'react-icons/si';

export function About() {
  const skills = [
    { name: 'Next.js', icon: <SiNextdotjs className="text-black" /> },
    { name: 'React', icon: <SiReact className="text-[#61DAFB]" /> },
    { name: 'TypeScript', icon: <SiTypescript className="text-[#3178C6]" /> },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-[#06B6D4]" />,
    },
    {
      name: 'TanStack Query',
    },
    { name: 'Zustand' }, // 주스탄드는 곰돌이 이모지로 포인트
    { name: 'Supabase', icon: <SiSupabase className="text-[#3ECF8E]" /> },
    { name: 'Three.js', icon: <SiThreedotjs className="text-black" /> },
  ];

  return (
    <section id="about" className="bg-cream px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        {/* --- 왼쪽: 자기소개 & 기술 스택 --- */}
        <div className="space-y-10">
          <div>
            <h2 className="text-coffee mb-6 font-serif text-4xl">About Me</h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                <strong className="text-foreground mb-2 block text-xl">
                  갈등을 회피하지 않고 해결하는 중재자
                </strong>
              </p>
              <p>
                개발은 혼자 하는 것이 아니라, 기획-디자인-개발이 맞물려 돌아가는
                톱니바퀴와 같다고 생각합니다. 학생회장 시절 의견 충돌을 조율했던
                경험은, 이제 <strong>동료가 이해하기 쉬운 코드</strong>를
                작성하는 원동력이 되었습니다.
              </p>
              <p>
                단순한 구현을 넘어,{' '}
                <strong className="text-sage-dark bg-sage/10 rounded px-1">
                  0.5초의 딜레이
                </strong>
                조차 허용하지 않는 집요함으로 사용자에게 매끄러운 경험을
                선물하고 싶습니다.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-coffee mb-4 flex items-center gap-2 text-xl font-bold">
              <Code className="text-sage" size={24} /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="border-sage/20 hover:border-sage flex cursor-default items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm transition-all hover:shadow-md"
                >
                  <span className="text-lg">{skill.icon}</span>
                  <span className="text-coffee text-sm font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative space-y-8">
          <h3 className="text-coffee font-serif text-2xl">History</h3>

          <div className="bg-sage/20 absolute top-12 bottom-10 left-[29px] w-0.5" />

          <div className="group relative pl-12">
            <div className="border-cream bg-sage absolute top-1.5 left-4 z-10 h-6 w-6 rounded-full border-4 transition-transform group-hover:scale-110" />
            <div className="card-warm bg-white/50 p-6 backdrop-blur-sm transition-colors hover:bg-white">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold">
                    구름 딥다이브 부트캠프
                  </h4>
                  <p className="text-muted-foreground">
                    Frontend 과정 수료 예정
                  </p>
                </div>
                <span className="text-sage-dark bg-sage/10 rounded px-2 py-1 text-xs font-bold">
                  2025.07 - 2026.01
                </span>
              </div>
              <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm">
                <li>Lighthouse 기반 웹 성능 최적화 방법론 학습</li>
                <li>Git Flow 협업 및 코드 리뷰 문화 체득</li>
              </ul>
            </div>
          </div>

          <div className="group relative pl-12">
            <div className="border-cream bg-coffee absolute top-1.5 left-4 z-10 h-6 w-6 rounded-full border-4 transition-transform group-hover:scale-110" />
            <div className="card-warm bg-white/50 p-6 backdrop-blur-sm transition-colors hover:bg-white">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold">
                    대한전자공학회 논문 게재
                  </h4>
                  <p className="text-muted-foreground">
                    추계학술대회 (학부생 부문)
                  </p>
                </div>
                <span className="text-coffee bg-coffee/10 rounded px-2 py-1 text-xs font-bold">
                  2025.11
                </span>
              </div>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                주제: AI 품질 분석과 실시간 경매 기능을 통합한 중고 전자기기
                거래 플랫폼 구현
              </p>
            </div>
          </div>

          <div className="group relative pl-12">
            <div className="border-cream bg-sand absolute top-1.5 left-4 z-10 h-6 w-6 rounded-full border-4 transition-transform group-hover:scale-110" />
            <div className="card-warm bg-white/50 p-6 backdrop-blur-sm transition-colors hover:bg-white">
              <div className="mb-2 flex items-start justify-between">
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold">
                    한경국립대학교
                  </h4>
                  <p className="text-muted-foreground">
                    소프트웨어융합 전공 (졸업예정)
                  </p>
                </div>
                <span className="text-muted-foreground bg-secondary rounded px-2 py-1 text-xs font-bold">
                  2020.03 - 2026.02
                </span>
              </div>
              <p className="text-muted-foreground mt-2 text-sm">
                학과 학생회장(2024) 역임 - 갈등 조율 및 소통 능력 함양
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
