import type { Metadata } from 'next';
import { DM_Sans, Fraunces } from 'next/font/google';
import './globals.css';

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
});

const siteUrl = 'https://chldnjsgud.vercel.app';
const siteTitle = '최원형 | 신입 프론트엔드 개발자 포트폴리오';
const siteDescription =
  '실시간 통신, 서버 상태 관리, 접근성·SEO 개선 경험을 가진 신입 프론트엔드 개발자 최원형의 포트폴리오';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: 'Chldnjsgud Portfolio',
    locale: 'ko_KR',
    type: 'website',
    // TODO: OG 이미지 제작 후 images 필드 추가
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    // TODO: OG 이미지 제작 후 images 필드 추가
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${dmSans.variable} ${fraunces.variable} bg-background text-foreground font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
