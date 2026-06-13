import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FreeSample } from './components/FreeSample';
import { Testimonials } from './components/Testimonials';
import { Pricing } from './components/Pricing';
import { About } from './components/About';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FreeSample />
        <Testimonials />
        <Pricing />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
