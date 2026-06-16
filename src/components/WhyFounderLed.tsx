export function WhyFounderLed() {
  return (
    <section id="why" className="section-padding bg-cream-50">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-body-sm font-medium tracking-wide uppercase mb-4 gradient-text">
            Why founder-led growth
          </p>
          <h2 className="font-serif text-heading-1 text-warm-900 mb-6">
            Neither works alone<span className="gradient-text">.</span><br />
            Together, they compound.
          </h2>
          <p className="text-body-lg text-warm-500">
            Most founders pick one lane. Here's what actually happens.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {/* Column 1: Only Personal Branding */}
          <div className="bg-white rounded-2xl border border-cream-300/60 p-8 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-medium tracking-wide uppercase text-warm-400 mb-2">
                Only Personal Branding
              </p>
              <div className="h-1 w-full rounded-full bg-amber-400/60" />
            </div>

            <div className="bg-cream-50 rounded-xl p-5 mb-6 border border-cream-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-body-sm font-medium text-warm-800">LinkedIn Content</span>
                <span className="text-xs font-medium text-amber-600">Active</span>
              </div>
              <p className="text-xs text-warm-400">Posts going out, impressions growing</p>
            </div>

            <div className="bg-cream-50 rounded-xl p-5 mb-6 border border-cream-200 opacity-50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-body-sm font-medium text-warm-500">Outbound</span>
                <span className="text-xs text-warm-400">Not set up</span>
              </div>
              <p className="text-xs text-warm-400">No cold email or LinkedIn DMs</p>
            </div>

            <div className="bg-amber-50 rounded-lg px-4 py-3 border border-amber-200/60 mb-8">
              <p className="text-xs text-amber-700 font-medium">
                Visibility without pipeline
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Great content, but no one's reaching out to prospects</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Followers grow, but pipeline doesn't</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Waiting for inbound that may never come</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Vanity metrics — likes don't pay bills</p>
              </div>
            </div>
          </div>

          {/* Column 2: Only Outbound */}
          <div className="bg-white rounded-2xl border border-cream-300/60 p-8 shadow-sm">
            <div className="mb-6">
              <p className="text-xs font-medium tracking-wide uppercase text-warm-400 mb-2">
                Only Outbound
              </p>
              <div className="h-1 w-full rounded-full bg-red-400/60" />
            </div>

            <div className="bg-cream-50 rounded-xl p-5 mb-6 border border-cream-200 opacity-50">
              <div className="flex items-center justify-between mb-1">
                <span className="text-body-sm font-medium text-warm-500">LinkedIn Content</span>
                <span className="text-xs text-warm-400">Not set up</span>
              </div>
              <p className="text-xs text-warm-400">No personal brand presence</p>
            </div>

            <div className="bg-cream-50 rounded-xl p-5 mb-6 border border-cream-200">
              <div className="flex items-center justify-between mb-1">
                <span className="text-body-sm font-medium text-warm-800">Outbound</span>
                <span className="text-xs font-medium text-red-500">High risk</span>
              </div>
              <p className="text-xs text-warm-400">Cold email + DMs running blind</p>
            </div>

            <div className="bg-red-50 rounded-lg px-4 py-3 border border-red-200/60 mb-8">
              <p className="text-xs text-red-700 font-medium">
                Pipeline without trust — low conversion
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Cold messages from a complete stranger</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Prospects Google you — find nothing</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Low reply rates, easy to ignore</p>
              </div>
              <div className="flex items-start gap-3">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                  <path d="M4 4l8 8M12 4l-8 8" stroke="#9B9289" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
                <p className="text-body-sm text-warm-500">Burns domains and profiles over time</p>
              </div>
            </div>
          </div>

          {/* Column 3: Both Together */}
          <div className="gradient-bg rounded-2xl p-8 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
            <div className="relative">
              <div className="mb-6">
                <p className="text-xs font-medium tracking-wide uppercase text-blue-200 mb-2">
                  Founder-Led Growth
                </p>
                <div className="h-1 w-full rounded-full bg-gradient-to-r from-blue-400 to-blue-300" />
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-3 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-body-sm font-medium text-white">LinkedIn Content</span>
                  <span className="text-xs font-medium text-blue-300">Active</span>
                </div>
                <p className="text-xs text-blue-100/60">Building authority & trust daily</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 mb-6 border border-white/10">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-body-sm font-medium text-white">Outbound</span>
                  <span className="text-xs font-medium text-blue-300">Active</span>
                </div>
                <p className="text-xs text-blue-100/60">Warm outreach to primed prospects</p>
              </div>

              <div className="bg-blue-400/15 rounded-lg px-4 py-3 border border-blue-400/20 mb-8">
                <div className="flex items-center gap-2">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7.5l3 3 7-7" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-xs text-blue-200 font-medium">
                    Both channels live — compounding results
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <path d="M3 8.5l3 3 7-7" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-body-sm text-blue-100/80">Prospects already know you before the first DM</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <path d="M3 8.5l3 3 7-7" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-body-sm text-blue-100/80">Content warms up every cold lead automatically</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <path d="M3 8.5l3 3 7-7" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-body-sm text-blue-100/80">2-3x higher reply rates vs cold-only outreach</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5 shrink-0">
                    <path d="M3 8.5l3 3 7-7" stroke="#93C5FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <p className="text-body-sm text-blue-100/80">Brand + pipeline = compounding growth engine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
