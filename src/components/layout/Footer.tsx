import { Github, Mail, BookOpen } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-coffee text-cream border-t border-white/10 px-6 py-12 lg:px-20">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="space-y-2 text-center md:text-left">
          <h2 className="font-serif text-2xl font-bold">
            chldnjsgud.<span className="text-sage">Dev</span>
          </h2>
          <p className="text-sm text-white/60">
            © 2026 Choi Wonhyoung. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/asdfdk123"
            target="_blank"
            className="hover:text-sage p-2"
          >
            <Github size={20} />
          </a>
          <a
            href="https://velog.io/@dnjsgud"
            target="_blank"
            className="hover:text-sage p-2"
          >
            <BookOpen size={20} />
          </a>
          <a href="mailto:chldnjsgud@gmail.com" className="hover:text-sage p-2">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
