'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Download, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { socialLinks } from '@/src/data/profile';

const lineVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const wordVariants = {
  hidden: { y: '110%', opacity: 0 },
  visible: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

function RevealLine({
  children,
  delay = 0,
  className = '',
}: {
  children: string;
  delay?: number;
  className?: string;
}) {
  const words = children.split(' ');

  return (
    <motion.span
      className={`inline-flex flex-wrap gap-x-[0.3em] overflow-hidden ${className}`}
      variants={lineVariants}
      initial="hidden"
      animate="visible"
      style={{ transitionDelay: `${delay}s` }}
    >
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="inline-block overflow-hidden">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

const heroKeywords = [
  '실시간 통신',
  '서버 상태 관리',
  '접근성·SEO',
  '협업 기준 정렬',
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: -999, y: -999 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (event: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setCursor({ x: event.clientX - rect.left, y: event.clientY - rect.top });
    };
    const onEnter = () => setIsHovering(true);
    const onLeave = () => setIsHovering(false);

    section.addEventListener('mousemove', onMove);
    section.addEventListener('mouseenter', onEnter);
    section.addEventListener('mouseleave', onLeave);

    return () => {
      section.removeEventListener('mousemove', onMove);
      section.removeEventListener('mouseenter', onEnter);
      section.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6 pt-20 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, rgba(138,154,91,0.12), transparent 60%)`,
        }}
      />

      <div className="animate-float bg-sage/10 absolute top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
      <div
        className="animate-float bg-coffee/5 absolute bottom-20 left-10 h-72 w-72 rounded-full blur-3xl"
        style={{ animationDelay: '1s' }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative z-10 max-w-5xl space-y-7">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.05 }}
          >
            <div className="border-sage/30 bg-sage/10 text-sage-dark inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="bg-sage absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" />
                <span className="bg-sage relative inline-flex h-2 w-2 rounded-full" />
              </span>
              Frontend Developer
            </div>
          </motion.div>

          <h1 className="text-coffee font-serif text-5xl leading-[1.18] font-bold md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              <RevealLine delay={0.15}>
                충돌을 정리하고 흐름을 설계하는
              </RevealLine>
            </span>
            <span className="block overflow-hidden">
              <RevealLine delay={0.3} className="text-gradient">
                프론트엔드 개발자
              </RevealLine>
            </span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.72 }}
            className="max-w-3xl space-y-4"
          >
            <p className="text-muted-foreground text-base leading-7 md:text-xl md:leading-8">
              실시간 채팅 메시지 유실 문제를 Queue + Flush 구조로 보완하고,
              접근성·SEO 개선 경험을 쌓은 신입 프론트엔드 개발자입니다.
            </p>
            <p className="text-muted-foreground text-sm leading-6 md:text-base">
              WebSocket 기반 UI 동기화, 서버 상태 관리, 요구사항 정리처럼 실제
              프로젝트에서 맡은 문제를 중심으로 작업해 왔습니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.84 }}
            className="flex flex-wrap gap-2"
            aria-label="핵심 역량 키워드"
          >
            {heroKeywords.map((keyword) => (
              <span
                key={keyword}
                className="border-sage/20 bg-background/80 text-coffee rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur-sm md:text-sm"
              >
                {keyword}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.96 }}
            className="flex flex-col gap-3 pt-2 sm:flex-row sm:flex-wrap"
          >
            <Link
              href="#projects"
              className="btn-primary group inline-flex items-center justify-center gap-2"
            >
              프로젝트 보기
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <a
              href={socialLinks.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="최원형 이력서 새 탭에서 보기"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              이력서 보기
              <FileText size={17} />
            </a>

            <a
              href={socialLinks.resume}
              download="최원형_프론트엔드_개발자_이력서.pdf"
              aria-label="최원형 이력서 PDF 다운로드"
              className="btn-outline inline-flex items-center justify-center gap-2"
            >
              이력서 다운로드
              <Download size={17} />
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.45, duration: 0.8 }}
        className="text-muted-foreground/40 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        aria-hidden="true"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
