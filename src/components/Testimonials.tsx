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

// Client dot positions on the 72x36 grid
const clientDots: Record<string, { col: number; row: number }> = {
  US: { col: 15, row: 12 },
  UK: { col: 35, row: 9 },
  DE: { col: 37, row: 9 },
  AE: { col: 43, row: 15 },
  IN: { col: 49, row: 15 },
  AU: { col: 57, row: 27 },
};

// 72 columns x 36 rows dot-matrix world map
// Each string is a row, '1' = land, '0' = water
const worldMap: string[] = [
  '000000000000000000000000000000000000000000000000000000000000000000000000', // 0
  '000000000000000000000000000000000000000000000000000000000000000000000000', // 1
  '000000000000000000000000000100000000001111111111111111111100000000000000', // 2
  '000000000000001100000001111110000000011111111111111111111111000000000000', // 3
  '000000000000011110000011111111000001111111111111111111111111110000000000', // 4
  '000000000011111111100111111111100011111111111111111111111111111100000000', // 5
  '000000001111111111101111111111100011111111111111111111111111111110000000', // 6
  '000000011111111111111111111111100001111101111111111111111111111111000000', // 7
  '000000111111111111111111111111000000011100111111111111111111111111100000', // 8
  '000001111111111111111111100000000000111100011111011111111111111111100000', // 9
  '000011111111111111111110000000000001111110011111001111111111111111000000', // 10
  '000111111111111111111100000000000001111110001111000111111111111100000000', // 11
  '001111111111111111111000000000000000111111000110001111111111111000000000', // 12
  '001111111111111110000000000000000001111110000000011111111111110000000000', // 13
  '000111111111111100000000000000000001111111100000111111101111100000000000', // 14
  '000011111111110000000000000000000001111111110001111111100111100000000000', // 15
  '000001111111100000000000000000000001111111110001111110000011000000000000', // 16
  '000000111111000000000000000000000000111111111000111100000000000000000000', // 17
  '000000011110000000000000000000000000111111111000011000000001100000000000', // 18
  '000000011110000000000000000000000000011111111000000000000011110000000000', // 19
  '000000111111000000000000000000000000011111110000000000000111111000000000', // 20
  '000001111111100000000000000000000000001111100000000000001111111000000000', // 21
  '000001111111100000000000000000000000001111000000000000001111111100000000', // 22
  '000000111111110000000000000000000000000110000000000000000111111100000000', // 23
  '000000011111110000000000000000000000000100000000000000000011111000000000', // 24
  '000000001111100000000000000000000000000000000000000000000001110000000000', // 25
  '000000000111000000000000000000000000000000000000000000000000100000000000', // 26
  '000000000010000000000000000000000000000000000000000000011111110000000000', // 27
  '000000000000000000000000000000000000000000000000000000111111111000000000', // 28
  '000000000000000000000000000000000000000000000000000000111111111100000000', // 29
  '000000000000000000000000000000000000000000000000000000011111111100000000', // 30
  '000000000000000000000000000000000000000000000000000000001111111000000000', // 31
  '000000000000000000000000000000000000000000000000000000000111110000000000', // 32
  '000000000000000000000000000000000000000000000000000000000011100000000000', // 33
  '000000000000000000000000000000000000000000000000000000000000000001100000', // 34
  '000000000000000000000000000000000000000000000000000000000000000001100000', // 35
];

const COLS = 72;
const ROWS = 36;
const DOT_SPACING = 10;
const DOT_R = 1.8;

function DotMap({ active, onSelect }: { active: number; onSelect: (i: number) => void }) {
  const width = COLS * DOT_SPACING;
  const height = ROWS * DOT_SPACING;

  const activeCode = testimonials[active].countryCode;
  const activeDot = clientDots[activeCode];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="w-full" aria-label="World map showing client locations">
      <defs>
        <linearGradient id="dotGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Land dots */}
      {worldMap.map((row, r) =>
        row.split('').map((cell, c) => {
          if (cell !== '1') return null;
          return (
            <circle
              key={`${r}-${c}`}
              cx={c * DOT_SPACING + DOT_SPACING / 2}
              cy={r * DOT_SPACING + DOT_SPACING / 2}
              r={DOT_R}
              fill="#C9BAA5"
              opacity={0.5}
            />
          );
        })
      )}

      {/* Client location markers */}
      {testimonials.map((t, i) => {
        const d = clientDots[t.countryCode];
        const cx = d.col * DOT_SPACING + DOT_SPACING / 2;
        const cy = d.row * DOT_SPACING + DOT_SPACING / 2;
        const isActive = active === i;

        return (
          <g key={t.countryCode} onClick={() => onSelect(i)} className="cursor-pointer">
            {isActive && (
              <>
                <circle cx={cx} cy={cy} r="16" fill="none" stroke="#3B82F6" strokeWidth="1" opacity="0.15">
                  <animate attributeName="r" from="8" to="22" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx={cx} cy={cy} r="10" fill="#3B82F6" opacity="0.06" />
              </>
            )}
            <circle
              cx={cx}
              cy={cy}
              r={isActive ? 5 : 3}
              fill={isActive ? 'url(#dotGrad)' : '#7A726B'}
              filter={isActive ? 'url(#glow)' : undefined}
              className="transition-all duration-300"
            />
          </g>
        );
      })}

      {/* Connecting line */}
      <line
        x1={activeDot.col * DOT_SPACING + DOT_SPACING / 2 + 8}
        y1={activeDot.row * DOT_SPACING + DOT_SPACING / 2}
        x2={width}
        y2={activeDot.row * DOT_SPACING + DOT_SPACING / 2}
        stroke="#3B82F6"
        strokeWidth="0.5"
        strokeDasharray="3,6"
        opacity="0.25"
        className="transition-all duration-500"
      />
    </svg>
  );
}

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

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
          <div className="md:col-span-3 relative">
            <DotMap active={active} onSelect={setActive} />

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
