'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '@/src/data/projects';
import { projects } from '@/src/data/projects';
import { ProjectDetailModal } from '@/src/components/sections/ProjectDetailModal';

const toneOf = (color: Project['color']) => {
  if (color === 'sage')
    return {
      badge: 'bg-sage/20 text-sage-dark',
      overlay: 'from-sage/50 via-sage/20 to-transparent',
      shadow: 'hover:shadow-[0_28px_64px_-16px_rgba(138,154,91,0.5)]',
      border: 'hover:border-sage/50',
      placeholder: 'from-sage/25 via-sage/10 to-cream',
      bar: 'bg-sage',
      arrowHover: 'group-hover:bg-sage group-hover:text-white',
    } as const;
  if (color === 'orange')
    return {
      badge: 'bg-orange-100 text-orange-700',
      overlay: 'from-orange-500/40 via-orange-300/15 to-transparent',
      shadow: 'hover:shadow-[0_28px_64px_-16px_rgba(251,146,60,0.5)]',
      border: 'hover:border-orange-300/60',
      placeholder: 'from-orange-100/60 via-orange-50/30 to-cream',
      bar: 'bg-orange-400',
      arrowHover: 'group-hover:bg-orange-400 group-hover:text-white',
    } as const;
  return {
    badge: 'bg-blue-100 text-blue-700',
    overlay: 'from-blue-500/40 via-blue-300/15 to-transparent',
    shadow: 'hover:shadow-[0_28px_64px_-16px_rgba(96,165,250,0.5)]',
    border: 'hover:border-blue-300/60',
    placeholder: 'from-blue-100/60 via-blue-50/30 to-cream',
    bar: 'bg-blue-400',
    arrowHover: 'group-hover:bg-blue-400 group-hover:text-white',
  } as const;
};

const thumbOf = (p: Project) =>
  p.images?.find(
    (s) => typeof s?.src === 'string' && s.src.trim().length > 0
  ) ?? null;

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const published = projects.filter((p) => p.published !== false);

  return (
    <section id="projects" className="bg-background px-6 py-24 lg:px-20">
      <div ref={ref} className="mx-auto max-w-6xl space-y-14">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="space-y-4 text-center"
        >
          <h2 className="text-coffee font-serif text-4xl md:text-5xl">
            Selected Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            사용자의 불편함을 데이터와 기술로 해결한 경험을 기록합니다.
          </p>
        </motion.div>

        {/* 카드 그리드 */}
        <div className="grid gap-6 md:grid-cols-2">
          {published.map((p, i) => {
            const t = toneOf(p.color);
            const thumb = thumbOf(p);

            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 44 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
              >
                <button
                  type="button"
                  onClick={() => setActive(p)}
                  className={`card-warm group w-full overflow-hidden text-left transition-all duration-500 hover:-translate-y-1.5 ${t.border} ${t.shadow}`}
                >
                  {/* 썸네일 */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden">
                    {thumb ? (
                      <>
                        <Image
                          src={thumb.src}
                          alt={thumb.alt}
                          fill
                          className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(min-width: 768px) 50vw, 100vw"
                          priority={p.id === 'plantiful'}
                        />
                        {/* 컬러 오버레이 */}
                        <div
                          className={`absolute inset-0 bg-gradient-to-t ${t.overlay} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                        />
                      </>
                    ) : (
                      /* 이미지 없는 프로젝트 → 장식용 그라디언트 */
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${t.placeholder} flex items-end justify-end p-6`}
                      >
                        <span className="text-coffee/8 font-serif text-6xl leading-none font-bold select-none">
                          {p.title}
                        </span>
                      </div>
                    )}

                    {/* 뱃지 (썸네일 위 플로팅) */}
                    <div className="absolute top-4 left-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase backdrop-blur-sm ${t.badge}`}
                      >
                        {p.type}
                      </span>
                    </div>
                  </div>

                  {/* 본문 */}
                  <div className="space-y-3 p-5 pb-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <h3 className="text-coffee font-serif text-2xl leading-tight font-bold">
                          {p.title}
                        </h3>
                        <span className="text-muted-foreground text-sm">
                          {p.period}
                        </span>
                      </div>
                      {/* 화살표 버튼 */}
                      <div
                        className={`mt-0.5 flex-none rounded-full border p-2 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-hover:border-transparent ${t.arrowHover}`}
                      >
                        <ArrowUpRight size={16} />
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {p.summary}
                    </p>

                    {/* 기술 태그 */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {p.techStack.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="bg-secondary text-secondary-foreground hover:bg-muted rounded-md px-2.5 py-1 text-xs font-medium transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                      {p.techStack.length > 5 && (
                        <span className="text-muted-foreground px-2 py-1 text-xs">
                          +{p.techStack.length - 5}
                        </span>
                      )}
                    </div>

                    {/* 호버 시 확장되는 컬러 바 */}
                    <div
                      className={`h-0.5 w-0 rounded-full opacity-50 transition-all duration-700 ease-out group-hover:w-full ${t.bar}`}
                    />
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>

      <ProjectDetailModal
        open={!!active}
        project={active}
        onClose={() => setActive(null)}
      />
    </section>
  );
}
