'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

// 단어별 reveal 애니메이션 variants
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
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span className="inline-block" variants={wordVariants}>
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [cursor, setCursor] = useState({ x: -999, y: -999 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      setCursor({ x: e.clientX - rect.left, y: e.clientY - rect.top });
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
      className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden px-6 pt-20 lg:px-20"
    >
      {/* 커서 glow */}
      <div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          opacity: isHovering ? 1 : 0,
          background: `radial-gradient(600px circle at ${cursor.x}px ${cursor.y}px, rgba(138,154,91,0.12), transparent 60%)`,
        }}
      />

      {/* 배경 블롭 */}
      <div className="animate-float bg-sage/10 absolute top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
      <div
        className="animate-float bg-coffee/5 absolute bottom-20 left-10 h-72 w-72 rounded-full blur-3xl"
        style={{ animationDelay: '1s' }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative z-10 max-w-5xl space-y-8">
          {/* 뱃지 */}
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

          {/* h1 — 줄별 단어 reveal */}
          <h1 className="text-coffee font-serif text-5xl leading-[1.25] font-bold md:text-6xl lg:text-7xl">
            <span className="block overflow-hidden">
              <RevealLine delay={0.15}>충돌을 통한 스파크로</RevealLine>
            </span>
            <span className="block overflow-hidden">
              <RevealLine delay={0.3} className="text-gradient">
                불씨를 살리는 개발자
              </RevealLine>
            </span>
            <span className="block overflow-hidden">
              <RevealLine delay={0.45}>최원형</RevealLine>
            </span>
          </h1>

          {/* 서브 텍스트 */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl"
          >
            사용자의 <span className="text-foreground font-bold">0.5초</span>를
            지켜내는 집요함,
            <br /> 동료의{' '}
            <span className="text-foreground font-bold">1시간</span>을 아껴주는
            배려
          </motion.p>

          {/* 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="flex flex-col gap-4 pt-4 sm:flex-row"
          >
            <Link
              href="#projects"
              className="btn-primary group flex items-center justify-center gap-2"
            >
              프로젝트 보기
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-muted-foreground/40 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown size={26} />
      </motion.div>
    </section>
  );
}
