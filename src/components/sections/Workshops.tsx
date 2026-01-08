import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { WorkshopCard } from "../ui";
import { workshops } from "../../data/content";

export function Workshops() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

    return (
        <section id="workshops" className="py-20 bg-rest-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <div
                    ref={titleRef}
                    className={`
            text-center mb-12
            transition-all duration-700 ease-out
            ${
                titleVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
            }
          `}
                >
                    <h2 className="font-script text-3xl md:text-4xl text-rest-charcoal">
                        Mini-Retreat & Workshop Schedule 2026
                    </h2>
                </div>

                {/* Workshop Cards */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {workshops.map((workshop, index) => (
                        <div
                            key={workshop.id}
                            className={`
                transition-all duration-500 ease-out
                ${
                    cardsVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                }
              `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <WorkshopCard
                                title={workshop.title}
                                description={workshop.description}
                                season={workshop.season}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Workshops;
