'use client';

import { useEffect, useRef } from 'react';
import type { Project } from '@/src/data/projects';
import { ProjectCarousel } from '@/src/components/sections/ProjectCarousel';
import { ExternalLink, Github, X, Zap, LayoutTemplate } from 'lucide-react';

export function ProjectDetailModal({
  open,
  project,
  onClose,
}: {
  open: boolean;
  project: Project | null;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    requestAnimationFrame(() => closeBtnRef.current?.focus());

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  if (!open || !project) return null;

  const badgeTone =
    project.color === 'sage'
      ? 'bg-sage/20 text-sage-dark'
      : project.color === 'orange'
        ? 'bg-orange-100 text-orange-700'
        : 'bg-blue-100 text-blue-700';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="bg-background relative mx-4 w-full max-w-5xl overflow-hidden rounded-3xl border shadow-xl">
        <div className="flex items-start justify-between gap-4 border-b p-6">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold tracking-wider uppercase ${badgeTone}`}
              >
                {project.type}
              </span>
              <span className="text-muted-foreground text-sm">
                {project.period}
              </span>
            </div>

            <h3
              id="project-modal-title"
              className="text-coffee truncate font-serif text-3xl font-bold"
            >
              {project.title}
            </h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              {project.summary}
            </p>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label="닫기"
            className="bg-background/80 border-border/40 rounded-full border p-2 shadow-sm backdrop-blur"
          >
            <X size={18} />
          </button>
        </div>

        <div className="max-h-[80vh] overflow-y-auto p-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              {project.images?.length ? (
                <div className="overflow-hidden rounded-3xl border">
                  {/* key로 프로젝트 변경 시 캐러셀 인덱스 리셋 */}
                  <ProjectCarousel
                    key={project.id}
                    slides={project.images}
                    tone={project.color}
                    priority={false}
                  />
                </div>
              ) : (
                <div className="flex aspect-[16/10] items-center justify-center rounded-3xl border">
                  <div className="space-y-2 text-center">
                    <LayoutTemplate
                      size={56}
                      className="text-muted-foreground/40 mx-auto"
                    />
                    <p className="text-muted-foreground text-sm">이미지 없음</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-6 lg:col-span-5">
              <div>
                <p className="text-foreground font-medium">{project.summary}</p>
                <p className="text-muted-foreground mt-3 leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-coffee mb-2 font-bold">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-cream rounded-2xl border p-5 shadow-sm">
                <h4 className="text-coffee mb-3 flex items-center gap-2 border-b pb-2 font-bold">
                  <Zap size={18} /> {project.troubleShooting.title}
                </h4>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="text-coffee mb-1 block font-bold">
                      [문제]
                    </span>
                    <p className="text-muted-foreground leading-snug">
                      {project.troubleShooting.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-coffee mb-1 block font-bold">
                      [해결]
                    </span>
                    <p className="text-muted-foreground leading-snug">
                      {project.troubleShooting.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="btn-outline flex items-center gap-2 px-5 py-2 text-sm"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.links.demo && (
                  <a
                    href={project.links.demo}
                    className="btn-outline flex items-center gap-2 px-5 py-2 text-sm"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t p-4 text-right">
          <button
            type="button"
            onClick={onClose}
            className="btn-primary px-6 py-2 text-sm"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}
