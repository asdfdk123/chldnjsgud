'use client';

import { useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type Slide = { src: string; alt: string };
type Tone = 'sage' | 'orange' | 'blue';

export function ProjectCarousel({
  slides,
  tone,
  priority = false,
}: {
  slides: Slide[];
  tone: Tone;
  priority?: boolean;
}) {
  const id = useId();
  const [index, setIndex] = useState(0);
  const startXRef = useRef<number | null>(null);

  const max = slides.length - 1;
  const canPrev = index > 0;
  const canNext = index < max;

  const dotActive =
    tone === 'sage'
      ? 'bg-sage'
      : tone === 'orange'
        ? 'bg-orange-400'
        : 'bg-blue-400';

  const go = (next: number) => {
    if (next < 0) return setIndex(0);
    if (next > max) return setIndex(max);
    setIndex(next);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    startXRef.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    const startX = startXRef.current;
    startXRef.current = null;
    if (startX == null) return;

    const delta = e.clientX - startX;
    const threshold = 50;
    if (Math.abs(delta) < threshold) return;

    if (delta > 0) go(index - 1);
    else go(index + 1);
  };

  const onPointerCancel = () => {
    startXRef.current = null;
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'ArrowRight') go(index + 1);
  };

  return (
    <div className="relative w-full">
      {/* ✅ overflow-hidden 필수: 트랙 이동 시 옆 슬라이드가 비치지 않게 */}
      <div
        tabIndex={0}
        role="region"
        aria-roledescription="carousel"
        aria-label="프로젝트 이미지 캐러셀"
        aria-describedby={`${id}-hint`}
        className="relative aspect-[16/10] w-full overflow-hidden outline-none"
        style={{ touchAction: 'pan-y' }}
        onKeyDown={onKeyDown}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerCancel}
      >
        <div
          className="flex h-full w-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s, i) => (
            <div
              key={`${s.src}-${i}`}
              className="relative h-full w-full flex-none select-none"
            >
              <Image
                src={s.src}
                alt={s.alt}
                fill
                className="object-contain"
                priority={priority && i === 0}
                sizes="(min-width: 1024px) 60vw, 100vw"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={!canPrev}
              aria-label="이전 이미지"
              className="bg-background/80 border-border/40 absolute top-1/2 left-4 -translate-y-1/2 rounded-full border p-2 shadow-sm backdrop-blur disabled:opacity-40"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={!canNext}
              aria-label="다음 이미지"
              className="bg-background/80 border-border/40 absolute top-1/2 right-4 -translate-y-1/2 rounded-full border p-2 shadow-sm backdrop-blur disabled:opacity-40"
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <p id={`${id}-hint`} className="sr-only">
          좌우 화살표 키 또는 스와이프로 이미지를 넘길 수 있습니다.
        </p>
      </div>

      {slides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 pb-3">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}번째 이미지로 이동`}
              onClick={() => go(i)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                i === index
                  ? dotActive
                  : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
