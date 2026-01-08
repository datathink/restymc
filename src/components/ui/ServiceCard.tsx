import Button from "./Button";

interface ServiceCardProps {
    question: string;
    description: string;
    features: string[];
    ctaText: string;
    className?: string;
}

export function ServiceCard({
    question,
    description,
    features,
    ctaText,
    className = "",
}: ServiceCardProps) {
    return (
        <div
            className={`
        bg-rest-beige rounded-lg p-6 flex flex-col h-full
        transition-all duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
        >
            <h3 className="font-script text-xl text-rest-charcoal mb-4 leading-relaxed">
                {question}
            </h3>
            <p className="text-sm text-rest-warm-gray mb-4 leading-relaxed">
                {description}
            </p>
            {features.length > 0 && (
                <ul className="text-sm text-rest-warm-gray mb-6 space-y-2 flex-grow">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                            <span className="mr-2 text-rest-sage">•</span>
                            {feature}
                        </li>
                    ))}
                </ul>
            )}
            <div className="mt-auto">
                <Button variant="outline" className="w-full text-xs">
                    {ctaText}
                </Button>
            </div>
        </div>
    );
}

export default ServiceCard;
