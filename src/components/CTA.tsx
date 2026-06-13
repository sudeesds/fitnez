export function CTA() {
  return (
    <section id="cta" className="section-padding gradient-bg">
      <div className="container-wide">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-heading-1 text-white mb-6">
            Ready to grow?
          </h2>
          <p className="text-body-lg text-blue-100/70 mb-10 leading-relaxed">
            Book a 30-minute call and we'll talk strategy — or skip the call
            and ask for a free sample. Either way, coffee's on us.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:sijah@atomnecho.com"
              className="inline-flex items-center gap-2 bg-white text-blue-900 font-medium px-8 py-4 rounded-full hover:bg-blue-50 transition-colors text-body"
            >
              Book a call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="mailto:sijah@atomnecho.com?subject=Free%20Sample%20Request"
              className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-blue-100 font-medium px-8 py-4 rounded-full hover:border-white/40 hover:text-white transition-colors text-body"
            >
              Ask for a free sample
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
