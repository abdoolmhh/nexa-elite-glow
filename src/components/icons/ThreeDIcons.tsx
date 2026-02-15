interface IconProps {
  className?: string;
}

export const POSTerminal = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="pos-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a3d2e" />
        <stop offset="100%" stopColor="#0d1f17" />
      </linearGradient>
      <linearGradient id="pos-screen" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a5c3e" />
        <stop offset="100%" stopColor="#0d2e1f" />
      </linearGradient>
      <filter id="pos-glow"><feGaussianBlur stdDeviation="3" /></filter>
    </defs>
    <rect x="25" y="18" width="70" height="88" rx="10" fill="url(#pos-body)" />
    <rect x="25" y="18" width="70" height="88" rx="10" fill="none" stroke="#1EE39A" strokeWidth="0.7" opacity="0.3" />
    <rect x="32" y="25" width="56" height="35" rx="5" fill="url(#pos-screen)" />
    <rect x="32" y="25" width="56" height="14" rx="5" fill="white" fillOpacity="0.04" />
    <line x1="38" y1="34" x2="60" y2="34" stroke="#1EE39A" strokeWidth="1.5" opacity="0.5" />
    <line x1="38" y1="40" x2="75" y2="40" stroke="#1EE39A" strokeWidth="1" opacity="0.3" />
    <line x1="38" y1="46" x2="65" y2="46" stroke="#1EE39A" strokeWidth="1" opacity="0.3" />
    <line x1="38" y1="52" x2="70" y2="52" stroke="#1EE39A" strokeWidth="1" opacity="0.2" />
    {[0,1,2].map(row => [0,1,2].map(col => (
      <circle key={`p${row}${col}`} cx={42 + col * 18} cy={72 + row * 12} r="4" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" strokeOpacity="0.3" />
    )))}
    <rect x="40" y="2" width="28" height="22" rx="3" fill="#d4e8dc" opacity="0.85" />
    <line x1="45" y1="8" x2="63" y2="8" stroke="#1a5c3e" strokeWidth="1.2" opacity="0.5" />
    <line x1="45" y1="12" x2="58" y2="12" stroke="#1a5c3e" strokeWidth="1" opacity="0.4" />
    <line x1="45" y1="16" x2="55" y2="16" stroke="#1a5c3e" strokeWidth="1" opacity="0.3" />
    <rect x="25" y="18" width="70" height="88" rx="10" fill="none" stroke="#1EE39A" strokeWidth="1.5" opacity="0.1" filter="url(#pos-glow)" />
  </svg>
);

export const BarcodeScanner = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="scan-body" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a3d2e" />
        <stop offset="100%" stopColor="#0d1f17" />
      </linearGradient>
      <filter id="scan-glow"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
    <rect x="15" y="35" width="55" height="65" rx="8" fill="url(#scan-body)" />
    <rect x="15" y="35" width="55" height="65" rx="8" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <rect x="30" y="10" width="25" height="30" rx="4" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    <line x1="42" y1="40" x2="42" y2="55" stroke="#1EE39A" strokeWidth="2" opacity="0.7" />
    <line x1="42" y1="40" x2="105" y2="40" stroke="#1EE39A" strokeWidth="1.5" opacity="0.4" strokeDasharray="3 2" />
    <rect x="22" y="60" width="40" height="5" rx="1" fill="#1EE39A" fillOpacity="0.15" />
    <rect x="70" y="25" width="35" height="50" rx="5" fill="#1a3d2e" stroke="#1EE39A" strokeWidth="0.5" opacity="0.6" />
    <rect x="75" y="30" width="25" height="15" rx="2" fill="#0d2e1f" />
    {[0,1,2,3,4,5,6].map(i => (
      <rect key={`b${i}`} x={77 + i * 3} y="50" width={i % 2 ? 1.5 : 2} height="18" fill="#1EE39A" opacity={0.2 + i * 0.05} />
    ))}
    <circle cx="42" cy="80" r="8" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    <rect x="15" y="35" width="55" height="65" rx="8" fill="none" stroke="#1EE39A" strokeWidth="1.5" opacity="0.08" filter="url(#scan-glow)" />
  </svg>
);

export const ShoppingBasket = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bsk-body" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a3d2e" />
        <stop offset="100%" stopColor="#0d1f17" />
      </linearGradient>
      <filter id="bsk-glow"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
    <path d="M20 50 L30 95 Q32 102 40 102 L80 102 Q88 102 90 95 L100 50 Z" fill="url(#bsk-body)" />
    <path d="M20 50 L30 95 Q32 102 40 102 L80 102 Q88 102 90 95 L100 50 Z" stroke="#1EE39A" strokeWidth="0.7" opacity="0.3" fill="none" />
    <path d="M35 50 L45 20 Q48 12 55 12 L65 12 Q72 12 75 20 L85 50" stroke="#1EE39A" strokeWidth="1.5" opacity="0.4" fill="none" />
    <line x1="15" y1="50" x2="105" y2="50" stroke="#1EE39A" strokeWidth="2" opacity="0.3" />
    <line x1="45" y1="58" x2="45" y2="92" stroke="#1EE39A" strokeWidth="1" opacity="0.2" />
    <line x1="60" y1="58" x2="60" y2="95" stroke="#1EE39A" strokeWidth="1" opacity="0.2" />
    <line x1="75" y1="58" x2="75" y2="92" stroke="#1EE39A" strokeWidth="1" opacity="0.2" />
    <rect x="72" y="30" width="22" height="14" rx="2" fill="#1EE39A" fillOpacity="0.15" stroke="#1EE39A" strokeWidth="0.5" opacity="0.5" />
    <text x="76" y="40" fontSize="7" fill="#1EE39A" fontFamily="Space Mono" opacity="0.7">₦450</text>
    <rect x="25" y="38" width="18" height="10" rx="2" fill="#1EE39A" fillOpacity="0.1" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    <text x="28" y="46" fontSize="5" fill="#1EE39A" fontFamily="Space Mono" opacity="0.6">₦99</text>
  </svg>
);

export const FloatingDashboard = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="dash-bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a3d2e" />
        <stop offset="100%" stopColor="#0d1f17" />
      </linearGradient>
      <filter id="dash-glow"><feGaussianBlur stdDeviation="3" /></filter>
    </defs>
    <rect x="10" y="20" width="100" height="70" rx="8" fill="url(#dash-bg)" />
    <rect x="10" y="20" width="100" height="70" rx="8" stroke="#1EE39A" strokeWidth="0.7" opacity="0.3" />
    <rect x="10" y="20" width="100" height="12" rx="8" fill="#142e22" />
    <circle cx="22" cy="26" r="2" fill="#1EE39A" opacity="0.5" />
    <circle cx="30" cy="26" r="2" fill="#1EE39A" opacity="0.3" />
    <circle cx="38" cy="26" r="2" fill="#1EE39A" opacity="0.2" />
    <rect x="16" y="38" width="28" height="18" rx="3" fill="#142e22" />
    <text x="19" y="46" fontSize="5" fill="#1EE39A" fontFamily="Space Mono" opacity="0.7">Revenue</text>
    <text x="19" y="53" fontSize="7" fill="#1EE39A" fontFamily="Space Mono" fontWeight="bold">₦2.4M</text>
    <rect x="48" y="38" width="28" height="18" rx="3" fill="#142e22" />
    <text x="51" y="46" fontSize="5" fill="#1EE39A" fontFamily="Space Mono" opacity="0.7">Orders</text>
    <text x="51" y="53" fontSize="7" fill="#1EE39A" fontFamily="Space Mono" fontWeight="bold">1,847</text>
    <rect x="80" y="38" width="26" height="18" rx="3" fill="#142e22" />
    <text x="83" y="46" fontSize="5" fill="#1EE39A" fontFamily="Space Mono" opacity="0.7">Stock</text>
    <text x="83" y="53" fontSize="7" fill="#1EE39A" fontFamily="Space Mono" fontWeight="bold">12.4K</text>
    <rect x="16" y="62" width="88" height="22" rx="3" fill="#142e22" />
    {[0,1,2,3,4,5,6,7,8].map(i => (
      <rect key={`db${i}`} x={22 + i * 9} y={82 - [14,18,12,20,16,22,15,19,17][i]} width="5" height={[14,18,12,20,16,22,15,19,17][i]} rx="1" fill="#1EE39A" opacity={0.3 + i * 0.04} />
    ))}
    <rect x="10" y="20" width="100" height="70" rx="8" fill="none" stroke="#1EE39A" strokeWidth="1.5" opacity="0.08" filter="url(#dash-glow)" />
    <ellipse cx="60" cy="100" rx="35" ry="5" fill="#1EE39A" opacity="0.05" />
  </svg>
);

export const AnalyticsOrb = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="orb-grad" cx="40%" cy="35%">
        <stop offset="0%" stopColor="#1a5c3e" />
        <stop offset="70%" stopColor="#0d2e1f" />
        <stop offset="100%" stopColor="#061a13" />
      </radialGradient>
      <filter id="orb-glow"><feGaussianBlur stdDeviation="4" /></filter>
    </defs>
    <circle cx="60" cy="55" r="42" fill="url(#orb-grad)" />
    <circle cx="60" cy="55" r="42" stroke="#1EE39A" strokeWidth="0.8" opacity="0.3" />
    <ellipse cx="60" cy="55" rx="42" ry="18" stroke="#1EE39A" strokeWidth="0.5" opacity="0.15" />
    <ellipse cx="60" cy="55" rx="30" ry="42" stroke="#1EE39A" strokeWidth="0.5" opacity="0.1" />
    <polyline points="28,65 38,50 48,58 58,42 68,52 78,38 88,48" stroke="#1EE39A" strokeWidth="1.5" opacity="0.6" fill="none" strokeLinecap="round" />
    <polyline points="30,72 42,62 52,68 62,55 72,60 82,50 90,56" stroke="#1EE39A" strokeWidth="1" opacity="0.3" fill="none" strokeLinecap="round" />
    <circle cx="48" cy="40" r="8" fill="white" fillOpacity="0.06" />
    <circle cx="60" cy="55" r="42" fill="none" stroke="#1EE39A" strokeWidth="2" opacity="0.06" filter="url(#orb-glow)" />
    <ellipse cx="60" cy="105" rx="30" ry="5" fill="#1EE39A" opacity="0.05" />
  </svg>
);

export const AIChipCore = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <radialGradient id="chip-core" cx="50%" cy="45%">
        <stop offset="0%" stopColor="#1EE39A" stopOpacity="0.3" />
        <stop offset="50%" stopColor="#0d2e1f" />
        <stop offset="100%" stopColor="#061a13" />
      </radialGradient>
      <filter id="chip-glow"><feGaussianBlur stdDeviation="4" /></filter>
    </defs>
    <rect x="30" y="30" width="60" height="60" rx="12" fill="url(#chip-core)" />
    <rect x="30" y="30" width="60" height="60" rx="12" stroke="#1EE39A" strokeWidth="1" opacity="0.5" />
    <rect x="42" y="42" width="36" height="36" rx="6" fill="#0d2e1f" stroke="#1EE39A" strokeWidth="0.8" opacity="0.6" />
    <text x="47" y="65" fontSize="12" fill="#1EE39A" fontFamily="Space Mono" fontWeight="bold" opacity="0.8">AI</text>
    {/* Pins */}
    {[0,1,2,3].map(i => (
      <g key={`cp${i}`}>
        <line x1={42 + i * 12} y1="30" x2={42 + i * 12} y2="18" stroke="#1EE39A" strokeWidth="2" opacity="0.3" />
        <line x1={42 + i * 12} y1="90" x2={42 + i * 12} y2="102" stroke="#1EE39A" strokeWidth="2" opacity="0.3" />
        <line x1="30" y1={42 + i * 12} x2="18" y2={42 + i * 12} stroke="#1EE39A" strokeWidth="2" opacity="0.3" />
        <line x1="90" y1={42 + i * 12} x2="102" y2={42 + i * 12} stroke="#1EE39A" strokeWidth="2" opacity="0.3" />
      </g>
    ))}
    <circle cx="60" cy="60" r="8" fill="#1EE39A" fillOpacity="0.1" />
    <circle cx="60" cy="60" r="4" fill="#1EE39A" fillOpacity="0.3" />
    <rect x="30" y="30" width="60" height="60" rx="12" fill="none" stroke="#1EE39A" strokeWidth="3" opacity="0.1" filter="url(#chip-glow)" />
  </svg>
);

export const WarehouseDiorama = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="wh-wall" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a3d2e" />
        <stop offset="100%" stopColor="#0d1f17" />
      </linearGradient>
    </defs>
    <rect x="10" y="30" width="100" height="70" rx="4" fill="url(#wh-wall)" />
    <rect x="10" y="30" width="100" height="70" rx="4" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <polygon points="10,30 60,8 110,30" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    {/* Shelves */}
    <line x1="20" y1="50" x2="55" y2="50" stroke="#1EE39A" strokeWidth="1" opacity="0.3" />
    <line x1="20" y1="68" x2="55" y2="68" stroke="#1EE39A" strokeWidth="1" opacity="0.3" />
    <line x1="20" y1="86" x2="55" y2="86" stroke="#1EE39A" strokeWidth="1" opacity="0.3" />
    {/* Boxes */}
    <rect x="22" y="40" width="10" height="10" rx="1" fill="#1EE39A" fillOpacity="0.15" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    <rect x="34" y="42" width="8" height="8" rx="1" fill="#1EE39A" fillOpacity="0.1" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <rect x="44" y="38" width="9" height="12" rx="1" fill="#1EE39A" fillOpacity="0.12" stroke="#1EE39A" strokeWidth="0.5" opacity="0.35" />
    <rect x="24" y="56" width="12" height="12" rx="1" fill="#1EE39A" fillOpacity="0.1" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <rect x="40" y="58" width="8" height="10" rx="1" fill="#1EE39A" fillOpacity="0.15" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    <rect x="22" y="76" width="14" height="10" rx="1" fill="#1EE39A" fillOpacity="0.12" stroke="#1EE39A" strokeWidth="0.5" opacity="0.35" />
    {/* Forklift hint */}
    <rect x="68" y="65" width="30" height="25" rx="3" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <rect x="72" y="55" width="5" height="10" fill="#1EE39A" fillOpacity="0.2" />
    <circle cx="74" cy="92" r="4" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
    <circle cx="92" cy="92" r="4" fill="#142e22" stroke="#1EE39A" strokeWidth="0.5" opacity="0.4" />
  </svg>
);

export const SecurityShield = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shd-body" x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0%" stopColor="#1a5c3e" />
        <stop offset="100%" stopColor="#0d1f17" />
      </linearGradient>
      <filter id="shd-glow"><feGaussianBlur stdDeviation="3" /></filter>
    </defs>
    <path d="M60 10 L95 28 Q98 30 98 34 L98 60 Q98 85 60 108 Q22 85 22 60 L22 34 Q22 30 25 28 Z" fill="url(#shd-body)" />
    <path d="M60 10 L95 28 Q98 30 98 34 L98 60 Q98 85 60 108 Q22 85 22 60 L22 34 Q22 30 25 28 Z" stroke="#1EE39A" strokeWidth="1" opacity="0.4" fill="none" />
    <path d="M60 22 L86 36 L86 58 Q86 78 60 96 Q34 78 34 58 L34 36 Z" fill="#142e22" opacity="0.5" />
    <polyline points="48,58 56,68 76,46" stroke="#1EE39A" strokeWidth="3" opacity="0.7" strokeLinecap="round" strokeLinejoin="round" />
    {/* Audit log */}
    <rect x="70" y="72" width="28" height="35" rx="3" fill="#1a3d2e" stroke="#1EE39A" strokeWidth="0.5" opacity="0.5" />
    <line x1="75" y1="80" x2="93" y2="80" stroke="#1EE39A" strokeWidth="1" opacity="0.3" />
    <line x1="75" y1="86" x2="90" y2="86" stroke="#1EE39A" strokeWidth="1" opacity="0.25" />
    <line x1="75" y1="92" x2="88" y2="92" stroke="#1EE39A" strokeWidth="1" opacity="0.2" />
    <line x1="75" y1="98" x2="91" y2="98" stroke="#1EE39A" strokeWidth="1" opacity="0.15" />
    <path d="M60 10 L95 28 Q98 30 98 34 L98 60 Q98 85 60 108 Q22 85 22 60 L22 34 Q22 30 25 28 Z" stroke="#1EE39A" strokeWidth="2" opacity="0.08" fill="none" filter="url(#shd-glow)" />
  </svg>
);

export const CustomerCluster = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="cust-glow"><feGaussianBlur stdDeviation="2" /></filter>
    </defs>
    {/* Center person */}
    <circle cx="60" cy="40" r="12" fill="#1a3d2e" stroke="#1EE39A" strokeWidth="0.8" opacity="0.5" />
    <circle cx="60" cy="36" r="5" fill="#1EE39A" fillOpacity="0.3" />
    <path d="M50 55 Q50 48 60 48 Q70 48 70 55" fill="#1EE39A" fillOpacity="0.15" />
    {/* Left person */}
    <circle cx="30" cy="55" r="10" fill="#142e22" stroke="#1EE39A" strokeWidth="0.6" opacity="0.4" />
    <circle cx="30" cy="52" r="4" fill="#1EE39A" fillOpacity="0.2" />
    <path d="M22 66 Q22 60 30 60 Q38 60 38 66" fill="#1EE39A" fillOpacity="0.1" />
    {/* Right person */}
    <circle cx="90" cy="55" r="10" fill="#142e22" stroke="#1EE39A" strokeWidth="0.6" opacity="0.4" />
    <circle cx="90" cy="52" r="4" fill="#1EE39A" fillOpacity="0.2" />
    <path d="M82 66 Q82 60 90 60 Q98 60 98 66" fill="#1EE39A" fillOpacity="0.1" />
    {/* Connection lines */}
    <line x1="42" y1="48" x2="52" y2="42" stroke="#1EE39A" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2" />
    <line x1="68" y1="42" x2="80" y2="48" stroke="#1EE39A" strokeWidth="0.8" opacity="0.2" strokeDasharray="2 2" />
    <line x1="40" y1="62" x2="80" y2="62" stroke="#1EE39A" strokeWidth="0.5" opacity="0.1" strokeDasharray="3 3" />
    {/* CRM cards */}
    <rect x="20" y="78" width="80" height="28" rx="5" fill="#1a3d2e" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <text x="30" y="92" fontSize="6" fill="#1EE39A" fontFamily="Space Mono" opacity="0.6">CRM</text>
    <line x1="50" y1="84" x2="90" y2="84" stroke="#1EE39A" strokeWidth="0.8" opacity="0.2" />
    <line x1="50" y1="90" x2="85" y2="90" stroke="#1EE39A" strokeWidth="0.8" opacity="0.15" />
    <line x1="50" y1="96" x2="80" y2="96" stroke="#1EE39A" strokeWidth="0.8" opacity="0.1" />
  </svg>
);

export const CloudSync = ({ className = "w-24 h-24" }: IconProps) => (
  <svg viewBox="0 0 120 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloud-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#1a5c3e" />
        <stop offset="100%" stopColor="#0d2e1f" />
      </linearGradient>
      <filter id="cloud-glow"><feGaussianBlur stdDeviation="3" /></filter>
    </defs>
    <path d="M30 70 Q10 70 10 55 Q10 40 25 38 Q28 22 45 20 Q62 18 68 32 Q72 28 80 30 Q95 32 95 48 Q108 48 108 60 Q108 70 95 70 Z" fill="url(#cloud-grad)" />
    <path d="M30 70 Q10 70 10 55 Q10 40 25 38 Q28 22 45 20 Q62 18 68 32 Q72 28 80 30 Q95 32 95 48 Q108 48 108 60 Q108 70 95 70 Z" stroke="#1EE39A" strokeWidth="0.8" opacity="0.4" fill="none" />
    <path d="M30 70 Q10 70 10 55 Q10 40 25 38" stroke="#1EE39A" strokeWidth="2" opacity="0.08" filter="url(#cloud-glow)" />
    {/* Sync arrows */}
    <path d="M50 50 L65 50 L60 44" stroke="#1EE39A" strokeWidth="2" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M75 58 L60 58 L65 64" stroke="#1EE39A" strokeWidth="2" opacity="0.6" strokeLinecap="round" strokeLinejoin="round" />
    {/* Offline cache */}
    <rect x="35" y="80" width="50" height="25" rx="4" fill="#1a3d2e" stroke="#1EE39A" strokeWidth="0.5" opacity="0.3" />
    <rect x="40" y="85" width="12" height="8" rx="1" fill="#1EE39A" fillOpacity="0.1" />
    <rect x="55" y="85" width="12" height="8" rx="1" fill="#1EE39A" fillOpacity="0.1" />
    <rect x="70" y="85" width="10" height="8" rx="1" fill="#1EE39A" fillOpacity="0.1" />
    <text x="42" y="100" fontSize="5" fill="#1EE39A" fontFamily="Space Mono" opacity="0.5">CACHE</text>
    {/* Connection line cloud to cache */}
    <line x1="60" y1="70" x2="60" y2="80" stroke="#1EE39A" strokeWidth="1" opacity="0.3" strokeDasharray="2 2" />
  </svg>
);
