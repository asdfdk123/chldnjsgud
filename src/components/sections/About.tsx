'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Code,
  FileText,
  Layers3,
  MessageSquareQuote,
  Radar,
} from 'lucide-react';
import {
  SiNextdotjs,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandOauth } from 'react-icons/tb';
import { history, strengths, techStack } from '@/src/data/profile';

const getIcon = (name: string) => {
  if (name.includes('React') || name.includes('Next.js')) {
    return (
      <div className="flex items-center gap-2">
        <SiReact className="text-[#61DAFB]" />
        <SiNextdotjs className="text-black" />
      </div>
    );
  }
  if (name.includes('TypeScript')) {
    return <SiTypescript className="text-[#3178C6]" />;
  }
  if (name.includes('TanStack Query') || name.includes('React Query')) {
    return <TbBrandOauth className="text-[#FF4154]" />;
  }
  if (name.includes('Zustand')) {
    return <Layers3 className="text-sage-dark" size={17} />;
  }
  if (name.includes('StompJS') || name.includes('WebSocket')) {
    return <Radar className="text-orange-500" size={17} />;
  }
  if (name.includes('Tailwind CSS')) {
    return <SiTailwindcss className="text-[#06B6D4]" />;
  }
  if (name.includes('Supabase')) {
    return <SiSupabase className="text-[#3ECF8E]" />;
  }
  return <Code size={17} className="text-sage-dark" />;
};

const strengthIconOf = (id: string) => {
  if (id === 'realtime-sync') {
    return <Radar size={18} className="text-blue-500" />;
  }
  if (id === 'message-queue') {
    return <MessageSquareQuote size={18} className="text-orange-500" />;
  }
  if (id === 'accessibility-seo') {
    return <FileText size={18} className="text-sage-dark" />;
  }
  return <Layers3 size={18} className="text-coffee" />;
};

export function About() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const aboutInView = useInView(aboutRef, { once: true, margin: '-60px' });
  const techInView = useInView(techRef, { once: true, margin: '-60px' });
  const historyInView = useInView(historyRef, { once: true, margin: '-60px' });

  return (
    <section id="about" className="bg-cream px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-16">
        <div ref={aboutRef} className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="space-y-4"
          >
            <p className="text-muted-foreground text-sm tracking-[0.18em] uppercase">
              About Me
            </p>
            <div className="space-y-4">
              <h2 className="text-coffee font-serif text-4xl md:text-5xl">
                프로젝트 경험으로 강점을 설명하는 프론트엔드 개발자
              </h2>
              <p className="text-muted-foreground max-w-2xl text-base leading-7 md:text-lg">
                추상적인 성격 설명보다 실제 구현 경험을 기준으로 강점을 정리했습니다.
                실시간 상태 반영, 문제 원인 정리, 접근성 개선, 협업 기준 정렬처럼
                프로젝트에서 직접 다뤄 본 문제를 중심으로 소개합니다.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.45, delay: 0.08, ease: 'easeOut' }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {strengths.map((strength, index) => (
              <motion.article
                key={strength.id}
                initial={{ opacity: 0, y: 18 }}
                animate={aboutInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.35,
                  delay: 0.12 + index * 0.06,
                  ease: 'easeOut',
                }}
                className="card-warm border border-sage/15 bg-white/80 p-5"
              >
                <div className="mb-4 flex items-center justify-between gap-3">
                  <div className="rounded-full bg-sage/10 p-2">
                    {strengthIconOf(strength.id)}
                  </div>
                  <span className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                    {strength.project}
                  </span>
                </div>
                <h3 className="text-coffee text-lg font-semibold">
                  {strength.title}
                </h3>
                <p className="text-foreground mt-3 text-sm leading-6">
                  {strength.summary}
                </p>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  {strength.detail}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>

        <div ref={techRef} className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={techInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-3"
          >
            <p className="text-muted-foreground text-sm tracking-[0.18em] uppercase">
              Tech Stack
            </p>
            <div className="space-y-3">
              <h3 className="text-coffee font-serif text-3xl md:text-4xl">
                기술을 어디에 어떻게 썼는지 보이도록 정리한 스택
              </h3>
              <p className="text-muted-foreground max-w-3xl text-base leading-7">
                기술 이름만 나열하지 않고, 어떤 문제를 해결할 때 사용했는지와
                관련 프로젝트를 함께 정리했습니다.
              </p>
            </div>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-2">
            {techStack.map((tech, index) => (
              <motion.article
                key={tech.name}
                initial={{ opacity: 0, y: 18 }}
                animate={techInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.35,
                  delay: index * 0.05,
                  ease: 'easeOut',
                }}
                className="card-warm border border-sage/15 bg-white/85 p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 rounded-full bg-sage/10 p-2">
                    <span className="flex h-5 w-5 items-center justify-center text-base">
                      {getIcon(tech.name)}
                    </span>
                  </div>
                  <div className="min-w-0 space-y-3">
                    <div>
                      <h4 className="text-coffee text-lg font-semibold">
                        {tech.name}
                      </h4>
                      <p className="text-muted-foreground mt-2 text-sm leading-6">
                        {tech.summary}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
                        관련 프로젝트
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tech.projects.map((project) => (
                          <span
                            key={`${tech.name}-${project}`}
                            className="bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium"
                          >
                            {project}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        <div ref={historyRef} className="grid gap-8 lg:grid-cols-[0.28fr_0.72fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={historyInView ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="space-y-3"
          >
            <p className="text-muted-foreground text-sm tracking-[0.18em] uppercase">
              History
            </p>
            <h3 className="text-coffee font-serif text-3xl">배경과 학습 흐름</h3>
          </motion.div>

          <div className="relative space-y-6">
            <div className="bg-sage/20 absolute top-3 bottom-3 left-[17px] w-px" />

            {history.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 20 }}
                animate={historyInView ? { opacity: 1, x: 0 } : undefined}
                transition={{
                  duration: 0.4,
                  delay: index * 0.08,
                  ease: 'easeOut',
                }}
                className="relative pl-11"
              >
                <div
                  className={`border-cream absolute top-1 left-0 z-10 h-9 w-9 rounded-full border-4 ${
                    item.color === 'sage'
                      ? 'bg-sage'
                      : item.color === 'coffee'
                        ? 'bg-coffee'
                        : 'bg-sand'
                  }`}
                />

                <div className="card-warm border border-sage/15 bg-white/85 p-5">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-1">
                      <h4 className="text-coffee text-lg font-semibold">
                        {item.title}
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        {item.subtitle}
                      </p>
                    </div>
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        item.color === 'sage'
                          ? 'bg-sage/10 text-sage-dark'
                          : item.color === 'coffee'
                            ? 'bg-coffee/10 text-coffee'
                            : 'bg-secondary text-secondary-foreground'
                      }`}
                    >
                      {item.period}
                    </span>
                  </div>

                  {item.description && (
                    <ul className="mt-4 space-y-2">
                      {item.description.map((description, descriptionIndex) => (
                        <li
                          key={`${item.id}-${descriptionIndex}`}
                          className="text-muted-foreground flex gap-2 text-sm leading-6"
                        >
                          <span className="bg-sage/60 mt-2 h-1.5 w-1.5 flex-none rounded-full" />
                          <span>{description}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.descriptionText && (
                    <p className="text-muted-foreground mt-4 text-sm leading-6">
                      {item.descriptionText}
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
