import { useRef, useState } from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

const GlassCard = ({ children, className = '' }: GlassCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setStyle({
      transform: `perspective(800px) rotateX(${(y - 0.5) * -8}deg) rotateY(${(x - 0.5) * 8}deg)`,
      background: `radial-gradient(circle at ${x * 100}% ${y * 100}%, hsl(158 80% 50% / 0.08), transparent 60%), hsl(158 35% 9% / 0.6)`,
    });
  };

  const handleMouseLeave = () => setStyle({});

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-panel p-6 transition-all duration-300 ease-out ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
