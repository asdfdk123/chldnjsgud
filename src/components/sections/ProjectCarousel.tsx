'use client';

import { useEffect, useId, useRef, useState } from 'react';
import type { KeyboardEvent, PointerEvent } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, LayoutTemplate } from 'lucide-react';

type Slide = { src: string; alt: string; type?: 'image' | 'video' };
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

  const validSlides = slides.filter(
    (s) => typeof s?.src === 'string' && s.src.trim().length > 0
  );

  const max = validSlides.length - 1;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (index > max) setIndex(Math.max(max, 0));
  }, [max, index]);

  const canPrev = index > 0;
  const canNext = index < max;

  const dotActive =
    tone === 'sage'
      ? 'bg-sage'
      : tone === 'orange'
        ? 'bg-orange-400'
        : 'bg-blue-400';

  const go = (next: number) => {
    if (max < 0) return; // 슬라이드 없을 때
    if (next < 0) return setIndex(0);
    if (next > max) return setIndex(max);
    setIndex(next);
  };

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture?.(e.pointerId);
    startXRef.current = e.clientX;
  };

  const onPointerUp = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);

    const startX = startXRef.current;
    startXRef.current = null;
    if (startX == null) return;

    const delta = e.clientX - startX;
    const threshold = 50;
    if (Math.abs(delta) < threshold) return;

    if (delta > 0) go(index - 1);
    else go(index + 1);
  };

  const onPointerCancel = (e: PointerEvent<HTMLDivElement>) => {
    e.currentTarget.releasePointerCapture?.(e.pointerId);
    startXRef.current = null;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') go(index - 1);
    if (e.key === 'ArrowRight') go(index + 1);
  };

  if (validSlides.length === 0) {
    return (
      <div className="relative w-full">
        <div className="bg-muted/20 flex aspect-[16/10] w-full items-center justify-center rounded-3xl border">
          <div className="space-y-2 text-center">
            <LayoutTemplate
              size={56}
              className="text-muted-foreground/40 mx-auto"
            />
            <p className="text-muted-foreground text-sm">이미지 없음</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
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
          {validSlides.map((s, i) => (
            <div
              key={`${s.src}-${i}`}
              className="bg-muted/30 relative h-full w-full flex-none select-none"
            >
              {s.type === 'video' ? (
                <video
                  src={s.src}
                  title={s.alt}
                  controls
                  playsInline
                  className="h-full w-full bg-black object-contain"
                  onPointerDown={(e) => e.stopPropagation()}
                />
              ) : (
                <Image
                  src={s.src}
                  alt={s.alt}
                  fill
                  className="object-contain"
                  priority={priority && i === 0}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  draggable={false}
                />
              )}
            </div>
          ))}
        </div>

        {validSlides.length > 1 && (
          <>
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={!canPrev}
              aria-label="이전 이미지"
              className="bg-background/80 border-border/40 absolute top-1/2 left-4 -translate-y-1/2 rounded-full border p-2 shadow-sm backdrop-blur disabled:opacity-40"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ChevronLeft size={20} />
            </button>

            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={!canNext}
              aria-label="다음 이미지"
              className="bg-background/80 border-border/40 absolute top-1/2 right-4 -translate-y-1/2 rounded-full border p-2 shadow-sm backdrop-blur disabled:opacity-40"
              onPointerDown={(e) => e.stopPropagation()}
            >
              <ChevronRight size={20} />
            </button>
          </>
        )}

        <p id={`${id}-hint`} className="sr-only">
          좌우 화살표 키 또는 스와이프로 이미지를 넘길 수 있습니다.
        </p>
      </div>

      {validSlides.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 pb-3">
          {validSlides.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`${i + 1}번째 이미지로 이동`}
              aria-current={i === index ? 'true' : undefined}
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
