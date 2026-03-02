interface TestimonialCardProps {
    quote: string;
    author: string;
    className?: string;
}

export function TestimonialCard({
    quote,
    author,
    className = "",
}: TestimonialCardProps) {
    return (
        <div
            className={`
        bg-white rounded-lg p-6 shadow-sm
        transition-all duration-300 ease-out
        hover:shadow-md
        ${className}
      `}
        >
            <div className="text-5xl text-rest-taupe font-serif leading-none">
                "
            </div>
            <blockquote className="text-rest-warm-gray text-sm leading-relaxed mb-4 italic">
                {quote}
            </blockquote>
            <footer className="border-t border-rest-light-gray pt-4">
                <cite className="not-italic">
                    <span className="block font-medium text-rest-charcoal">
                        {author}
                    </span>
                </cite>
            </footer>
        </div>
    );
}

export default TestimonialCard;
