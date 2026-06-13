export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-body-sm text-accent font-medium tracking-wide uppercase mb-4">
            About us
          </p>
          <h2 className="font-serif text-heading-1 text-warm-900 mb-8">
            A small, sharp team in Bengaluru<span className="text-accent">.</span>
          </h2>
          <p className="text-body-lg text-warm-500 leading-relaxed mb-6">
            We're a focused crew of strategists, writers, and growth operators
            working out of Bengaluru — building LinkedIn presences and demand
            gen engines for founders across six countries and counting.
          </p>
          <p className="text-body text-warm-400 leading-relaxed">
            We keep the team small on purpose. Every client works directly
            with the people doing the work — no account managers, no layers,
            no telephone game. Just clear communication, fast execution, and
            results you can measure.
          </p>

          <div className="flex items-center justify-center gap-8 mt-14">
            <div className="text-center">
              <p className="font-serif text-heading-2 text-warm-900">6</p>
              <p className="text-body-sm text-warm-400 mt-1">Countries</p>
            </div>
            <div className="w-px h-10 bg-cream-400" />
            <div className="text-center">
              <p className="font-serif text-heading-2 text-warm-900">30+</p>
              <p className="text-body-sm text-warm-400 mt-1">Founders served</p>
            </div>
            <div className="w-px h-10 bg-cream-400" />
            <div className="text-center">
              <p className="font-serif text-heading-2 text-warm-900">2M+</p>
              <p className="text-body-sm text-warm-400 mt-1">Prospects reached</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
