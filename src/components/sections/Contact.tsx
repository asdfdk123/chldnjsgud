'use client';

import { useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { BookOpen, Check, Copy, Github, Mail, Send } from 'lucide-react';

import { socialLinks } from '@/src/data/profile';

type FormState = {
  name: string;
  fromEmail: string;
  message: string;
};

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  const toEmail = useMemo(() => {
    const raw = socialLinks.email ?? '';
    return raw.startsWith('mailto:') ? raw.replace(/^mailto:/, '') : raw;
  }, []);

  const [form, setForm] = useState<FormState>({
    name: '',
    fromEmail: '',
    message: '',
  });
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onCopy = async () => {
    setError(null);
    try {
      await navigator.clipboard.writeText(toEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1200);
    } catch {
      setError('복사에 실패했습니다. 이메일을 직접 선택해서 복사해주세요.');
    }
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const name = form.name.trim();
    const fromEmail = form.fromEmail.trim();
    const message = form.message.trim();

    if (!toEmail) {
      setError('수신 이메일이 설정되어 있지 않습니다.');
      return;
    }
    if (!name || !fromEmail || !message) {
      setError('이름, 이메일, 메시지를 모두 입력해주세요.');
      return;
    }

    const subject = `[Portfolio] ${name}님의 연락`;
    const body = `이름: ${name}\n회신 이메일: ${fromEmail}\n\n메시지:\n${message}\n`;

    window.location.href = `mailto:${toEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="bg-cream px-6 py-24 lg:px-20">
      <div ref={sectionRef} className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-14 space-y-4 text-center"
        >
          <h2 className="text-coffee font-serif text-4xl md:text-5xl">
            Contact
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg leading-relaxed">
            어떤 연락이든 모두 환영합니다.
          </p>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-2">
          {/* 왼쪽: 빠른 연락 */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="space-y-6"
          >
            <div className="card-warm bg-white/60 p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-md">
              <h3 className="text-coffee mb-5 flex items-center gap-2 font-serif text-2xl font-bold">
                <Mail className="text-sage" size={22} />
                빠른 연락
              </h3>

              <div className="bg-secondary/60 flex items-center justify-between gap-3 rounded-2xl px-4 py-3">
                <div className="min-w-0">
                  <p className="text-muted-foreground text-xs">Email</p>
                  <p className="text-coffee truncate font-medium">{toEmail}</p>
                </div>
                <button
                  type="button"
                  className="btn-outline flex items-center gap-2 px-4 py-2 text-sm"
                  onClick={onCopy}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? '복사됨' : '복사'}
                </button>
              </div>

              {error && (
                <p className="text-destructive mt-3 text-sm" role="alert">
                  {error}
                </p>
              )}

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                <a
                  href={socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2 px-5 py-2 text-sm"
                >
                  <Github size={16} /> GitHub
                </a>
                <a
                  href={socialLinks.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline flex items-center justify-center gap-2 px-5 py-2 text-sm"
                >
                  <BookOpen size={16} /> Blog
                </a>
              </div>
            </div>
          </motion.div>

          {/* 오른쪽: 메시지 폼 */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.25 }}
            className="card-warm bg-white/60 p-8 backdrop-blur-sm transition-shadow duration-300 hover:shadow-md"
          >
            <h3 className="text-coffee mb-6 font-serif text-2xl font-bold">
              메시지 보내기
            </h3>

            <form className="space-y-5" onSubmit={onSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field
                  label="이름"
                  value={form.name}
                  placeholder="최원형"
                  onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                />
                <Field
                  label="회신 이메일"
                  value={form.fromEmail}
                  placeholder="cwh0607@naver.com"
                  inputMode="email"
                  onChange={(v) => setForm((p) => ({ ...p, fromEmail: v }))}
                />
              </div>

              <div>
                <label className="text-coffee mb-2 block text-sm font-medium">
                  메시지
                </label>
                <textarea
                  className="border-input bg-background/60 focus:border-sage focus:ring-sage/30 min-h-[180px] w-full resize-y rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-4"
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                />
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-muted-foreground text-xs">
                  제출 시 기본 메일 앱이 열리고 내용이 자동으로 채워집니다.
                </p>
                <button
                  type="submit"
                  className="btn-primary group flex items-center justify-center gap-2 px-4 text-sm"
                >
                  메일로 보내기
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>['inputMode'];
}) {
  return (
    <div>
      <label className="text-coffee mb-2 block text-sm font-medium">
        {label}
      </label>
      <input
        className="border-input bg-background/60 focus:border-sage focus:ring-sage/30 w-full rounded-2xl border px-4 py-3 text-sm outline-none focus:ring-4"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        inputMode={inputMode}
      />
    </div>
  );
}
