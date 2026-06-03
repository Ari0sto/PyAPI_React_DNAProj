import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import DnaSpiral from './DnaSpiral';

export default function LeftCanvas({ scientists, activeScientistId, onScientistSelect }) {
  const scrollContainerRef = useRef(null);
  const tweenRef = useRef(null);

  useEffect(() => {
    if (scientists.length === 0) return;

    tweenRef.current = gsap.to(scrollContainerRef.current, {
      yPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1
    });

    return () => {
      if (tweenRef.current) tweenRef.current.kill();
    };
  }, [scientists]);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.resume();

  const renderScientistsBlock = () => (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      justifyContent: 'space-around', 
      height: '100vh',
      width: '100%' 
    }}>
      {scientists.map((s, index) => {
        const isLeft = index % 2 === 0; // Зигзаг
        const isHovered = activeScientistId === s.id;

        return (
          <div
            key={s.id}
            onClick={() => onScientistSelect(s.id)}
            style={{
              width: '90px',
              height: '90px',
              borderRadius: '50%',
              border: `3px solid ${isHovered ? '#ffffff' : '#35d6ff'}`,
              boxShadow: isHovered ? '0 0 25px #35d6ff, inset 0 0 10px #35d6ff' : '0 0 10px rgba(53, 214, 255, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              transform: `scale(${isHovered ? 1.15 : 1}) translateX(${isLeft ? '-60px' : '60px'})`,
              overflow: 'hidden',
              position: 'relative',
              backgroundColor: '#07162f',
              margin: '0 auto'
            }}
          >
            <img 
              src={`/images/${s.id}.jpg`} 
              alt={s.name}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: isHovered ? 1 : 0.6,
                transition: 'opacity 0.3s ease'
              }}
            />
          </div>
        );
      })}
    </div>
  );

  return (
    <div style={{ flex: 1, position: 'relative', borderRight: '1px solid rgba(18, 63, 124, 0.5)', overflow: 'hidden' }}>
      
      <div 
        ref={scrollContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          width: '100%',
        }}
      >
        {/* ФОНОВЫЙ СЛОЙ: 2 Спирали, которые стыкуются */}
        <div style={{ 
          position: 'absolute', 
          top: 0, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          width: '400px',
          height: '100%', 
          zIndex: 1, 
          opacity: 0.8,
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ flex: 1 }}><DnaSpiral /></div>
          <div style={{ flex: 1 }}><DnaSpiral /></div>
        </div>

        {/* ИНТЕРАКТИВНЫЙ СЛОЙ: 2 Блока ученых (Оригинал + Клон) */}
        <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          {renderScientistsBlock()}
          {renderScientistsBlock()}
        </div>
      </div>

    </div>
  );
}