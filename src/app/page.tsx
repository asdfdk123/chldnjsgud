import { Header } from '@/src/components/layout/Header';
import { Footer } from '@/src/components/layout/Footer';
import { Hero } from '@/src/components/sections/Hero';
import { About } from '@/src/components/sections/About';
import { Projects } from '@/src/components/sections/Projects';

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
