export function Footer() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 bg-warm-900 border-t border-warm-700/50">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-md bg-accent flex items-center justify-center">
              <span className="text-cream-50 font-serif font-medium text-xs">A</span>
            </div>
            <span className="font-serif text-lg text-cream-200 tracking-tight">
              Atom & Echo
            </span>
          </div>

          <div className="flex items-center gap-8">
            <a href="mailto:sijah@atomnecho.com" className="text-body-sm text-cream-400 hover:text-cream-200 transition-colors">
              sijah@atomnecho.com
            </a>
            <a href="https://www.linkedin.com/company/atomnecho" target="_blank" rel="noopener noreferrer" className="text-body-sm text-cream-400 hover:text-cream-200 transition-colors">
              LinkedIn
            </a>
          </div>

          <p className="text-xs text-cream-500">
            &copy; {new Date().getFullYear()} Atom & Echo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
