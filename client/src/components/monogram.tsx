interface MonogramProps {
  initials: string;
  inverted?: boolean;
}

export default function Monogram({ initials, inverted = false }: MonogramProps) {
  return (
    <div 
      className={`
        font-playfair ${inverted ? 'text-darkoak bg-gold' : 'text-gold bg-darkoak'} 
        border ${inverted ? 'border-darkoak' : 'border-gold/70'}
        flex items-center justify-center 
        w-12 h-12
        font-semibold text-2xl
        transition-all duration-300
        hover:shadow-md relative
      `}
    >
      <div className="absolute inset-0 border border-gold/30"></div>
      <div className="absolute inset-[3px] border border-gold/20"></div>
      <span className="relative">{initials}</span>
    </div>
  );
}
