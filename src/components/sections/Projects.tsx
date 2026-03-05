'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import type { Project } from '@/src/data/projects';
import { projects } from '@/src/data/projects';
import { ProjectDetailModal } from '@/src/components/sections/ProjectDetailModal';

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  // 카드용 썸네일(첫 번째 유효 src)
  const thumbOf = (p: Project) =>
    p.images?.find(
      (s) => typeof s?.src === 'string' && s.src.trim().length > 0
    ) ?? null;

  return (
    <section id="projects" className="bg-background px-6 py-24 lg:px-20">
      <div className="mx-auto max-w-6xl space-y-12">
        <div className="space-y-4 text-center">
          <h2 className="text-coffee font-serif text-4xl md:text-5xl">
            Selected Projects
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            사용자의 불편함을 데이터와 기술로 해결한 경험을 기록합니다.
          </p>
        </div>

        {/* 카드 리스트 */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => {
            const thumb = thumbOf(p);

            const toneBorder =
              p.color === 'sage'
                ? 'border-sage/20 hover:shadow-[0_12px_40px_-20px_rgba(120,160,140,0.8)]'
                : p.color === 'orange'
                  ? 'border-orange-200/60 hover:shadow-[0_12px_40px_-20px_rgba(251,146,60,0.6)]'
                  : 'border-blue-200/60 hover:shadow-[0_12px_40px_-20px_rgba(96,165,250,0.6)]';

            const badgeTone =
              p.color === 'sage'
                ? 'bg-sage/20 text-sage-dark'
                : p.color === 'orange'
                  ? 'bg-orange-100 text-orange-700'
                  : 'bg-blue-100 text-blue-700';

            return (
              <button
                key={p.id}
                type="button"
                onClick={() => setActive(p)}
                className={`card-warm group w-full text-left transition-all duration-300 hover:-translate-y-0.5 ${toneBorder}`}
              >
                {/* 썸네일 */}
                <div className="relative overflow-hidden rounded-3xl">
                  <div className="bg-muted/20 relative aspect-[16/10] w-full">
                    {thumb ? (
                      <Image
                        src={thumb.src}
                        alt={thumb.alt}
                        fill
                        className="object-cover"
                        sizes="(min-width: 768px) 50vw, 100vw"
                        priority={p.id === 'plantiful'}
                      />
                    ) : null}
                  </div>
                </div>

                {/* 본문(요약만) */}
                <div className="space-y-3 p-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${badgeTone}`}
                    >
                      {p.type}
                    </span>
                    <span className="text-muted-foreground text-sm">
                      {p.period}
                    </span>
                  </div>

                  <h3 className="text-coffee font-serif text-2xl font-bold underline-offset-4 group-hover:underline">
                    {p.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {p.summary}
                  </p>

                  {/* 카드에선 tech 일부만 */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {p.techStack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-xs font-medium"
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

                  <div className="pt-1 text-sm font-medium">
                    <span className="text-coffee">자세히 보기 →</span>
                  </div>
                </div>
              </button>
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
