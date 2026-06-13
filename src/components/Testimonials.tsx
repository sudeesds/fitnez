import { useState } from 'react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  country: string;
  countryCode: string;
  quote: string;
  result: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    title: 'CEO',
    company: 'Nexvoy',
    country: 'United States',
    countryCode: 'US',
    quote: 'We went from 0 to 40 inbound leads a month on LinkedIn. The personal branding work completely changed how prospects perceive us.',
    result: '40 inbound leads/month',
  },
  {
    name: 'Lars Brinkmann',
    title: 'Founder',
    company: 'Flowmatic',
    country: 'Germany',
    countryCode: 'DE',
    quote: "Their cold email campaigns consistently deliver 3-4% reply rates. We've closed 6 enterprise deals directly from their outreach.",
    result: '6 enterprise deals closed',
  },
  {
    name: 'James Okonkwo',
    title: 'Managing Director',
    company: 'Skybridge Consulting',
    country: 'United Kingdom',
    countryCode: 'UK',
    quote: 'The combination of personal branding and lead gen is lethal. My LinkedIn posts now generate more pipeline than our paid ads.',
    result: 'LinkedIn > Paid Ads in pipeline',
  },
  {
    name: 'Aisha Al-Rashid',
    title: 'Co-Founder',
    company: 'Oasis Digital',
    country: 'Dubai',
    countryCode: 'AE',
    quote: 'Atom & Echo understood our market instantly. The content they create positions us as the go-to in our space across the GCC.',
    result: '#1 positioning in GCC market',
  },
  {
    name: 'Vikram Desai',
    title: 'Founder & CTO',
    company: 'Buildcraft Labs',
    country: 'India',
    countryCode: 'IN',
    quote: 'As a technical founder, I never thought LinkedIn could drive sales. They proved me wrong — 22 qualified calls in the first month.',
    result: '22 qualified calls in month 1',
  },
  {
    name: 'Emma Clarke',
    title: 'CEO',
    company: 'Palette Studio',
    country: 'Australia',
    countryCode: 'AU',
    quote: "Working across time zones was seamless. The team writes in my voice so authentically that my own team can't tell the difference.",
    result: 'Seamless global partnership',
  },
];

const clientLocations: Record<string, { cx: number; cy: number }> = {
  US: { cx: 150, cy: 145 },
  DE: { cx: 495, cy: 115 },
  UK: { cx: 470, cy: 105 },
  AE: { cx: 570, cy: 170 },
  IN: { cx: 610, cy: 170 },
  AU: { cx: 720, cy: 270 },
};

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];
  const loc = clientLocations[current.countryCode];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <p className="text-body-sm font-medium tracking-wide uppercase mb-4 gradient-text">
            Global clients, local attention
          </p>
          <h2 className="font-serif text-heading-1 text-warm-900 mb-6">
            Trusted by founders across<br />six countries<span className="gradient-text">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* World Map — 3 columns */}
          <div className="md:col-span-3 relative">
            <svg viewBox="0 0 900 420" className="w-full" aria-label="World map showing client locations">
              <defs>
                <linearGradient id="landGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#C9BAA5" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#E0D5C4" stopOpacity="0.55" />
                </linearGradient>
                <linearGradient id="dotGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#1D4ED8" />
                  <stop offset="100%" stopColor="#3B82F6" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* North America */}
              <path d="M60,55 L90,45 L130,40 L165,50 L190,60 L210,55 L230,65 L225,80 L215,95 L220,110 L210,125 L195,140 L180,155 L165,160 L150,170 L130,175 L115,165 L100,155 L90,160 L75,155 L65,140 L55,120 L50,100 L55,80 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Greenland */}
              <path d="M280,30 L310,25 L340,30 L350,45 L340,55 L315,60 L290,55 L280,40 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Central America */}
              <path d="M130,175 L145,180 L155,190 L150,200 L140,195 L130,185 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* South America */}
              <path d="M170,210 L200,200 L220,205 L235,220 L240,245 L235,270 L225,290 L215,310 L200,325 L185,335 L175,330 L170,310 L160,290 L155,265 L158,240 L165,220 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Europe */}
              <path d="M430,55 L445,50 L465,48 L485,52 L505,55 L520,60 L530,70 L525,85 L515,95 L510,105 L500,115 L490,120 L475,125 L460,120 L450,115 L440,108 L435,95 L430,80 L425,65 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* British Isles */}
              <path d="M440,70 L450,65 L455,72 L448,80 L440,78 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Scandinavia */}
              <path d="M480,30 L495,25 L510,30 L515,45 L510,55 L500,50 L490,45 L485,38 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Africa */}
              <path d="M450,135 L470,130 L495,130 L520,135 L540,145 L555,160 L560,180 L555,205 L545,230 L530,255 L515,270 L500,280 L485,275 L470,265 L458,250 L450,230 L445,205 L440,180 L442,155 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Middle East */}
              <path d="M535,120 L555,115 L575,120 L585,135 L590,150 L585,165 L575,175 L560,170 L545,160 L535,145 L530,130 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* India / South Asia */}
              <path d="M590,125 L615,115 L640,120 L650,135 L645,155 L635,175 L620,190 L605,195 L595,185 L585,170 L580,150 L585,135 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Southeast Asia */}
              <path d="M655,140 L675,130 L695,135 L705,150 L700,165 L690,175 L675,175 L660,170 L650,160 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* East Asia / China */}
              <path d="M640,70 L670,60 L700,55 L730,60 L750,70 L755,85 L745,100 L730,115 L710,125 L690,130 L670,125 L655,115 L645,100 L640,85 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Japan */}
              <path d="M760,80 L770,75 L775,85 L772,100 L765,105 L758,95 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Indonesia */}
              <path d="M670,200 L690,195 L715,198 L735,205 L720,215 L700,218 L680,215 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Australia */}
              <path d="M690,250 L720,240 L750,238 L775,245 L790,260 L785,280 L770,295 L750,305 L725,308 L705,300 L695,285 L688,270 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* New Zealand */}
              <path d="M810,300 L818,295 L822,305 L815,315 L808,310 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />
              {/* Russia / Northern Asia */}
              <path d="M530,30 L570,22 L620,20 L670,22 L720,28 L755,35 L770,45 L760,55 L740,55 L700,50 L660,55 L640,65 L620,60 L590,55 L560,50 L540,45 Z" fill="url(#landGrad)" stroke="#C9BAA5" strokeWidth="0.8" />

              {/* Grid lines for depth */}
              {[80, 140, 200, 260, 320].map(y => (
                <line key={`h${y}`} x1="30" y1={y} x2="870" y2={y} stroke="#E0D5C4" strokeWidth="0.3" strokeDasharray="4,8" opacity="0.4" />
              ))}
              {[150, 300, 450, 600, 750].map(x => (
                <line key={`v${x}`} x1={x} y1="10" x2={x} y2="380" stroke="#E0D5C4" strokeWidth="0.3" strokeDasharray="4,8" opacity="0.4" />
              ))}

              {/* Client location dots */}
              {testimonials.map((t, i) => {
                const l = clientLocations[t.countryCode];
                const isActive = active === i;
                return (
                  <g key={t.countryCode} onClick={() => setActive(i)} className="cursor-pointer">
                    {isActive && (
                      <>
                        <circle cx={l.cx} cy={l.cy} r="20" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.15">
                          <animate attributeName="r" from="10" to="28" dur="2s" repeatCount="indefinite" />
                          <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx={l.cx} cy={l.cy} r="12" fill="#3B82F6" opacity="0.08" />
                      </>
                    )}
                    <circle
                      cx={l.cx}
                      cy={l.cy}
                      r={isActive ? 6 : 4}
                      fill={isActive ? 'url(#dotGrad)' : '#9B9289'}
                      filter={isActive ? 'url(#glow)' : undefined}
                      className="transition-all duration-300"
                    />
                  </g>
                );
              })}

              {/* Connecting line from active dot */}
              <line
                x1={loc.cx}
                y1={loc.cy}
                x2="870"
                y2={loc.cy}
                stroke="#3B82F6"
                strokeWidth="0.5"
                strokeDasharray="3,6"
                opacity="0.3"
                className="transition-all duration-500"
              />
            </svg>

            {/* Country pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {testimonials.map((t, i) => (
                <button
                  key={t.countryCode}
                  onClick={() => setActive(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active === i
                      ? 'gradient-btn'
                      : 'bg-cream-200 text-warm-500 hover:bg-cream-300'
                  }`}
                >
                  {t.country}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial — 2 columns */}
          <div className="md:col-span-2 md:pt-8" key={active}>
            <div className="fade-in-up">
              <blockquote className="font-serif text-heading-3 text-warm-900 leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-700 flex items-center justify-center">
                  <span className="text-white font-medium text-lg">
                    {current.name[0]}
                  </span>
                </div>
                <div>
                  <p className="text-body font-medium text-warm-900">{current.name}</p>
                  <p className="text-body-sm text-warm-400">
                    {current.title}, {current.company}
                  </p>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7.5l3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-body-sm font-medium">{current.result}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
