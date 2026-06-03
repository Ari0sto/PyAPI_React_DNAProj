export default function DnaSpiral() {
  return (
    <svg viewBox="0 0 800 1360" preserveAspectRatio="none" style={{ width: '100%', height: '100%', display: 'block' }}>
      <defs>
        <linearGradient id="front" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6fe9ff"/>
          <stop offset="50%" stopColor="#c9ffff"/>
          <stop offset="100%" stopColor="#4acfff"/>
        </linearGradient>
        <linearGradient id="back" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#3fa3d1"/>
          <stop offset="50%" stopColor="#75dfff"/>
          <stop offset="100%" stopColor="#3fa3d1"/>
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="12" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <g stroke="url(#back)" strokeWidth="42" strokeLinecap="round" fill="none" opacity="0.35">
        <path d="M310 0 C500 120 500 220 310 340" />
        <path d="M490 340 C300 460 300 560 490 680" />
        <path d="M310 680 C500 800 500 900 310 1020" />
        <path d="M490 1020 C300 1140 300 1240 490 1360" />
      </g>

      <g stroke="url(#front)" strokeWidth="48" strokeLinecap="round" fill="none" filter="url(#glow)">
        <path d="M490 0 C300 120 300 220 490 340" />
        <path d="M310 340 C500 460 500 560 310 680" />
        <path d="M490 680 C300 800 300 900 490 1020" />
        <path d="M310 1020 C500 1140 500 1240 310 1360" />
      </g>

      <g stroke="#bffcff" strokeWidth="10" strokeLinecap="round">
        <line x1="340" y1="80" x2="460" y2="80"/><line x1="290" y1="150" x2="510" y2="150"/>
        <line x1="260" y1="230" x2="540" y2="230"/><line x1="300" y1="300" x2="500" y2="300"/>
        <line x1="500" y1="420" x2="300" y2="420"/><line x1="540" y1="500" x2="260" y2="500"/>
        <line x1="510" y1="580" x2="290" y2="580"/><line x1="460" y1="650" x2="340" y2="650"/>
        <line x1="340" y1="760" x2="460" y2="760"/><line x1="290" y1="840" x2="510" y2="840"/>
        <line x1="260" y1="920" x2="540" y2="920"/><line x1="300" y1="990" x2="500" y2="990"/>
        <line x1="500" y1="1100" x2="300" y2="1100"/><line x1="540" y1="1180" x2="260" y2="1180"/>
        <line x1="510" y1="1260" x2="290" y2="1260"/><line x1="460" y1="1330" x2="340" y2="1330"/>
      </g>

      <g fill="#ffffff" opacity="0.55">
        <ellipse cx="490" cy="340" rx="28" ry="18" />
        <ellipse cx="310" cy="680" rx="28" ry="18" />
        <ellipse cx="490" cy="1020" rx="28" ry="18" />
      </g>
    </svg>
  );
}