import { useState } from 'react';

interface Testimonial {
  name: string;
  title: string;
  company: string;
  country: string;
  countryCode: string;
  quote: string;
  result: string;
  coords: { x: number; y: number };
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
    coords: { x: 160, y: 148 },
  },
  {
    name: 'Lars Brinkmann',
    title: 'Founder',
    company: 'Flowmatic',
    country: 'Germany',
    countryCode: 'DE',
    quote: 'Their cold email campaigns consistently deliver 3-4% reply rates. We\'ve closed 6 enterprise deals directly from their outreach.',
    result: '6 enterprise deals closed',
    coords: { x: 370, y: 135 },
  },
  {
    name: 'James Okonkwo',
    title: 'Managing Director',
    company: 'Skybridge Consulting',
    country: 'United Kingdom',
    countryCode: 'UK',
    quote: 'The combination of personal branding and lead gen is lethal. My LinkedIn posts now generate more pipeline than our paid ads.',
    result: 'LinkedIn > Paid Ads in pipeline',
    coords: { x: 350, y: 128 },
  },
  {
    name: 'Aisha Al-Rashid',
    title: 'Co-Founder',
    company: 'Oasis Digital',
    country: 'Dubai',
    countryCode: 'AE',
    quote: 'Atom & Echo understood our market instantly. The content they create positions us as the go-to in our space across the GCC.',
    result: '#1 positioning in GCC market',
    coords: { x: 420, y: 162 },
  },
  {
    name: 'Vikram Desai',
    title: 'Founder & CTO',
    company: 'Buildcraft Labs',
    country: 'India',
    countryCode: 'IN',
    quote: 'As a technical founder, I never thought LinkedIn could drive sales. They proved me wrong — 22 qualified calls in the first month.',
    result: '22 qualified calls in month 1',
    coords: { x: 470, y: 170 },
  },
  {
    name: 'Emma Clarke',
    title: 'CEO',
    company: 'Palette Studio',
    country: 'Australia',
    countryCode: 'AU',
    quote: 'Working across time zones was seamless. The team writes in my voice so authentically that my own team can\'t tell the difference.',
    result: 'Seamless global partnership',
    coords: { x: 540, y: 218 },
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="section-padding">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <p className="text-body-sm text-accent font-medium tracking-wide uppercase mb-4">
            Global clients, local attention
          </p>
          <h2 className="font-serif text-heading-1 text-warm-900 mb-6">
            Trusted by founders across<br />six countries<span className="text-accent">.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Globe / Map */}
          <div className="relative">
            <svg viewBox="0 0 680 340" className="w-full" aria-label="World map showing client locations">
              {/* Simplified world map outline */}
              <defs>
                <linearGradient id="mapGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#EDE5D8" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#E0D5C4" stopOpacity="0.3" />
                </linearGradient>
              </defs>

              {/* Continental shapes — simplified */}
              {/* North America */}
              <path d="M80,80 Q120,60 170,75 Q190,85 195,110 Q180,130 165,145 Q150,165 120,170 Q100,165 85,150 Q75,130 70,110 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* South America */}
              <path d="M155,185 Q175,175 185,190 Q195,210 190,240 Q180,265 165,280 Q155,275 150,260 Q145,235 148,210 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* Europe */}
              <path d="M330,85 Q350,75 375,80 Q390,85 395,100 Q385,115 370,120 Q355,125 340,118 Q325,110 328,95 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* Africa */}
              <path d="M340,135 Q365,130 380,140 Q395,160 390,190 Q380,220 365,235 Q350,240 340,225 Q330,200 332,170 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* Middle East */}
              <path d="M400,125 Q420,118 435,130 Q440,145 430,158 Q415,165 405,155 Q395,142 400,125 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* India */}
              <path d="M445,140 Q465,130 480,145 Q488,165 478,185 Q465,195 455,185 Q442,168 445,140 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* East Asia */}
              <path d="M490,95 Q520,85 545,95 Q560,110 555,130 Q540,145 520,140 Q500,135 490,120 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>
              {/* Australia */}
              <path d="M520,210 Q545,200 565,210 Q575,225 568,245 Q555,255 535,250 Q520,240 518,225 Z" fill="url(#mapGrad)" stroke="#D4C5B0" strokeWidth="0.5"/>

              {/* Client location dots */}
              {testimonials.map((t, i) => (
                <g key={t.countryCode} onClick={() => setActive(i)} className="cursor-pointer">
                  {/* Pulse ring for active */}
                  {active === i && (
                    <circle
                      cx={t.coords.x}
                      cy={t.coords.y}
                      r="14"
                      fill="none"
                      stroke="#C4653A"
                      strokeWidth="1.5"
                      opacity="0.3"
                    >
                      <animate attributeName="r" from="8" to="20" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={t.coords.x}
                    cy={t.coords.y}
                    r={active === i ? 6 : 4}
                    fill={active === i ? '#C4653A' : '#B8AFA6'}
                    className="globe-dot transition-all duration-300"
                  />
                </g>
              ))}
            </svg>

            {/* Country selector pills */}
            <div className="flex flex-wrap gap-2 mt-6">
              {testimonials.map((t, i) => (
                <button
                  key={t.countryCode}
                  onClick={() => setActive(i)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    active === i
                      ? 'bg-warm-900 text-cream-50'
                      : 'bg-cream-200 text-warm-500 hover:bg-cream-300'
                  }`}
                >
                  {t.country}
                </button>
              ))}
            </div>
          </div>

          {/* Testimonial content */}
          <div className="md:pt-8" key={active}>
            <div className="fade-in-up">
              <blockquote className="font-serif text-heading-3 text-warm-900 leading-relaxed mb-8">
                "{current.quote}"
              </blockquote>

              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-full bg-cream-300 flex items-center justify-center">
                  <span className="font-serif text-warm-600 text-lg">
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

              <div className="inline-flex items-center gap-2 bg-accent/10 text-accent px-4 py-2 rounded-full">
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
