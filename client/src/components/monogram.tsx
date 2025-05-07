interface MonogramProps {
  initials: string;
  inverted?: boolean;
}

export default function Monogram({ initials, inverted = false }: MonogramProps) {
  return (
    <div 
      className={`
        font-playfair ${inverted ? 'text-cream bg-dartmouth' : 'text-dartmouth bg-cream'} 
        border-2 ${inverted ? 'border-cream' : 'border-dartmouth'}
        flex items-center justify-center 
        w-12 h-12 rounded-full 
        font-semibold text-2xl
        transition-all duration-300
        hover:shadow-md
      `}
    >
      {initials}
    </div>
  );
}
