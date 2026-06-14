import { useState, useEffect, useCallback } from 'react';

const PHASE_DURATION = 3500;
const CARDS = ['branding', 'outbound', 'results'] as const;
function getCardStyle(cardIndex: number, activeIndex: number): React.CSSProperties {
  const total = CARDS.length;
  let offset = cardIndex - activeIndex;
  if (offset > 1) offset -= total;
  if (offset < -1) offset += total;

  const base: React.CSSProperties = {
    transition: 'all 0.9s cubic-bezier(0.4, 0, 0.2, 1)',
    position: 'absolute',
    width: '78%',
    height: '100%',
    left: '11%',
  };

  if (offset === 0) {
    return { ...base, transform: 'translateX(0) scale(1)', opacity: 1, zIndex: 10 };
  }
  if (offset === 1) {
    return { ...base, transform: 'translateX(80%) scale(0.9)', opacity: 0.4, zIndex: 5 };
  }
  if (offset === -1) {
    return { ...base, transform: 'translateX(-80%) scale(0.9)', opacity: 0.4, zIndex: 5 };
  }
  return { ...base, transform: 'translateX(160%) scale(0.85)', opacity: 0, zIndex: 0 };
}

export function Hero() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(0);

  useEffect(() => { setMounted(true); }, []);

  const advance = useCallback(() => {
    setActive(i => (i + 1) % CARDS.length);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const id = setInterval(advance, PHASE_DURATION);
    return () => clearInterval(id);
  }, [mounted, advance]);

  const phase = CARDS[active];

  return (
    <section className="relative min-h-screen overflow-hidden gradient-hero">
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

          {/* Right — Carousel */}
          <div className={`transition-all duration-1000 delay-500 ${mounted ? 'opacity-100' : 'opacity-0'}`}>

            {/* Badge with highlighted words */}
            <div className="flex justify-center mb-6">
              <div className="bg-white/[0.04] backdrop-blur border border-white/[0.08] rounded-full px-5 py-2.5 flex items-center gap-1.5 text-xs font-medium">
                <span className={`px-2 py-0.5 rounded-full transition-all duration-500 ${
                  phase === 'branding' ? 'bg-blue-500/20 text-blue-300' : 'text-white/25'
                }`}>Brand</span>
                <span className="text-white/15">+</span>
                <span className={`px-2 py-0.5 rounded-full transition-all duration-500 ${
                  phase === 'outbound' ? 'bg-emerald-500/20 text-emerald-300' : 'text-white/25'
                }`}>Outbound</span>
                <span className="text-white/15">=</span>
                <span className={`px-2 py-0.5 rounded-full transition-all duration-500 ${
                  phase === 'results' ? 'bg-white/15 text-white' : 'text-white/25'
                }`}>Growth</span>
              </div>
            </div>

            {/* Carousel track */}
            <div className="relative h-[420px]">

                {/* Branding card */}
                <div
                  className="cursor-pointer top-0"
                  style={getCardStyle(0, active)}
                  onClick={() => setActive(0)}
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-[11px] text-gray-400 font-mono">linkedin post</span>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shrink-0">
                          <span className="text-white font-semibold text-sm">S</span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-gray-900">Sarah Mitchell</p>
                          <p className="text-[11px] text-gray-400">CEO at Nexvoy · 2h · 🌍</p>
                        </div>
                      </div>
                      <p className="text-[13px] text-gray-700 leading-relaxed">
                        The era of faceless brands is over. Your prospects want to hear from you — the founder, the expert, the human behind the company.
                        <br /><br />
                        That's the unfair advantage waiting to be unlocked. We help you build it.
                      </p>
                      <div className="flex items-center gap-5 pt-4 mt-5 border-t border-gray-100">
                        <div className="flex items-center gap-1.5">
                          <div className="flex -space-x-1">
                            <div className="w-[18px] h-[18px] rounded-full bg-blue-500" />
                            <div className="w-[18px] h-[18px] rounded-full bg-red-500" />
                            <div className="w-[18px] h-[18px] rounded-full bg-yellow-500" />
                          </div>
                          <span className="text-[11px] text-gray-400 ml-1">4,218</span>
                        </div>
                        <span className="text-[11px] text-gray-400">312 comments</span>
                        <span className="text-[11px] text-gray-400">89 reposts</span>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-t border-blue-100 px-5 py-2.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5l3 3 7-7" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[12px] text-blue-600 font-medium">Top voice — 40 inbound leads/month</span>
                    </div>
                  </div>
                </div>

                {/* Outbound card */}
                <div
                  className="cursor-pointer top-0"
                  style={getCardStyle(1, active)}
                  onClick={() => setActive(1)}
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-[11px] text-gray-400 font-mono">compose email</span>
                    </div>
                    <div className="p-6 flex-1">
                      <p className="text-[12px] text-gray-400 mb-1">To: Sarah Jennings</p>
                      <p className="text-[14px] font-semibold text-gray-900 mb-5">
                        Subject: Saw the Series B — congrats
                      </p>
                      <p className="text-[13px] text-gray-700 leading-relaxed">
                        Hey Sarah,
                        <br /><br />
                        Congrats on the Series B — saw the announcement on LinkedIn. With the growth push, I imagine outbound is top of mind.
                        <br /><br />
                        We just helped a similar SaaS company book 40+ meetings in 6 weeks. Happy to share the playbook if useful.
                        <br /><br />
                        Cheers,<br />Nick
                      </p>
                    </div>
                    <div className="bg-emerald-50 border-t border-emerald-100 px-5 py-2.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5l3 3 7-7" stroke="#059669" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[12px] text-emerald-600 font-medium">Primary inbox — 22% reply rate</span>
                    </div>
                  </div>
                </div>

                {/* Results card */}
                <div
                  className="cursor-pointer top-0"
                  style={getCardStyle(2, active)}
                  onClick={() => setActive(2)}
                >
                  <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden h-full flex flex-col">
                    <div className="flex items-center gap-2 px-5 py-3 bg-gray-50 border-b border-gray-100">
                      <div className="w-3 h-3 rounded-full bg-red-400" />
                      <div className="w-3 h-3 rounded-full bg-amber-400" />
                      <div className="w-3 h-3 rounded-full bg-emerald-400" />
                      <span className="ml-3 text-[11px] text-gray-400 font-mono">campaign dashboard</span>
                    </div>
                    <div className="p-6 flex-1">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <span className="text-sm font-semibold text-gray-900">Campaign Live</span>
                        </div>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider font-medium bg-gray-100 px-2.5 py-1 rounded-full">Founder-Led</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mb-5">
                        <div className="bg-blue-50 rounded-xl p-4">
                          <p className="text-[10px] text-blue-500 font-medium uppercase tracking-wider mb-1">Branding</p>
                          <p className="font-serif text-2xl text-gray-900">4,218</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">Impressions/post</p>
                        </div>
                        <div className="bg-emerald-50 rounded-xl p-4">
                          <p className="text-[10px] text-emerald-500 font-medium uppercase tracking-wider mb-1">Outbound</p>
                          <p className="font-serif text-2xl text-gray-900">4.2%</p>
                          <p className="text-[11px] text-gray-400 mt-0.5">Reply rate</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="font-serif text-xl text-gray-900">22</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">Calls</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="font-serif text-xl text-gray-900">6</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">Deals</p>
                        </div>
                        <div className="text-center p-3 bg-gray-50 rounded-lg">
                          <p className="font-serif text-xl text-gray-900">$284k</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">Pipeline</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-blue-500 to-emerald-500 px-5 py-2.5 flex items-center gap-2">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7.5l3 3 7-7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-[12px] text-white font-medium">Brand + Outbound = Compounding Growth</span>
                    </div>
                  </div>
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
