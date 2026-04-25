'use client';

import { useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  ChevronDown,
  ExternalLink,
  Github,
  Lightbulb,
  UserRound,
  Wrench,
} from 'lucide-react';
import type { Project } from '@/src/data/projects';
import { projects } from '@/src/data/projects';

const toneOf = (color: Project['color']) => {
  if (color === 'sage') {
    return {
      badge: 'bg-sage/20 text-sage-dark',
      accent: 'bg-sage/70',
      border: 'border-sage/20 hover:border-sage/40',
      panel: 'bg-sage/8',
      button: 'border-sage/30 hover:bg-sage/10',
      image: 'from-sage/20 via-sage/10 to-cream',
      link: 'text-sage-dark hover:text-sage',
    } as const;
  }
  if (color === 'orange') {
    return {
      badge: 'bg-orange-100 text-orange-700',
      accent: 'bg-orange-400/80',
      border: 'border-orange-200/60 hover:border-orange-300/80',
      panel: 'bg-orange-50/70',
      button: 'border-orange-200 hover:bg-orange-50',
      image: 'from-orange-100/70 via-orange-50/50 to-cream',
      link: 'text-orange-700 hover:text-orange-500',
    } as const;
  }
  return {
    badge: 'bg-blue-100 text-blue-700',
    accent: 'bg-blue-400/80',
    border: 'border-blue-200/60 hover:border-blue-300/80',
    panel: 'bg-blue-50/70',
    button: 'border-blue-200 hover:bg-blue-50',
    image: 'from-blue-100/70 via-blue-50/50 to-cream',
    link: 'text-blue-700 hover:text-blue-500',
  } as const;
};

const thumbOf = (project: Project) =>
  project.images?.find(
    (media) => media.type !== 'video' && media.src.trim().length > 0
  ) ?? null;

const detailSections = (project: Project) => {
  const sections = [
    {
      key: 'role',
      title: '담당 역할',
      items: project.star?.role ?? [],
    },
    {
      key: 'challenge',
      title: '기술적 도전',
      items: project.star?.challenge ?? [],
    },
    {
      key: 'solution',
      title: '해결 과정',
      items: project.star?.solution ?? [],
    },
    {
      key: 'trouble',
      title: '트러블슈팅',
      items: [
        `문제: ${project.troubleShooting.problem}`,
        `해결: ${project.troubleShooting.solution}`,
        ...(project.troubleShooting.impact
          ? [`결과: ${project.troubleShooting.impact}`]
          : []),
      ],
    },
    {
      key: 'learning',
      title: '결과 및 배운 점',
      items: project.star?.learning ?? project.outcomes ?? [],
    },
  ];

  return sections.filter((section) => section.items.length > 0);
};

export function Projects() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const publishedProjects = useMemo(
    () => projects.filter((project) => project.published !== false),
    []
  );

  return (
    <section id="projects" className="bg-background px-6 py-24 lg:px-20">
      <div ref={ref} className="mx-auto max-w-6xl space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="space-y-3"
        >
          <p className="text-muted-foreground text-sm tracking-[0.18em] uppercase">
            Selected Projects
          </p>
          <div className="space-y-3">
            <h2 className="text-coffee font-serif text-4xl md:text-5xl">
              문제를 맡고, 해결 과정을 설명할 수 있는 프로젝트
            </h2>
            <p className="text-muted-foreground max-w-3xl text-base leading-7 md:text-lg">
              프로젝트 카드에서 맡은 역할, 해결한 문제, 기술 판단이 먼저 보이도록
              정보를 다시 정리했습니다. 상세 내용은 카드 안에서 바로 펼쳐 확인할 수
              있습니다.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {publishedProjects.map((project, index) => {
            const tone = toneOf(project.color);
            const thumb = thumbOf(project);
            const isExpanded = expandedId === project.id;
            const roles = project.star?.role.slice(0, 3) ?? [];
            const techs = project.techStack.slice(0, 5);
            const keyIssue =
              project.troubleShooting.problem || project.star?.challenge?.[0];
            const sections = detailSections(project);
            const detailsId = `${project.id}-details`;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                animate={isInView ? { opacity: 1, y: 0 } : undefined}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                className={`card-warm overflow-hidden border transition-colors ${tone.border}`}
              >
                <div className="flex flex-col gap-5 p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 space-y-3">
                      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-wide uppercase">
                        <span className={`rounded-full px-3 py-1 ${tone.badge}`}>
                          {project.type}
                        </span>
                        <span className="text-muted-foreground">
                          {project.period}
                        </span>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-coffee font-serif text-2xl leading-tight font-bold sm:text-3xl">
                          {project.title}
                        </h3>
                        <p className="text-foreground text-sm leading-6 sm:text-base">
                          {project.summary}
                        </p>
                        <p className="text-muted-foreground text-sm leading-6">
                          {project.myRole}
                        </p>
                      </div>
                    </div>

                    <div className="hidden w-28 flex-none md:block">
                      <div
                        className={`relative aspect-[4/5] overflow-hidden rounded-2xl border bg-gradient-to-br ${tone.image}`}
                      >
                        {thumb ? (
                          <Image
                            src={thumb.src}
                            alt={thumb.alt}
                            fill
                            className="object-cover"
                            sizes="160px"
                            priority={project.id === 'plantiful'}
                          />
                        ) : (
                          <div className="flex h-full items-end justify-end p-3">
                            <span className="text-coffee/15 font-serif text-3xl font-bold">
                              {project.title}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4">
                    {roles.length > 0 && (
                      <section
                        className={`rounded-2xl border p-4 ${tone.panel}`}
                        aria-label={`${project.title} 내 역할`}
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <UserRound size={15} className="text-muted-foreground" />
                          <h4 className="text-coffee text-sm font-semibold">
                            내 역할
                          </h4>
                        </div>
                        <ul className="space-y-2">
                          {roles.map((role, roleIndex) => (
                            <li
                              key={`${project.id}-role-${roleIndex}`}
                              className="text-muted-foreground flex gap-2 text-sm leading-6"
                            >
                              <span
                                className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${tone.accent}`}
                              />
                              <span>{role}</span>
                            </li>
                          ))}
                        </ul>
                      </section>
                    )}

                    {keyIssue && (
                      <section
                        className="rounded-2xl border border-border/60 bg-background p-4"
                        aria-label={`${project.title} 핵심 문제 해결`}
                      >
                        <div className="mb-3 flex items-center gap-2">
                          <Lightbulb size={15} className="text-muted-foreground" />
                          <h4 className="text-coffee text-sm font-semibold">
                            핵심 문제 해결
                          </h4>
                        </div>
                        <p className="text-muted-foreground text-sm leading-6">
                          {keyIssue}
                        </p>
                        <p className="text-foreground mt-2 text-sm leading-6">
                          {project.troubleShooting.solution}
                        </p>
                      </section>
                    )}

                    <section aria-label={`${project.title} 주요 기술 스택`}>
                      <h4 className="text-coffee mb-3 text-sm font-semibold">
                        주요 기술 스택
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {techs.map((tech) => (
                          <span
                            key={tech}
                            className="bg-secondary text-secondary-foreground rounded-md px-3 py-1 text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > techs.length && (
                          <span className="text-muted-foreground px-2 py-1 text-xs">
                            +{project.techStack.length - techs.length}
                          </span>
                        )}
                      </div>
                    </section>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border/70 pt-4">
                    <div className="flex flex-wrap items-center gap-3">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} GitHub 저장소 보기`}
                          className={`inline-flex items-center gap-2 text-sm font-medium ${tone.link}`}
                        >
                          <Github size={15} />
                          GitHub
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={`${project.title} 데모 보기`}
                          className={`inline-flex items-center gap-2 text-sm font-medium ${tone.link}`}
                        >
                          <ExternalLink size={15} />
                          Demo
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      aria-expanded={isExpanded}
                      aria-controls={detailsId}
                      aria-label={`${project.title} 상세 정보 ${isExpanded ? '접기' : '펼치기'}`}
                      onClick={() =>
                        setExpandedId((current) =>
                          current === project.id ? null : project.id
                        )
                      }
                      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${tone.button}`}
                    >
                      상세 보기
                      <ChevronDown
                        size={16}
                        className={`transition-transform ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {thumb && (
                    <div className="md:hidden">
                      <div
                        className={`relative aspect-[16/9] overflow-hidden rounded-2xl border bg-gradient-to-br ${tone.image}`}
                      >
                        <Image
                          src={thumb.src}
                          alt={thumb.alt}
                          fill
                          className="object-cover"
                          sizes="100vw"
                        />
                      </div>
                    </div>
                  )}

                  {isExpanded && (
                    <div
                      id={detailsId}
                      className="space-y-4 border-t border-border/70 pt-5"
                    >
                      {sections.map((section) => (
                        <section
                          key={`${project.id}-${section.key}`}
                          className="rounded-2xl border border-border/60 bg-background p-4"
                        >
                          <div className="mb-3 flex items-center gap-2">
                            <Wrench size={15} className="text-muted-foreground" />
                            <h4 className="text-coffee text-sm font-semibold">
                              {section.title}
                            </h4>
                          </div>
                          <ul className="space-y-2">
                            {section.items.map((item, itemIndex) => (
                              <li
                                key={`${project.id}-${section.key}-${itemIndex}`}
                                className="text-muted-foreground flex gap-2 text-sm leading-6"
                              >
                                <span
                                  className={`mt-2 h-1.5 w-1.5 flex-none rounded-full ${tone.accent}`}
                                />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </section>
                      ))}
                    </div>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
