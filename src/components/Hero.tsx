import { useState, useEffect } from 'react';

export function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] rounded-full bg-blue-500/[0.07] blur-[100px]" />
        <div className="absolute bottom-[20%] right-[15%] w-[500px] h-[500px] rounded-full bg-blue-400/[0.05] blur-[120px]" />
      </div>

      <div className="container-wide relative z-10 px-6 md:px-12 lg:px-20 pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[calc(100vh-12rem)]">

          {/* Left — Copy */}
          <div>
            <div className={`flex items-center gap-3 mb-8 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="w-8 h-px bg-blue-400/60" />
              <p className="text-body-sm font-medium tracking-[0.2em] uppercase text-blue-300/70">
                The growth agency for founders
              </p>
            </div>

            <h1 className={`font-serif text-[clamp(2.8rem,5vw,4.2rem)] leading-[1.08] tracking-[-0.03em] text-white mb-6 transition-all duration-700 delay-150 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              Founder-led<br />growth<span className="text-blue-400">.</span>
            </h1>

            <p className={`text-body-lg text-blue-100/50 max-w-md leading-relaxed mb-10 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              We build your personal brand on LinkedIn and run outbound
              that converts — so prospects already know you before you
              ever reach out.
            </p>

            <div className={`flex flex-wrap gap-4 mb-14 transition-all duration-700 delay-[450ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
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

            {/* Proof points */}
            <div className={`flex gap-10 transition-all duration-700 delay-[600ms] ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
              <div>
                <p className="font-serif text-heading-3 text-white">30+</p>
                <p className="text-xs text-blue-200/35 mt-0.5">Founders</p>
              </div>
              <div>
                <p className="font-serif text-heading-3 text-white">6</p>
                <p className="text-xs text-blue-200/35 mt-0.5">Countries</p>
              </div>
              <div>
                <p className="font-serif text-heading-3 text-white">2M+</p>
                <p className="text-xs text-blue-200/35 mt-0.5">Prospects</p>
              </div>
            </div>
          </div>

          {/* Right — Visual mockups */}
          <div className={`relative transition-all duration-1000 delay-500 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>

            {/* LinkedIn post mockup */}
            <div className="bg-white rounded-xl shadow-2xl shadow-black/20 p-5 max-w-sm ml-auto relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-medium text-sm">S</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">Sarah Mitchell</p>
                  <p className="text-[11px] text-gray-400">CEO at Nexvoy · 1d</p>
                </div>
              </div>
              <p className="text-[13px] text-gray-700 leading-relaxed mb-4">
                3 months ago, I had zero inbound leads from LinkedIn.<br /><br />
                Today, we're getting 40+ per month.<br /><br />
                Here's the exact framework we used to turn my personal brand into our #1 pipeline source 👇
              </p>
              <div className="flex items-center gap-5 pt-3 border-t border-gray-100">
                <div className="flex items-center gap-1.5">
                  <div className="flex -space-x-1">
                    <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 1.5a1 1 0 011 1v.5a1 1 0 01-2 0V2.5a1 1 0 011-1z" fill="white"/><path d="M2 5.5c0-1.1.9-2 2-2s2 .9 2 2" stroke="white" strokeWidth=".7"/></svg>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-red-500 flex items-center justify-center">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M4 2.5C4 1.9 4.5 1.5 5 2c.5.5.1 1-.5 1.5L4 4l-.5-.5C2.9 2.9 2.5 2.5 3 2c.5-.5 1-.1 1 .5z" fill="white"/></svg>
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-400">2,847</span>
                </div>
                <span className="text-[11px] text-gray-400">184 comments</span>
                <span className="text-[11px] text-gray-400">52 reposts</span>
              </div>
            </div>

            {/* Connecting visual — arrow/flow */}
            <div className="hidden lg:flex items-center justify-center my-3 ml-auto max-w-sm">
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="mx-auto">
                <path d="M12 0v32m0 0l-6-6m6 6l6-6" stroke="#3B82F6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
              </svg>
            </div>

            {/* Lead gen results card */}
            <div className="bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-xl p-5 max-w-sm ml-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-medium text-emerald-300/80">Campaign Live</span>
                </div>
                <span className="text-[10px] text-blue-200/30 uppercase tracking-wider">Outbound</span>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="font-serif text-xl text-white">4.2%</p>
                  <p className="text-[10px] text-blue-200/35 mt-0.5">Reply rate</p>
                </div>
                <div>
                  <p className="font-serif text-xl text-white">22</p>
                  <p className="text-[10px] text-blue-200/35 mt-0.5">Calls booked</p>
                </div>
                <div>
                  <p className="font-serif text-xl text-white">6</p>
                  <p className="text-[10px] text-blue-200/35 mt-0.5">Deals closed</p>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-blue-200/30">Pipeline value</span>
                  <span className="text-white font-medium">$284,000</span>
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <div className="absolute -left-4 top-1/2 -translate-y-1/2 bg-blue-500/10 backdrop-blur border border-blue-400/20 rounded-lg px-3 py-2 hidden lg:block">
              <p className="text-[10px] text-blue-300/60 font-medium">Brand + Outbound</p>
              <p className="text-[10px] text-blue-200/30">Compounding pipeline</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
