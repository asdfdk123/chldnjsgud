import { Code } from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiThreedotjs,
  SiVite,
} from 'react-icons/si';
import { TbBrandOauth } from 'react-icons/tb';
// [NEW] 데이터 파일 불러오기
import { techStack, history } from '@/data/profile';

export function About() {
  // 아이콘 매핑 함수 (데이터에는 이름만 있으므로)
  const getIcon = (name: string) => {
    switch (name) {
      case 'Next.js 16':
        return <SiNextdotjs className="text-black" />;
      case 'React 19':
        return <SiReact className="text-[#61DAFB]" />;
      case 'TypeScript':
        return <SiTypescript className="text-[#3178C6]" />;
      case 'Tailwind CSS':
        return <SiTailwindcss className="text-[#06B6D4]" />;
      case 'TanStack Query':
        return <TbBrandOauth className="text-[#FF4154]" />;
      case 'Zustand':
        return <span className="text-lg">🐻</span>;
      case 'Supabase':
        return <SiSupabase className="text-[#3ECF8E]" />;
      case 'Three.js':
        return <SiThreedotjs className="text-black" />;
      case 'StompJS':
        return <SiVite className="text-[#646CFF]" />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="about" className="bg-cream px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        <div className="space-y-10">
          <div>
            <h2 className="text-coffee mb-6 font-serif text-4xl">About Me</h2>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed">
              <p>
                <strong className="text-foreground mb-2 block text-xl">
                  한줄 소개{' '}
                </strong>
              </p>
              <p>상세소개</p>
            </div>
          </div>

          <div>
            <h3 className="text-coffee mb-4 flex items-center gap-2 text-xl font-bold">
              <Code className="text-sage" size={24} /> Tech Stack
            </h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <div
                  key={tech}
                  className="border-sage/20 hover:border-sage flex cursor-default items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm transition-all"
                >
                  <span className="text-lg">{getIcon(tech)}</span>
                  <span className="text-coffee text-sm font-medium">
                    {tech}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative space-y-8">
          <h3 className="text-coffee font-serif text-2xl">History</h3>
          <div className="bg-sage/20 absolute top-12 bottom-10 left-[29px] w-0.5" />

          {history.map((item) => (
            <div key={item.id} className="group relative pl-12">
              <div
                className={`border-cream absolute top-1.5 left-4 z-10 h-6 w-6 rounded-full border-4 transition-transform group-hover:scale-110 ${item.color === 'sage' ? 'bg-sage' : item.color === 'coffee' ? 'bg-coffee' : 'bg-sand'} `}
              />

              <div className="card-warm bg-white/50 p-6 backdrop-blur-sm transition-colors hover:bg-white">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h4 className="flex items-center gap-2 text-lg font-bold">
                      {item.title}
                    </h4>
                    <p className="text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <span
                    className={`rounded px-2 py-1 text-xs font-bold ${item.color === 'sage' ? 'text-sage-dark bg-sage/10' : item.color === 'coffee' ? 'text-coffee bg-coffee/10' : 'text-muted-foreground bg-secondary'} `}
                  >
                    {item.period}
                  </span>
                </div>

                {item.description && (
                  <ul className="text-muted-foreground mt-3 list-inside list-disc space-y-1 text-sm">
                    {item.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                )}

                {item.descriptionText && (
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.descriptionText}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
