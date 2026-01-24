import { Header } from '@/components/layout/Header';
import { About } from '@/components/sections/About';

export default function Home() {
  return (
    <main className="bg-background text-foreground selection:bg-accent min-h-screen selection:text-white">
      <Header />

      <About />
    </main>
  );
}
