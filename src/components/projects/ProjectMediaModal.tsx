'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Play, X } from 'lucide-react';
import type { ProjectMedia } from '@/src/data/projects';

interface ProjectMediaModalProps {
  projectTitle: string;
  media: ProjectMedia[];
  onClose: () => void;
}

export function ProjectMediaModal({
  projectTitle,
  media,
  onClose,
}: ProjectMediaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const currentMedia = media[currentIndex];

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    const previousActiveElement = document.activeElement as HTMLElement | null;

    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
        return;
      }

      if (media.length <= 1) {
        return;
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentIndex(
          (current) => (current - 1 + media.length) % media.length
        );
      }

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentIndex((current) => (current + 1) % media.length);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
      previousActiveElement?.focus();
    };
  }, [media.length, onClose]);

  if (!currentMedia) {
    return null;
  }

  const showPrevious = () => {
    setCurrentIndex((current) => (current - 1 + media.length) % media.length);
  };

  const showNext = () => {
    setCurrentIndex((current) => (current + 1) % media.length);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/75 p-2 backdrop-blur-sm sm:p-4"
      role="presentation"
      onMouseDown={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-media-title"
        aria-describedby="project-media-description"
        className="bg-background flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className="border-border flex items-center justify-between gap-4 border-b px-4 py-4 sm:px-6">
          <div className="min-w-0">
            <p className="text-muted-foreground text-xs font-semibold tracking-[0.16em] uppercase">
              Project Media
            </p>
            <h2
              id="project-media-title"
              className="text-coffee truncate font-serif text-xl font-bold sm:text-2xl"
            >
              {projectTitle}
            </h2>
          </div>

          <div className="flex flex-none items-center gap-3">
            <span className="text-muted-foreground text-sm">
              {currentIndex + 1} / {media.length}
            </span>
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="프로젝트 미디어 닫기"
              className="border-border hover:bg-secondary inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </header>

        <div className="relative flex h-[52vh] w-full items-center justify-center bg-black md:h-[60vh]">
          {currentMedia.type === 'video' ? (
            <video
              key={currentMedia.src}
              controls
              playsInline
              preload="metadata"
              className="h-full w-full bg-black object-contain"
            >
              <source src={currentMedia.src} type="video/mp4" />
              브라우저에서 영상을 재생할 수 없습니다.
            </video>
          ) : (
            <div className="relative h-full w-full">
              <Image
                src={currentMedia.src}
                alt={currentMedia.alt}
                fill
                sizes="(max-width: 768px) 100vw, 1024px"
                className="object-contain"
              />
            </div>
          )}

          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={showPrevious}
                aria-label="이전 미디어 보기"
                className="absolute top-1/2 left-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={showNext}
                aria-label="다음 미디어 보기"
                className="absolute top-1/2 right-3 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80"
              >
                <ChevronRight size={24} />
              </button>
            </>
          )}
        </div>

        <p
          id="project-media-description"
          className="text-foreground border-border border-t px-4 py-3 text-center text-sm sm:px-6"
        >
          {currentMedia.alt}
        </p>

        {media.length > 1 && (
          <div
            className="border-border flex gap-3 overflow-x-auto border-t p-4"
            aria-label="프로젝트 미디어 목록"
          >
            {media.map((item, index) => {
              const isSelected = index === currentIndex;

              return (
                <button
                  key={`${item.src}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`${item.alt} 보기`}
                  aria-pressed={isSelected}
                  className={`relative h-16 w-24 flex-none overflow-hidden rounded-lg border-2 transition ${
                    isSelected
                      ? 'border-sage ring-sage/30 ring-2'
                      : 'border-border opacity-65 hover:opacity-100'
                  }`}
                >
                  {item.type === 'video' ? (
                    <span className="flex h-full w-full flex-col items-center justify-center gap-1 bg-black text-xs text-white">
                      <Play size={18} fill="currentColor" />
                      영상
                    </span>
                  ) : (
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </section>
    </div>
  );
}
