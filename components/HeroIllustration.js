export default function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 240 220"
      className="w-44 sm:w-56 md:w-64 h-auto shrink-0"
      role="img"
      aria-label="সবজির ঝুড়ি"
    >
      <ellipse cx="120" cy="208" rx="88" ry="9" fill="#d7ddd5" />

      <circle cx="95" cy="72" r="38" fill="#ef4444" />
      <ellipse
        cx="82"
        cy="58"
        rx="8"
        ry="14"
        fill="#fca5a5"
        transform="rotate(-20 82 58)"
      />
      <path
        d="M95 34 C95 22 104 14 117 10"
        stroke="#16a34a"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      <circle cx="150" cy="62" r="42" fill="#22c55e" />
      <ellipse
        cx="136"
        cy="46"
        rx="8"
        ry="14"
        fill="#86efac"
        transform="rotate(-20 136 46)"
      />
      <path
        d="M150 21 C150 12 142 6 133 4"
        stroke="#15803d"
        strokeWidth="5"
        fill="none"
        strokeLinecap="round"
      />

      <circle cx="62" cy="110" r="22" fill="#a855f7" />
      <circle cx="116" cy="106" r="20" fill="#f97316" />
      <circle cx="182" cy="102" r="22" fill="#f59e0b" />

      <path
        d="M38 120 H202 L186 198 Q184 206 176 206 H64 Q56 206 54 198 Z"
        fill="#9a4a14"
      />
      <g stroke="#6b2f0a" strokeWidth="4" strokeLinecap="round">
        <line x1="78" y1="132" x2="84" y2="200" />
        <line x1="104" y1="132" x2="106" y2="200" />
        <line x1="130" y1="132" x2="130" y2="200" />
        <line x1="156" y1="132" x2="154" y2="200" />
        <line x1="182" y1="132" x2="176" y2="200" />
      </g>
      <rect x="32" y="114" width="176" height="16" rx="5" fill="#7c3a0e" />
    </svg>
  );
}
