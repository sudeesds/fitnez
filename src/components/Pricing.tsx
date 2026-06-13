import { useState, useMemo } from 'react';

const BRANDING_BASE = 750;
const BRANDING_PER_POST = 50;
const BRANDING_BASE_POSTS = 10;
const ENGAGEMENT_COST = 300;

const LEADGEN_BASE = 1500;
const LEADGEN_PER_1K = 200;
const LEADGEN_BASE_LEADS = 1000;

export function Pricing() {
  const [brandingEnabled, setBrandingEnabled] = useState(true);
  const [leadgenEnabled, setLeadgenEnabled] = useState(false);
  const [posts, setPosts] = useState(10);
  const [engagement, setEngagement] = useState(false);
  const [leads, setLeads] = useState(1000);

  const price = useMemo(() => {
    let total = 0;
    if (brandingEnabled) {
      total += BRANDING_BASE;
      if (posts > BRANDING_BASE_POSTS) total += (posts - BRANDING_BASE_POSTS) * BRANDING_PER_POST;
      if (engagement) total += ENGAGEMENT_COST;
    }
    if (leadgenEnabled) {
      total += LEADGEN_BASE;
      if (leads > LEADGEN_BASE_LEADS) total += ((leads - LEADGEN_BASE_LEADS) / 1000) * LEADGEN_PER_1K;
    }
    return total;
  }, [brandingEnabled, leadgenEnabled, posts, engagement, leads]);

  return (
    <section id="pricing" className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="max-w-2xl mb-16">
          <p className="text-body-sm font-medium tracking-wide uppercase mb-4 gradient-text">
            Transparent pricing
          </p>
          <h2 className="font-serif text-heading-1 text-warm-900 mb-6">
            Build your plan<span className="gradient-text">.</span>
          </h2>
          <p className="text-body-lg text-warm-500">
            No hidden fees, no &ldquo;contact us for pricing.&rdquo; Pick what you need,
            adjust the volume, and see your price instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Service toggles */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => setBrandingEnabled(!brandingEnabled)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all flex-1 ${
                  brandingEnabled
                    ? 'border-blue-500 bg-white shadow-sm'
                    : 'border-cream-300 bg-cream-100 opacity-60'
                }`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  brandingEnabled ? 'border-blue-500 bg-blue-500' : 'border-warm-300'
                }`}>
                  {brandingEnabled && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-body font-medium text-warm-900">LinkedIn Personal Branding</p>
                  <p className="text-xs text-warm-400">Content creation & profile optimization</p>
                </div>
              </button>

              <button
                onClick={() => setLeadgenEnabled(!leadgenEnabled)}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all flex-1 ${
                  leadgenEnabled
                    ? 'border-blue-500 bg-white shadow-sm'
                    : 'border-cream-300 bg-cream-100 opacity-60'
                }`}
              >
                <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                  leadgenEnabled ? 'border-blue-500 bg-blue-500' : 'border-warm-300'
                }`}>
                  {leadgenEnabled && (
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )}
                </div>
                <div className="text-left">
                  <p className="text-body font-medium text-warm-900">Demand Gen</p>
                  <p className="text-xs text-warm-400">Cold email & LinkedIn DM outreach</p>
                </div>
              </button>
            </div>

            {/* Branding config */}
            {brandingEnabled && (
              <div className="bg-white rounded-2xl p-8 border border-cream-300/60 shadow-sm space-y-8">
                <div>
                  <div className="flex justify-between items-baseline mb-4">
                    <label className="text-body font-medium text-warm-900">Posts per month</label>
                    <span className="font-serif text-heading-3 gradient-text">{posts}</span>
                  </div>
                  <input
                    type="range" min={10} max={20} value={posts}
                    onChange={(e) => setPosts(Number(e.target.value))}
                    className="slider-thumb w-full"
                  />
                  <div className="flex justify-between text-xs text-warm-400 mt-2">
                    <span>10 posts</span>
                    <span>20 posts</span>
                  </div>
                </div>

                <div className="border-t border-cream-200 pt-6">
                  <button onClick={() => setEngagement(!engagement)} className="flex items-center gap-3 group">
                    <div className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
                      engagement ? 'border-blue-500 bg-blue-500' : 'border-warm-300 group-hover:border-warm-400'
                    }`}>
                      {engagement && (
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M2 6l3 3 5-5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                    <div className="text-left">
                      <p className="text-body font-medium text-warm-800">Add engagement management</p>
                      <p className="text-body-sm text-warm-400">
                        We reply to comments, engage with your network, and grow your reach — +${ENGAGEMENT_COST}/mo
                      </p>
                    </div>
                  </button>
                </div>
              </div>
            )}

            {/* Leadgen config */}
            {leadgenEnabled && (
              <div className="bg-white rounded-2xl p-8 border border-cream-300/60 shadow-sm">
                <div className="flex justify-between items-baseline mb-4">
                  <label className="text-body font-medium text-warm-900">Prospects reached per month</label>
                  <span className="font-serif text-heading-3 gradient-text">{leads.toLocaleString()}</span>
                </div>
                <input
                  type="range" min={1000} max={20000} step={1000} value={leads}
                  onChange={(e) => setLeads(Number(e.target.value))}
                  className="slider-thumb w-full"
                />
                <div className="flex justify-between text-xs text-warm-400 mt-2">
                  <span>1,000</span>
                  <span>20,000</span>
                </div>
              </div>
            )}
          </div>

          {/* Price card */}
          <div className="lg:sticky lg:top-28">
            <div className="gradient-bg text-white rounded-2xl p-8">
              <p className="text-body-sm text-blue-200 uppercase tracking-wide mb-2">Your monthly investment</p>
              <div className="flex items-baseline gap-1 mb-8">
                <span className="font-serif text-display text-white">${price.toLocaleString()}</span>
                <span className="text-body-sm text-blue-200">/mo</span>
              </div>

              <div className="space-y-3 mb-8 border-t border-white/10 pt-6">
                {brandingEnabled && (
                  <>
                    <div className="flex justify-between text-body-sm">
                      <span className="text-blue-100/70">Personal Branding ({posts} posts)</span>
                      <span className="text-white">
                        ${(BRANDING_BASE + Math.max(0, posts - BRANDING_BASE_POSTS) * BRANDING_PER_POST).toLocaleString()}
                      </span>
                    </div>
                    {engagement && (
                      <div className="flex justify-between text-body-sm">
                        <span className="text-blue-100/70">Engagement management</span>
                        <span className="text-white">${ENGAGEMENT_COST}</span>
                      </div>
                    )}
                  </>
                )}
                {leadgenEnabled && (
                  <div className="flex justify-between text-body-sm">
                    <span className="text-blue-100/70">Demand Gen ({leads.toLocaleString()} leads)</span>
                    <span className="text-white">
                      ${(LEADGEN_BASE + Math.max(0, (leads - LEADGEN_BASE_LEADS) / 1000) * LEADGEN_PER_1K).toLocaleString()}
                    </span>
                  </div>
                )}
                {!brandingEnabled && !leadgenEnabled && (
                  <p className="text-body-sm text-blue-200/60 italic">Select a service to see pricing</p>
                )}
              </div>

              <a
                href="#cta"
                className="block w-full text-center bg-white text-blue-900 font-medium py-3.5 rounded-full hover:bg-blue-50 transition-colors"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
