import { useEffect } from 'react';
import gsap from 'gsap';

export default function Background() {
  useEffect(() => {
    // Анимация формул
    gsap.to('.formula', {
      x: 'random(-20, 20)',
      y: 'random(-20, 20)',
      opacity: 'random(0.05, 0.2)',
      duration: 'random(4, 8)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      stagger: 0.2
    });

    // Анимация частиц 
    gsap.to('.particle', {
      y: 'random(-30, 30)',
      x: 'random(-30, 30)',
      opacity: 'random(0.3, 1)',
      duration: 'random(3, 6)',
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    });
  }, []);

  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 0, overflow: 'hidden' }}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" style={{ width: '100%', height: '100%' }}>
        <defs>
          <radialGradient id="bg1" cx="50%" cy="50%" r="80%">
            <stop offset="0%" stopColor="#123f7c" />
            <stop offset="45%" stopColor="#07162f" />
            <stop offset="100%" stopColor="#01040d" />
          </radialGradient>
          <radialGradient id="glow1"><stop offset="0%" stopColor="#35d6ff" /><stop offset="100%" stopColor="transparent" /></radialGradient>
          <radialGradient id="glow2"><stop offset="0%" stopColor="#2d6cff" /><stop offset="100%" stopColor="transparent" /></radialGradient>
          <filter id="blur150"><feGaussianBlur stdDeviation="150" /></filter>
        </defs>

        {/* Заливка, сферы и сетка */}
        <rect width="1920" height="1080" fill="url(#bg1)" />
        <circle cx="450" cy="350" r="250" fill="url(#glow1)" filter="url(#blur150)" opacity=".6" />
        <circle cx="1450" cy="700" r="320" fill="url(#glow2)" filter="url(#blur150)" opacity=".4" />
        
        <g opacity=".05" stroke="#7fe8ff">
          {[...Array(11)].map((_, i) => <path key={`h-${i}`} d={`M0 ${i * 100} H1920`} />)}
          {[...Array(18)].map((_, i) => <path key={`v-${i}`} d={`M${i * 100 + 100} 0 V1080`} />)}
        </g>

        {/* Частицы */}
        <g fill="#cfffff">
          <circle className="particle" cx="110" cy="120" r="2"/>
          <circle className="particle" cx="230" cy="350" r="1"/>
          <circle className="particle" cx="420" cy="900" r="2"/>
          <circle className="particle" cx="530" cy="500" r="1.5"/>
          <circle className="particle" cx="720" cy="300" r="2"/>
          <circle className="particle" cx="1100" cy="700" r="2"/>
          <circle className="particle" cx="1380" cy="520" r="2"/>
          <circle className="particle" cx="1700" cy="850" r="2"/>
        </g>

        <g fill="#8cefff" opacity=".06" fontSize="58" fontFamily="Arial">
          <text className="formula" x="120" y="200">E = mc²</text>
          <text className="formula" x="900" y="180">F = ma</text>
          <text className="formula" x="1400" y="320">λ = h/p</text>
          <text className="formula" x="250" y="600">ΔxΔp ≥ ħ/2</text>
          <text className="formula" x="950" y="780">ψ(x,t)</text>
          <text className="formula" x="1450" y="920">∇²φ = 0</text>
          <text className="formula" x="300" y="950">PV = nRT</text>
        </g>

        {/* Лучи и круги */}
        <g opacity=".08">
          <path d="M-200 0 L700 1080" stroke="#69dfff" strokeWidth="6" />
          <path d="M200 0 L1100 1080" stroke="#69dfff" strokeWidth="4" />
          <path d="M1000 0 L1900 1080" stroke="#69dfff" strokeWidth="5" />
        </g>
        <g stroke="#7be8ff" fill="none" opacity=".08">
          <circle cx="1550" cy="250" r="180"/><circle cx="1550" cy="250" r="250"/>
          <circle cx="300" cy="850" r="220"/><circle cx="300" cy="850" r="300"/>
        </g>
      </svg>
    </div>
  );
}