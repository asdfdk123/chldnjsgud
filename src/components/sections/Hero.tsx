import Link from 'next/link';
import { ArrowRight, MousePointerClick } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden px-6 pt-20 lg:px-20">
      <div className="animate-float bg-sage/10 absolute top-20 -right-20 h-96 w-96 rounded-full blur-3xl" />
      <div
        className="animate-float bg-coffee/5 absolute bottom-20 left-10 h-72 w-72 rounded-full blur-3xl"
        style={{ animationDelay: '1s' }}
      />

      <div className="mx-auto w-full max-w-6xl">
        <div className="relative z-10 max-w-5xl space-y-8">
          <div className="border-sage/30 bg-sage/10 text-sage-dark inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <span className="relative flex h-2 w-2">
              <span className="bg-sage absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
              <span className="bg-sage relative inline-flex h-2 w-2 rounded-full"></span>
            </span>
            Frontend Developer
          </div>

          <h1 className="text-coffee font-serif text-5xl leading-[1.1] font-bold md:text-7xl lg:text-8xl">
            나만 생각하는 <br />
            <span className="text-gradient">이타적인 개발자</span>
            <br /> 최원형
          </h1>

          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed md:text-xl">
            사용자의 <span className="text-foreground font-bold">0.5초</span>를
            지켜내는 집요함,
            <br /> 동료의{' '}
            <span className="text-foreground font-bold">1시간</span>을 아껴주는
            배려
          </p>

          <div className="flex flex-col gap-4 pt-4 sm:flex-row">
            <Link
              href="#projects"
              className="btn-primary flex items-center justify-center gap-2"
            >
              프로젝트 보기 <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      <div className="text-muted-foreground/50 absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <MousePointerClick size={24} />
      </div>
    </section>
  );
}
