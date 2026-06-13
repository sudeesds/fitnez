import { useState } from 'react';

export function FreeSample() {
  const [activeTab, setActiveTab] = useState<'branding' | 'leadgen'>('branding');

  return (
    <section id="sample" className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="max-w-2xl mb-20">
          <p className="text-body-sm font-medium tracking-wide uppercase mb-4 gradient-text">
            Skip the sales pitch
          </p>
          <h2 className="font-serif text-heading-1 text-warm-900 mb-6">
            Try before you buy<span className="gradient-text">.</span>
          </h2>
          <p className="text-body-lg text-warm-500">
            Process decks and case study PDFs are boring. Instead, we'll give
            you a free sample — real work, real results. Come back only when
            you've seen what we can do.
          </p>
        </div>

        <div className="flex gap-3 mb-12">
          <button
            onClick={() => setActiveTab('branding')}
            className={`px-5 py-2.5 rounded-full text-body-sm font-medium transition-all ${
              activeTab === 'branding'
                ? 'gradient-btn'
                : 'bg-cream-200 text-warm-600 hover:bg-cream-300'
            }`}
          >
            Personal Branding
          </button>
          <button
            onClick={() => setActiveTab('leadgen')}
            className={`px-5 py-2.5 rounded-full text-body-sm font-medium transition-all ${
              activeTab === 'leadgen'
                ? 'gradient-btn'
                : 'bg-cream-200 text-warm-600 hover:bg-cream-300'
            }`}
          >
            Lead Generation
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {activeTab === 'branding' ? (
            <>
              <div className="bg-white rounded-2xl p-8 border border-cream-300/60 shadow-sm">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                    <span className="text-white text-sm font-medium">Y</span>
                  </div>
                  <div>
                    <p className="text-body-sm font-medium text-warm-900">Your Name</p>
                    <p className="text-xs text-warm-400">Founder & CEO at Your Company</p>
                  </div>
                </div>
                <div className="space-y-3 mb-6">
                  <p className="text-body text-warm-800 font-medium">
                    I spent 3 years building a product nobody asked for.
                  </p>
                  <p className="text-body-sm text-warm-600 leading-relaxed">
                    Here's what I learned about founder-market fit that no
                    accelerator will teach you:
                  </p>
                  <div className="space-y-2 pl-1">
                    <p className="text-body-sm text-warm-600">1. Talk to 100 people before writing a line of code</p>
                    <p className="text-body-sm text-warm-600">2. Your first 10 customers should feel like co-founders</p>
                    <p className="text-body-sm text-warm-600">3. Revenue validates. Compliments don't.</p>
                  </div>
                  <p className="text-body-sm text-warm-600 leading-relaxed">
                    The best products aren't built in isolation — they're
                    built in conversation.
                  </p>
                </div>
                <div className="flex gap-6 text-xs text-warm-400 border-t border-cream-200 pt-4">
                  <span>142 reactions</span>
                  <span>38 comments</span>
                  <span>12 reposts</span>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-heading-2 text-warm-900 mb-4">
                  Two posts, on us.
                </h3>
                <p className="text-body text-warm-500 mb-6 leading-relaxed">
                  We'll write two LinkedIn posts tailored to your voice, your
                  expertise, and your audience. Post them. See the engagement.
                  Then decide if you want more.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-body-sm text-warm-600">Written in your authentic voice — not generic AI slop</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-body-sm text-warm-600">Strategically crafted to attract your ideal prospects</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-body-sm text-warm-600">No strings attached — seriously</p>
                  </div>
                </div>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 gradient-btn font-medium px-6 py-3 rounded-full w-fit"
                >
                  Get your free posts
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-2xl p-8 border border-cream-300/60 shadow-sm">
                <p className="text-body-sm text-warm-400 uppercase tracking-wide mb-6">Sample Campaign Results</p>
                <div className="space-y-6">
                  <div className="flex justify-between items-end border-b border-cream-200 pb-4">
                    <div>
                      <p className="text-body-sm text-warm-500 mb-1">Prospects Reached</p>
                      <p className="text-heading-2 font-serif text-warm-900">1,247</p>
                    </div>
                    <p className="text-body-sm gradient-text font-medium">14 days</p>
                  </div>
                  <div className="flex justify-between items-end border-b border-cream-200 pb-4">
                    <div>
                      <p className="text-body-sm text-warm-500 mb-1">Email Open Rate</p>
                      <p className="text-heading-2 font-serif text-warm-900">62%</p>
                    </div>
                    <p className="text-body-sm text-warm-400">Industry avg: 21%</p>
                  </div>
                  <div className="flex justify-between items-end border-b border-cream-200 pb-4">
                    <div>
                      <p className="text-body-sm text-warm-500 mb-1">Positive Replies</p>
                      <p className="text-heading-2 font-serif text-warm-900">43</p>
                    </div>
                    <p className="text-body-sm gradient-text font-medium">3.4% reply rate</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <p className="text-body-sm text-warm-500 mb-1">Meetings Booked</p>
                      <p className="text-heading-2 font-serif text-warm-900">18</p>
                    </div>
                    <p className="text-body-sm gradient-text font-medium">from cold outreach</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-serif text-heading-2 text-warm-900 mb-4">
                  A free pilot campaign.
                </h3>
                <p className="text-body text-warm-500 mb-6 leading-relaxed">
                  We'll run a small outbound campaign using our infrastructure —
                  targeting your ICP with personalized cold emails and LinkedIn
                  DMs. See the pipeline before you commit.
                </p>
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-body-sm text-warm-600">Real outreach to real prospects in your target market</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-body-sm text-warm-600">Multi-channel — cold email + LinkedIn in sync</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0" />
                    <p className="text-body-sm text-warm-600">Full transparency — you see every message we send</p>
                  </div>
                </div>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 gradient-btn font-medium px-6 py-3 rounded-full w-fit"
                >
                  Start free campaign
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-px">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
