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
          <div className="w-8 h-8 rounded-lg gradient-bg flex items-center justify-center">
            <span className="text-white font-serif font-medium text-sm">A</span>
          </div>
          <span className={`font-serif text-xl tracking-tight transition-colors duration-500 ${
            scrolled ? 'text-warm-900' : 'text-white'
          }`}>
            Atom & Echo
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          <a href="#sample" className={`text-body-sm transition-colors ${
            scrolled ? 'text-warm-600 hover:text-warm-900' : 'text-white/60 hover:text-white'
          }`}>
            Free Sample
          </a>
          <a href="#testimonials" className={`text-body-sm transition-colors ${
            scrolled ? 'text-warm-600 hover:text-warm-900' : 'text-white/60 hover:text-white'
          }`}>
            Clients
          </a>
          <a href="#pricing" className={`text-body-sm transition-colors ${
            scrolled ? 'text-warm-600 hover:text-warm-900' : 'text-white/60 hover:text-white'
          }`}>
            Pricing
          </a>
          <a href="#about" className={`text-body-sm transition-colors ${
            scrolled ? 'text-warm-600 hover:text-warm-900' : 'text-white/60 hover:text-white'
          }`}>
            About
          </a>
        </nav>

        <a
          href="#cta"
          className={`hidden md:inline-flex items-center gap-2 text-body-sm font-medium px-5 py-2.5 rounded-full transition-all duration-500 ${
            scrolled
              ? 'gradient-btn'
              : 'bg-white/10 text-white border border-white/20 hover:bg-white/20'
          }`}
        >
          Book a call
        </a>
      </div>
    </header>
  );
}
