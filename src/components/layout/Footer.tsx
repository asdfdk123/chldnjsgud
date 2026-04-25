import { Github, Mail, BookOpen } from 'lucide-react';
import { socialLinks } from '@/src/data/profile';

export function Footer() {
  return (
    <footer className="bg-coffee text-cream border-t border-white/10 px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <p className="font-serif text-2xl font-bold">
            최원형.<span className="text-sage">dev</span>
          </p>
          <p className="text-sm text-white/60">
            © 2026 Choi Wonhyoung. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub 프로필 보기"
            className="hover:text-sage p-2"
          >
            <Github size={20} />
          </a>
          <a
            href={socialLinks.blog}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="기술 블로그 보기"
            className="hover:text-sage p-2"
          >
            <BookOpen size={20} />
          </a>
          <a
            href={socialLinks.email}
            aria-label="이메일 보내기"
            className="hover:text-sage p-2"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
