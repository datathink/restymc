import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { ServiceCard } from "../ui";
import { services } from "../../data/content";

export function PersonalServices() {
    const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

    return (
        <section id="services" className="py-20 bg-rest-light-gray">
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
                    <h2 className="font-script text-4xl md:text-5xl text-rest-charcoal italic">
                        make it personal!
                    </h2>
                </div>

                {/* Service Cards */}
                <div
                    ref={cardsRef}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            className={`
                                transition-all duration-500 ease-out
                                ${
                                    cardsVisible
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-10"
                                }
                            `}
                            style={{ transitionDelay: `${index * 150}ms` }}
                        >
                            <ServiceCard
                                question={service.question}
                                description={service.description}
                                features={service.features}
                                ctaText={service.ctaText}
                                price={service.price}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PersonalServices;
