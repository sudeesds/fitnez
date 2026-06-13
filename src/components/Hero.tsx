export function Hero() {
  return (
    <section className="section-padding pt-36 md:pt-44 pb-20 md:pb-28">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Left — The Big Idea */}
          <div>
            <p className="text-body-sm text-accent font-medium tracking-wide uppercase mb-6">
              The future of B2B marketing
            </p>
            <h1 className="font-serif text-display text-warm-900 mb-8">
              Founder-led growth<span className="text-accent">.</span>
            </h1>
            <p className="text-body-lg text-warm-600 max-w-lg leading-relaxed">
              The era of faceless brands is over. Your prospects want to hear
              from <em className="font-serif text-warm-800 not-italic">you</em> — the
              founder, the expert, the human behind the company. That's the
              unfair advantage waiting to be unlocked.
            </p>
          </div>

          {/* Right — What We Actually Do */}
          <div className="md:pt-16">
            <div className="border-l-2 border-cream-400 pl-8 space-y-10">
              <div>
                <h3 className="font-serif text-heading-3 text-warm-900 mb-3">
                  Personal Branding
                </h3>
                <p className="text-body text-warm-500 leading-relaxed">
                  We build your LinkedIn presence so that when prospects search
                  your name, they find thought leadership, trust signals, and a
                  reason to reply to your message.
                </p>
              </div>
              <div className="w-12 h-px bg-cream-400" />
              <div>
                <h3 className="font-serif text-heading-3 text-warm-900 mb-3">
                  Lead Generation
                </h3>
                <p className="text-body text-warm-500 leading-relaxed">
                  Cold emails and LinkedIn DMs that actually get replies — because
                  your prospects already know who you are before we reach out.
                </p>
              </div>
            </div>

            <p className="mt-12 text-body text-warm-400 italic font-serif">
              Isn't it better when your prospects already know you — or find
              great things about you when they look you up?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
