import Button from "./Button";

interface WorkshopCardProps {
    title: string;
    description: string;
    season: string;
    className?: string;
}

export function WorkshopCard({
    title,
    description,
    season,
    className = "",
}: WorkshopCardProps) {
    return (
        <div
            className={`
        bg-[#c8cfc1] rounded-lg p-5 flex flex-col h-full
        transition-all duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
        >
            <h3 className="font-script text-2xl text-rest-charcoal mb-3 leading-relaxed">
                {title}
            </h3>
            <p className="text-sm text-rest-warm-gray mb-4 leading-relaxed grow">
                {description}
            </p>
            <div className="mt-auto space-y-3">
                <p className="text-xs font-medium text-rest-sage italic">
                    {season}
                </p>
                <Button className="w-full bg-rest-cream! text-xs py-2">
                    Join the Wait List
                </Button>
            </div>
        </div>
    );
}

export default WorkshopCard;
