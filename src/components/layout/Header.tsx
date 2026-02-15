'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Mail, BookOpen, Menu, X } from 'lucide-react';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 border-border/40 border-b py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-coffee relative z-50 font-serif text-xl font-bold tracking-tight"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Chldnjsgud.<span className="text-sage">Dev</span>
          </Link>

          {/* 데스크탑 네비게이션 */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-accent text-sm font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* 데스크탑 소셜 아이콘 */}
          <div className="hidden items-center gap-4 md:flex">
            <SocialIcon
              href="https://github.com/asdfdk123"
              icon={<Github size={20} />}
              label="GitHub"
            />
            <SocialIcon
              href="https://velog.io/@dnjsgud"
              icon={<BookOpen size={20} />}
              label="Blog"
            />
            <SocialIcon
              href="mailto:chldnjsgud@gmail.com"
              icon={<Mail size={20} />}
              label="Email"
            />
          </div>

          {/* 모바일 햄버거 버튼 */}
          <button
            className="text-foreground relative z-50 p-2 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* 모바일 메뉴 오버레이 */}
      <div
        className={`bg-background/95 fixed inset-0 z-40 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex h-full flex-col items-center justify-center space-y-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-foreground hover:text-sage font-serif text-2xl font-medium transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className="mt-8 flex gap-6">
            <SocialIcon
              href="https://github.com/asdfdk123"
              icon={<Github size={24} />}
              label="GitHub"
            />
            <SocialIcon
              href="https://velog.io/@dnjsgud"
              icon={<BookOpen size={24} />}
              label="Blog"
            />
            <SocialIcon
              href="mailto:chldnjsgud@gmail.com"
              icon={<Mail size={24} />}
              label="Email"
            />
          </div>
        </div>
      </div>
    </>
  );
}

function SocialIcon({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-muted-foreground hover:text-foreground transition-transform hover:scale-110"
    >
      {icon}
    </a>
  );
}
