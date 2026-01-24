import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-accent min-h-screen selection:text-white">
      <Header />

      <Hero />

      <About />

      <Footer />
    </main>
  );
}
