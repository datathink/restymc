interface PricingCardProps {
    name: string;
    price: number | string;
    className?: string;
}

export function PricingCard({ name, price, className = "" }: PricingCardProps) {
    return (
        <div
            className={`
                bg-[#c8cfc1] rounded-lg p-6 text-center
                transition-all duration-300 ease-out
                hover:shadow-lg hover:-translate-y-1
                ${className}
            `}
        >
            <h3 className="font-script text-xl text-rest-charcoal mb-2">
                {name}
            </h3>
            <div className="flex items-start justify-center">
                {typeof price === "number" && (
                    <span className="text-xl text-rest-warm-gray mt-1">$</span>
                )}
                <span className="text-5xl font-serif font-semibold text-rest-charcoal">
                    {price}
                </span>
            </div>
        </div>
    );
}

export default PricingCard;
