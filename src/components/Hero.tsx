export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden gradient-hero">
      {/* Ambient background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] rounded-full bg-blue-400/6 blur-[150px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-blue-500/4 blur-[200px]" />
      </div>

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)',
        backgroundSize: '80px 80px'
      }} />

      <div className="container-wide relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8 fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-8 h-px bg-blue-400/60" />
            <p className="text-body-sm font-medium tracking-[0.2em] uppercase text-blue-300/80">
              Atom & Echo
            </p>
          </div>

          {/* Main headline */}
          <h1 className="fade-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="block font-serif text-[clamp(3rem,7vw,6rem)] leading-[1.02] tracking-[-0.03em] text-white mb-2">
              Your prospects should
            </span>
            <span className="block font-serif text-[clamp(3rem,7vw,6rem)] leading-[1.02] tracking-[-0.03em] text-white">
              know you <em className="italic text-blue-300">before</em>
            </span>
            <span className="block font-serif text-[clamp(3rem,7vw,6rem)] leading-[1.02] tracking-[-0.03em] text-white">
              you reach out<span className="text-blue-400">.</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="text-body-lg text-blue-100/50 max-w-xl mt-8 leading-relaxed fade-in-up" style={{ animationDelay: '0.45s' }}>
            We build your founder brand on LinkedIn and run outbound that
            converts — because cold outreach works when you're not a stranger.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mt-10 fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-blue-950 font-medium px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
            >
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="ml-0.5">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#free-sample"
              className="inline-flex items-center gap-2 border border-white/15 text-white/80 font-medium px-7 py-3.5 rounded-full hover:bg-white/5 hover:border-white/25 transition-all"
            >
              See a free sample
            </a>
          </div>
        </div>

        {/* Floating stats bar */}
        <div className="mt-20 md:mt-28 fade-in-up" style={{ animationDelay: '0.8s' }}>
          <div className="flex flex-wrap gap-x-12 gap-y-6 border-t border-white/[0.08] pt-8">
            <div>
              <p className="font-serif text-heading-2 text-white">30+</p>
              <p className="text-body-sm text-blue-200/40 mt-1">Founders served</p>
            </div>
            <div>
              <p className="font-serif text-heading-2 text-white">6</p>
              <p className="text-body-sm text-blue-200/40 mt-1">Countries</p>
            </div>
            <div>
              <p className="font-serif text-heading-2 text-white">2M+</p>
              <p className="text-body-sm text-blue-200/40 mt-1">Prospects reached</p>
            </div>
            <div>
              <p className="font-serif text-heading-2 text-white">3x</p>
              <p className="text-body-sm text-blue-200/40 mt-1">Avg. reply rate lift</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream-100" />
    </section>
  );
}
