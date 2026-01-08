import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PricingCard } from "../ui";
import { pricingTiers } from "../../data/content";

export function YogaClasses() {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
    const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation();

    const questions = [
        "Are you looking for a gentle, but effective way to move your body?",
        "Do you want to become more mindful in your daily life?",
        "Do you want to strengthen, tone, stretch and renew your muscles?",
    ];

    return (
        <section id="classes" className="py-20 bg-rest-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div
                        ref={sectionRef}
                        className={`
              transition-all duration-700 ease-out
              ${
                  sectionVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
              }
            `}
                    >
                        <h2 className="font-script text-5xl md:text-6xl text-rest-charcoal mb-8">
                            Yoga
                        </h2>

                        <ul className="space-y-4 mb-8">
                            {questions.map((question, index) => (
                                <li
                                    key={index}
                                    className="flex items-start text-rest-warm-gray"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <span className="mr-3 text-rest-sage text-lg">
                                        •
                                    </span>
                                    <span className="font-script text-lg italic">
                                        {question}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        {/* Promo Banner */}
                        <div className="bg-rest-tan/50 rounded-lg p-4 text-center mb-8">
                            <p className="font-medium text-rest-charcoal">
                                Come to a{" "}
                                <span className="font-bold">FREE</span> class
                            </p>
                            <p className="text-sm text-rest-warm-gray">
                                with code:{" "}
                                <span className="font-bold text-rest-warm-brown">
                                    FREE
                                </span>
                            </p>
                        </div>

                        {/* Pricing Cards */}
                        <div ref={cardsRef} className="grid grid-cols-3 gap-4">
                            {pricingTiers.map((tier, index) => (
                                <div
                                    key={tier.id}
                                    className={`
                    transition-all duration-500 ease-out
                    ${
                        cardsVisible
                            ? "opacity-100 translate-y-0"
                            : "opacity-0 translate-y-5"
                    }
                  `}
                                    style={{
                                        transitionDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <PricingCard
                                        name={tier.name}
                                        price={tier.price}
                                        subtitle={tier.subtitle}
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Testimonials teaser */}
                        <div className="mt-8 text-right">
                            <a
                                href="#therapy"
                                className="font-script text-xl text-rest-taupe hover:text-rest-warm-brown transition-colors"
                            >
                                Testimonials
                            </a>
                        </div>
                    </div>

                    {/* Image */}
                    <div
                        className={`
              hidden lg:block
              transition-all duration-700 ease-out delay-300
              ${
                  sectionVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
              }
            `}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=500&h=600&fit=crop"
                            alt="Yoga studio with equipment and mats"
                            className="rounded-lg shadow-xl object-cover w-full h-[500px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YogaClasses;
