import { useState, useEffect } from 'react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] rounded-full bg-blue-600/8 blur-[120px]" />
        <div className="absolute bottom-1/3 right-0 w-[600px] h-[600px] rounded-full bg-blue-400/6 blur-[150px]" />
      </div>

      <div className="container-wide relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Top section — headline + sub */}
        <div className="max-w-3xl mb-16 md:mb-24">
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-8 h-px bg-blue-400/60" />
            <p className="text-body-sm font-medium tracking-[0.2em] uppercase text-blue-300/70">
              The growth agency for founders
            </p>
          </div>

          <h1 className={`font-serif text-[clamp(2.8rem,5.5vw,4.5rem)] leading-[1.06] tracking-[-0.03em] text-white mb-6 transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            Founder-led<br />growth<span className="text-blue-400">.</span>
          </h1>

          <p className={`text-body-lg text-blue-100/45 max-w-lg leading-relaxed mb-8 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            We pair personal branding with targeted outbound so your
            prospects already know you before you ever reach out.
          </p>

          <div className={`flex flex-wrap gap-4 transition-all duration-700 delay-[450ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <a
              href="#cta"
              className="inline-flex items-center gap-2 bg-white text-blue-950 font-medium px-7 py-3.5 rounded-full hover:bg-blue-50 transition-all hover:shadow-[0_8px_32px_rgba(255,255,255,0.15)]"
            >
              Book a call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M3 7h8m0 0L7.5 3.5M11 7l-3.5 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#free-sample"
              className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-medium px-7 py-3.5 rounded-full hover:bg-white/5 hover:border-white/25 transition-all"
            >
              See a free sample
            </a>
          </div>
        </div>

        {/* Service cards */}
        <div className={`grid md:grid-cols-2 gap-5 transition-all duration-700 delay-[600ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Personal Branding card */}
          <div className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-500">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

            <div className="flex items-start justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/15 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2.5a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zM3.75 17.5a6.25 6.25 0 0112.5 0" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-blue-300/50 mt-1">01</span>
            </div>

            <h3 className="font-serif text-heading-3 text-white mb-3">
              Personal Branding
            </h3>
            <p className="text-body-sm text-blue-100/35 leading-relaxed mb-6">
              We craft your LinkedIn presence — thought leadership posts,
              profile optimization, engagement strategy — so prospects
              find authority when they look you up.
            </p>

            <div className="flex flex-wrap gap-2">
              {['LinkedIn Content', 'Profile Strategy', 'Engagement'].map((tag) => (
                <span key={tag} className="text-[11px] text-blue-200/30 border border-white/[0.06] rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Lead Generation card */}
          <div className="group relative bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-2xl p-8 hover:bg-white/[0.07] hover:border-white/[0.14] transition-all duration-500">
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

            <div className="flex items-start justify-between mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-400/15 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M17.5 7.5l-7.5 7.5-3.75-3.75M2.5 12.5l3.75 3.75L7.5 15" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12.5 2.5l5 5M17.5 2.5v5h-5" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="text-[10px] font-medium tracking-[0.15em] uppercase text-blue-300/50 mt-1">02</span>
            </div>

            <h3 className="font-serif text-heading-3 text-white mb-3">
              Lead Generation
            </h3>
            <p className="text-body-sm text-blue-100/35 leading-relaxed mb-6">
              Cold emails and LinkedIn DMs that actually convert — because
              your outreach lands with someone who's already seen your name,
              your ideas, your credibility.
            </p>

            <div className="flex flex-wrap gap-2">
              {['Cold Email', 'LinkedIn DMs', 'Lead Lists'].map((tag) => (
                <span key={tag} className="text-[11px] text-blue-200/30 border border-white/[0.06] rounded-full px-3 py-1">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Bottom fade to cream */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-cream-100" />
    </section>
  );
}
