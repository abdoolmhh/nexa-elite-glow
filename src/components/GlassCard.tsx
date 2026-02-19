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
      transform: `perspective(800px) rotateX(${(y - 0.5) * -4}deg) rotateY(${(x - 0.5) * 4}deg)`,
    });
  };

  const handleMouseLeave = () => setStyle({});

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-2xl border border-border bg-card p-6 transition-all duration-300 ease-out hover:shadow-lg hover:shadow-primary/5 ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default GlassCard;
