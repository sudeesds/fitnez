export const clientDots: Record<string, { x: number; y: number }> = {
  US: { x: 195, y: 160 },
  UK: { x: 460, y: 115 },
  DE: { x: 495, y: 125 },
  AE: { x: 575, y: 190 },
  IN: { x: 630, y: 195 },
  AU: { x: 775, y: 335 },
};

interface DotMapProps {
  activeCountry: string;
  countries: string[];
  onSelect: (code: string) => void;
}

export function WorldDotMap({ activeCountry, countries, onSelect }: DotMapProps) {
  const activeLoc = clientDots[activeCountry];

  return (
    <svg viewBox="0 0 960 480" className="w-full" aria-label="World map showing client locations">
      <defs>
        {/* Dot pattern that creates the stippled look */}
        <pattern id="dotPattern" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="4" cy="4" r="1.3" fill="#B8AFA6" opacity="0.55" />
        </pattern>

        <linearGradient id="activeDotGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1D4ED8" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        <filter id="dotGlow">
          <feGaussianBlur stdDeviation="2.5" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Continents filled with dot pattern */}
      <g fill="url(#dotPattern)">
        {/* North America */}
        <path d="M40,60 L55,55 L75,50 L100,42 L120,40 L140,38 L160,40 L180,45 L195,50 L210,48 L220,50 L235,55 L245,52 L250,55 L255,60 L248,68 L242,75 L238,82 L235,90 L240,95 L242,102 L238,110 L232,118 L228,125 L222,132 L218,138 L212,142 L208,148 L202,155 L195,162 L188,168 L180,172 L172,178 L165,182 L158,185 L150,188 L142,185 L135,180 L128,175 L120,172 L115,168 L108,165 L105,170 L100,175 L92,172 L85,168 L78,162 L72,155 L65,148 L60,140 L55,130 L50,118 L48,108 L45,98 L42,88 L40,78 L38,68 Z" />
        {/* Greenland */}
        <path d="M285,28 L300,22 L320,20 L340,22 L355,28 L365,38 L368,48 L362,58 L350,62 L335,65 L318,62 L305,58 L295,50 L288,40 Z" />
        {/* Central America & Caribbean */}
        <path d="M145,188 L152,192 L158,198 L165,202 L170,208 L172,215 L168,220 L162,225 L155,222 L148,218 L142,212 L138,205 L135,198 L138,192 Z" />
        {/* South America */}
        <path d="M175,225 L185,220 L198,218 L210,220 L222,225 L232,232 L238,242 L242,255 L245,268 L242,282 L238,295 L232,308 L225,318 L218,328 L210,338 L202,345 L195,350 L188,352 L182,348 L178,340 L175,328 L170,315 L168,302 L165,288 L163,275 L162,260 L163,248 L165,238 Z" />

        {/* Europe */}
        <path d="M435,50 L445,45 L458,42 L470,45 L482,48 L495,50 L505,52 L518,55 L528,58 L535,62 L540,68 L538,75 L535,82 L530,88 L525,95 L518,102 L512,108 L505,115 L498,120 L490,125 L482,128 L472,130 L462,128 L455,125 L448,120 L442,115 L438,108 L435,100 L432,92 L430,82 L428,72 L430,62 Z" />
        {/* British Isles */}
        <path d="M440,68 L448,62 L455,65 L458,72 L455,80 L448,85 L442,82 L438,75 Z" />
        <path d="M432,72 L438,68 L440,72 L438,78 L434,78 Z" />
        {/* Scandinavia */}
        <path d="M478,25 L488,20 L498,22 L508,28 L515,35 L518,42 L515,50 L510,55 L505,50 L498,45 L492,40 L485,35 L480,30 Z" />
        {/* Iceland */}
        <path d="M400,42 L412,38 L420,42 L418,50 L410,52 L402,48 Z" />

        {/* Africa */}
        <path d="M448,142 L458,138 L470,135 L482,132 L495,132 L508,135 L520,140 L532,148 L542,158 L548,168 L552,180 L555,192 L555,205 L552,218 L548,232 L542,245 L535,258 L525,270 L515,280 L505,288 L495,292 L485,290 L475,285 L465,278 L458,268 L452,258 L448,245 L445,232 L442,218 L440,205 L438,190 L438,178 L440,165 L442,155 Z" />

        {/* Middle East */}
        <path d="M540,118 L552,112 L565,115 L578,120 L588,128 L595,138 L598,148 L596,160 L590,170 L582,178 L572,182 L562,178 L552,172 L545,165 L538,155 L535,145 L535,132 Z" />
        {/* Arabian Peninsula */}
        <path d="M548,168 L558,165 L568,170 L575,178 L578,188 L575,198 L568,205 L558,208 L550,202 L545,192 L542,182 L545,175 Z" />

        {/* India & South Asia */}
        <path d="M598,130 L612,122 L625,118 L638,122 L648,130 L655,140 L658,152 L655,165 L648,178 L640,190 L630,200 L618,208 L608,210 L600,205 L595,195 L590,182 L588,170 L590,158 L592,145 Z" />
        {/* Sri Lanka */}
        <path d="M625,215 L632,212 L635,218 L632,225 L628,222 Z" />

        {/* Southeast Asia */}
        <path d="M660,145 L672,138 L685,142 L695,150 L700,162 L698,172 L690,180 L680,182 L670,178 L662,170 L658,158 Z" />
        {/* Malay Peninsula */}
        <path d="M672,182 L678,180 L682,188 L680,198 L675,205 L670,200 L668,192 Z" />

        {/* China / East Asia */}
        <path d="M650,72 L665,65 L680,60 L698,58 L715,62 L730,68 L742,75 L750,85 L752,95 L748,105 L740,115 L730,122 L718,128 L705,132 L692,130 L680,125 L668,118 L658,110 L652,100 L648,88 Z" />
        {/* Korea */}
        <path d="M740,92 L748,88 L752,95 L750,105 L745,108 L740,102 Z" />
        {/* Japan */}
        <path d="M758,78 L765,72 L770,78 L772,88 L770,98 L765,108 L760,112 L755,105 L755,95 L756,85 Z" />
        {/* Taiwan */}
        <path d="M728,138 L735,135 L738,142 L735,148 L730,145 Z" />

        {/* Indonesia / Philippines */}
        <path d="M678,208 L692,202 L708,205 L722,210 L735,215 L742,222 L738,228 L725,230 L710,228 L695,225 L682,220 Z" />
        <path d="M720,168 L728,165 L732,172 L728,180 L722,178 Z" />
        {/* Papua New Guinea */}
        <path d="M748,218 L758,215 L768,218 L772,225 L768,232 L758,232 L750,228 Z" />

        {/* Australia */}
        <path d="M718,282 L735,272 L752,268 L770,270 L785,275 L798,282 L808,295 L812,308 L808,322 L800,335 L788,342 L772,348 L755,350 L740,348 L728,342 L718,332 L712,318 L710,305 L712,292 Z" />
        {/* Tasmania */}
        <path d="M790,352 L798,350 L802,355 L798,362 L792,360 Z" />

        {/* New Zealand */}
        <path d="M845,342 L850,338 L855,342 L855,352 L850,358 L845,355 Z" />
        <path d="M848,360 L855,358 L858,365 L855,372 L850,370 Z" />

        {/* Russia / Northern Asia */}
        <path d="M535,25 L555,18 L580,15 L608,15 L635,18 L660,22 L680,28 L700,32 L720,35 L740,38 L755,42 L768,48 L775,55 L770,62 L760,60 L745,58 L728,55 L710,52 L692,50 L675,52 L660,58 L648,65 L638,60 L625,55 L608,50 L590,48 L572,45 L555,40 L540,35 Z" />
      </g>

      {/* Client location markers */}
      {countries.map((code) => {
        const loc = clientDots[code];
        if (!loc) return null;
        const isActive = activeCountry === code;

        return (
          <g key={code} onClick={() => onSelect(code)} className="cursor-pointer">
            {isActive && (
              <>
                <circle cx={loc.x} cy={loc.y} r="18" fill="none" stroke="#3B82F6" strokeWidth="0.8" opacity="0.12">
                  <animate attributeName="r" from="8" to="24" dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
                </circle>
                <circle cx={loc.x} cy={loc.y} r="10" fill="#3B82F6" opacity="0.06" />
              </>
            )}
            <circle
              cx={loc.x}
              cy={loc.y}
              r={isActive ? 5 : 3}
              fill={isActive ? 'url(#activeDotGrad)' : '#7A726B'}
              filter={isActive ? 'url(#dotGlow)' : undefined}
              className="transition-all duration-300"
            />
          </g>
        );
      })}

      {/* Connecting dashed line */}
      {activeLoc && (
        <line
          x1={activeLoc.x + 8}
          y1={activeLoc.y}
          x2={960}
          y2={activeLoc.y}
          stroke="#3B82F6"
          strokeWidth="0.5"
          strokeDasharray="2,6"
          opacity="0.2"
          className="transition-all duration-500"
        />
      )}
    </svg>
  );
}
