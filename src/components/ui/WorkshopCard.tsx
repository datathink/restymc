import Button from './Button';

interface WorkshopCardProps {
  title: string;
  description: string;
  season: 'Winter' | 'Spring' | 'Summer' | 'Fall';
  className?: string;
}

const seasonColors = {
  Winter: 'bg-rest-light-gray',
  Spring: 'bg-rest-beige',
  Summer: 'bg-rest-cream',
  Fall: 'bg-rest-taupe/30',
};

export function WorkshopCard({
  title,
  description,
  season,
  className = '',
}: WorkshopCardProps) {
  return (
    <div
      className={`
        ${seasonColors[season]} rounded-lg p-5 flex flex-col h-full
        transition-all duration-300 ease-out
        hover:shadow-lg hover:-translate-y-1
        ${className}
      `}
    >
      <h3 className="font-script text-lg text-rest-charcoal mb-3 leading-relaxed">
        {title}
      </h3>
      <p className="text-sm text-rest-warm-gray mb-4 leading-relaxed flex-grow">
        {description}
      </p>
      <div className="mt-auto space-y-3">
        <p className="text-xs font-medium text-rest-sage italic">{season}</p>
        <Button variant="outline" className="w-full text-xs py-2">
          Join the Waitlist
        </Button>
      </div>
    </div>
  );
}

export default WorkshopCard;
