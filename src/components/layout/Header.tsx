'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Mail, BookOpen, Menu, X } from 'lucide-react';
import { socialLinks } from '@/src/data/profile';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    navLinks.forEach(({ href }) => {
      const id = href.replace('#', '');
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold: 0.35 }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-background/80 border-border/40 border-b py-3 shadow-sm backdrop-blur-md'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6">
          <Link
            href="/"
            className="text-coffee relative z-50 font-serif text-xl font-bold tracking-tight transition-opacity hover:opacity-80"
            onClick={() => setMobileMenu(false)}
            aria-label="홈으로 이동"
          >
            Chldnjsgud.<span className="text-sage">Dev</span>
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="주요 메뉴">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className="relative text-sm font-medium transition-colors duration-200"
                >
                  <span
                    className={
                      isActive
                        ? 'text-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }
                  >
                    {link.name}
                  </span>
                  <span
                    className={`bg-sage absolute -bottom-1 left-0 right-0 h-0.5 origin-left rounded-full transition-all duration-300 ${
                      isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <SocialIcon href={socialLinks.github} label="GitHub">
              <Github size={19} />
            </SocialIcon>
            <SocialIcon href={socialLinks.blog} label="Blog">
              <BookOpen size={19} />
            </SocialIcon>
            <SocialIcon href={socialLinks.email} label="Email" external={false}>
              <Mail size={19} />
            </SocialIcon>
          </div>

          <button
            className="text-foreground relative z-50 p-2 md:hidden"
            onClick={() => setMobileMenu(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isMobileMenuOpen ? 'close' : 'open'}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.18 }}
                className="block"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="bg-background/95 fixed inset-0 z-40 backdrop-blur-sm md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center space-y-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.07 }}
                >
                  <Link
                    href={link.href}
                    className="text-foreground hover:text-sage font-serif text-2xl font-medium transition-colors"
                    onClick={() => setMobileMenu(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="mt-8 flex gap-6"
              >
                <SocialIcon href={socialLinks.github} label="GitHub">
                  <Github size={24} />
                </SocialIcon>
                <SocialIcon href={socialLinks.blog} label="Blog">
                  <BookOpen size={24} />
                </SocialIcon>
                <SocialIcon href={socialLinks.email} label="Email" external={false}>
                  <Mail size={24} />
                </SocialIcon>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function SocialIcon({
  href,
  label,
  children,
  external = true,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={label}
      className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110"
    >
      {children}
    </a>
  );
}
