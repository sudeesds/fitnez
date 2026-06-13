import { useState, useEffect } from 'react';

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-100/90 backdrop-blur-md border-b border-cream-300/60'
          : 'bg-transparent'
      }`}
    >
      <div className="container-wide flex items-center justify-between px-6 md:px-12 lg:px-20 py-5">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
            <span className="text-cream-50 font-serif font-medium text-sm">A</span>
          </div>
          <span className="font-serif text-xl text-warm-900 tracking-tight">
            Atom & Echo
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#sample" className="text-body-sm text-warm-600 hover:text-warm-900 transition-colors">
            Free Sample
          </a>
          <a href="#testimonials" className="text-body-sm text-warm-600 hover:text-warm-900 transition-colors">
            Clients
          </a>
          <a href="#pricing" className="text-body-sm text-warm-600 hover:text-warm-900 transition-colors">
            Pricing
          </a>
          <a href="#about" className="text-body-sm text-warm-600 hover:text-warm-900 transition-colors">
            About
          </a>
        </nav>

        <a
          href="#cta"
          className="hidden md:inline-flex items-center gap-2 bg-warm-900 text-cream-50 text-body-sm font-medium px-5 py-2.5 rounded-full hover:bg-warm-800 transition-colors"
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
