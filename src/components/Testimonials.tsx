import { useState } from 'react';
import { WorldDotMap } from './WorldDotMap';

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

const codeToIndex = Object.fromEntries(testimonials.map((t, i) => [t.countryCode, i]));

export function Testimonials() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  const handleMapSelect = (code: string) => {
    const idx = codeToIndex[code];
    if (idx !== undefined) setActive(idx);
  };

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
            <WorldDotMap
              activeCountry={current.countryCode}
              countries={testimonials.map(t => t.countryCode)}
              onSelect={handleMapSelect}
            />

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
