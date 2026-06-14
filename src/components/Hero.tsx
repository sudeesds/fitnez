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

          {/* Right — Animated visual story */}
          <div className="relative flex flex-col items-end gap-0">

            {/* Top badge — Brand + Outbound */}
            <div className="hero-anim-badge mb-4 self-center bg-blue-500/10 backdrop-blur border border-blue-400/20 rounded-full px-5 py-2 flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1v12M1 7h12" stroke="#60A5FA" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <p className="text-xs text-blue-300/80 font-medium">Brand + Outbound = Compounding Growth</p>
            </div>

            {/* Two cards side by side that animate in */}
            <div className="grid grid-cols-2 gap-3 w-full max-w-md ml-auto mb-3">

              {/* LinkedIn post mockup — slides in from left */}
              <div className="hero-anim-branding bg-white rounded-xl shadow-xl shadow-black/15 p-4 relative">
                <div className="absolute -top-2 left-3 bg-blue-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Branding
                </div>
                <div className="flex items-center gap-2 mb-3 mt-1">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                    <span className="text-white font-medium text-[10px]">S</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold text-gray-900">Sarah Mitchell</p>
                    <p className="text-[9px] text-gray-400">CEO at Nexvoy</p>
                  </div>
                </div>
                <p className="text-[11px] text-gray-600 leading-relaxed mb-3">
                  3 months ago, I had zero inbound leads from LinkedIn.<br />
                  Today, we're getting 40+ per month. 👇
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="flex items-center gap-1">
                    <div className="flex -space-x-0.5">
                      <div className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                      <div className="w-3.5 h-3.5 rounded-full bg-red-500" />
                    </div>
                    <span className="text-[9px] text-gray-400">2,847</span>
                  </div>
                  <span className="text-[9px] text-gray-400">184 comments</span>
                </div>
              </div>

              {/* Email mockup — slides in from right */}
              <div className="hero-anim-outbound bg-white rounded-xl shadow-xl shadow-black/15 p-4 relative">
                <div className="absolute -top-2 left-3 bg-emerald-600 text-white text-[9px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider">
                  Outbound
                </div>

                <div className="space-y-2.5 mt-1">
                  {/* Email 1 — replied */}
                  <div className="bg-emerald-50 border border-emerald-200/60 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-semibold text-gray-800">Re: Quick question</span>
                      <span className="text-[8px] text-emerald-600 font-medium">Replied</span>
                    </div>
                    <p className="text-[9px] text-gray-500">I saw your post on LinkedIn — let's chat...</p>
                  </div>

                  {/* Email 2 — replied */}
                  <div className="bg-emerald-50 border border-emerald-200/60 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-semibold text-gray-800">Re: Partnership idea</span>
                      <span className="text-[8px] text-emerald-600 font-medium">Replied</span>
                    </div>
                    <p className="text-[9px] text-gray-500">Been following your content, interested...</p>
                  </div>

                  {/* Email 3 — opened */}
                  <div className="bg-gray-50 border border-gray-200/60 rounded-lg px-3 py-2">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="text-[10px] font-semibold text-gray-800">Intro from Sarah</span>
                      <span className="text-[8px] text-blue-500 font-medium">Opened</span>
                    </div>
                    <p className="text-[9px] text-gray-500">Your LinkedIn came up in our meeting...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Merge indicator — animated */}
            <div className="hero-anim-merge flex items-center justify-center w-full max-w-md ml-auto mb-3">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-blue-400/40" />
              <div className="mx-3 w-8 h-8 rounded-full bg-blue-500/15 border border-blue-400/25 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M7 3v8m0 0l-2.5-2.5M7 11l2.5-2.5" stroke="#60A5FA" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-blue-400/30 to-blue-400/40" />
            </div>

            {/* Campaign results — the output */}
            <div className="hero-anim-results bg-white/[0.06] backdrop-blur-md border border-white/[0.1] rounded-xl p-5 w-full max-w-md ml-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 hero-pulse-dot" />
                  <span className="text-xs font-medium text-emerald-300/80">Campaign Live</span>
                </div>
                <span className="text-[10px] text-blue-200/40 uppercase tracking-wider font-medium">Growth Engine</span>
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

          </div>
        </div>
      </div>
    </section>
  );
}
