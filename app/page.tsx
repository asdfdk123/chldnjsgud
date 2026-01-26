import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Projects } from '@/components/sections/Projects';

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-accent min-h-screen selection:text-white">
      <Header />

      <Hero />

      <About />

      <Projects />

      <Footer />

    </main>
  );
}
