interface PricingCardProps {
  name: string;
  price: number;
  subtitle?: string;
  className?: string;
}

export function PricingCard({ name, price, subtitle, className = '' }: PricingCardProps) {
  return (
    <div
      className={`
        bg-rest-light-gray rounded-lg p-6 text-center
        transition-all duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
    >
      <h3 className="font-script text-xl text-rest-charcoal mb-2">{name}</h3>
      <div className="flex items-start justify-center">
        <span className="text-2xl text-rest-warm-gray mt-1">$</span>
        <span className="text-5xl font-serif font-semibold text-rest-charcoal">{price}</span>
      </div>
      {subtitle && (
        <p className="text-xs text-rest-warm-gray mt-2 italic">{subtitle}</p>
      )}
    </div>
  );
}

export default PricingCard;
