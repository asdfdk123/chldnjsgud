'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
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
import { techStack, history } from '@/src/data/profile';

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
      return <span className="text-base">🐻</span>;
    case 'Supabase':
      return <SiSupabase className="text-[#3ECF8E]" />;
    case 'Three.js':
      return <SiThreedotjs className="text-black" />;
    case 'StompJS':
      return <SiVite className="text-[#646CFF]" />;
    default:
      return <Code size={15} />;
  }
};

export function About() {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  const leftInView = useInView(leftRef, { once: true, margin: '-60px' });
  const rightInView = useInView(rightRef, { once: true, margin: '-60px' });
  const techInView = useInView(techRef, { once: true, margin: '-40px' });

  return (
    <section id="about" className="bg-cream px-6 py-24 lg:px-20">
      <div className="mx-auto grid max-w-6xl items-start gap-16 md:grid-cols-2">
        {/* 왼쪽: 소개 + 기술스택 */}
        <div ref={leftRef} className="space-y-10">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={leftInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <h2 className="text-coffee mb-6 font-serif text-4xl">About Me</h2>
            <div className="text-muted-foreground text-md space-y-4 leading-relaxed">
              <p>
                <strong className="text-foreground mb-2 block text-lg">
                  작은 충돌들이 모여 큰 변화를 만들어낼 수 있다는 생각을 가지고
                  꾸준히 문제를 해결하는 프런트엔드 개발자 최원형입니다.
                </strong>
              </p>
              <p>- 문제가 생기면 그 문제를 끝까지 해결합니다.</p>
              <p>
                {' '}
                - 다양한 직군과의 협업 단계에서 충돌이나 의견 차이를 통해
                성장하고 더 좋은 방향으로 나아갑니다.
              </p>
              <p> - 부족한 점을 깨닫고 채워나가는 과정을 좋아합니다.</p>
            </div>
          </motion.div>

          <div ref={techRef}>
            <motion.h3
              initial={{ opacity: 0, x: -16 }}
              animate={techInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="text-coffee mb-4 flex items-center gap-2 text-xl font-bold"
            >
              <Code className="text-sage" size={22} /> Tech Stack
            </motion.h3>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={techInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.35, delay: i * 0.055 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                  className="border-sage/20 hover:border-sage flex cursor-default items-center gap-2 rounded-full border bg-white px-4 py-2 shadow-sm transition-colors duration-200 hover:shadow-[0_4px_14px_rgba(138,154,91,0.2)]"
                >
                  <span className="text-base">{getIcon(tech)}</span>
                  <span className="text-coffee text-sm font-medium">
                    {tech}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 오른쪽: 타임라인 */}
        <div ref={rightRef} className="relative space-y-8">
          <motion.h3
            initial={{ opacity: 0, x: 20 }}
            animate={rightInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="text-coffee font-serif text-2xl"
          >
            History
          </motion.h3>

          <div className="bg-sage/20 absolute top-12 bottom-10 left-[29px] w-0.5" />

          {history.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: 28 }}
              animate={rightInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative pl-12"
            >
              <div
                className={`border-cream absolute top-1.5 left-4 z-10 h-6 w-6 rounded-full border-4 transition-transform duration-300 group-hover:scale-125 ${
                  item.color === 'sage'
                    ? 'bg-sage'
                    : item.color === 'coffee'
                      ? 'bg-coffee'
                      : 'bg-sand'
                }`}
              />

              <div className="card-warm bg-white/50 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-white hover:shadow-md">
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold">{item.title}</h4>
                    <p className="text-muted-foreground">{item.subtitle}</p>
                  </div>
                  <span
                    className={`rounded px-2 py-1 text-xs font-bold ${
                      item.color === 'sage'
                        ? 'text-sage-dark bg-sage/10'
                        : item.color === 'coffee'
                          ? 'text-coffee bg-coffee/10'
                          : 'text-muted-foreground bg-secondary'
                    }`}
                  >
                    {item.period}
                  </span>
                </div>

                {item.description && (
                  <ul className="text-muted-foreground mt-3 space-y-1 text-sm">
                    {item.description.map((desc, di) => (
                      <li key={di} className="flex gap-2">
                        <span className="bg-sage/60 mt-1.5 h-1 w-1 flex-none rounded-full" />
                        {desc}
                      </li>
                    ))}
                  </ul>
                )}

                {item.descriptionText && (
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {item.descriptionText}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
