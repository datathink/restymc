import { useState } from "react";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { PricingCard } from "../ui";
import { pricingTiers } from "../../data/content";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogTitle,
} from "../ui/dialog";

export function YogaClasses() {
    const [dialogOpen, setDialogOpen] = useState(false);

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

                        <ul className="mt-2 mb-8">
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
                                    <span className="text-lg italic">
                                        {question}
                                    </span>
                                </li>
                            ))}
                        </ul>

                        <div className="font-bold mb-4 text-rest-sage text-xl text-center">
                            Then yoga is for you!
                        </div>

                        {/* Promo Banner */}
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                            <DialogTrigger className="bg-rest-tan/50 cursor-pointer rounded-lg p-4 my-4 font-bold w-full transition-all duration-300 ease-out hover:shadow-lg hover:-translate-y-1">
                                Schedule your next class here
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh]">
                                <DialogTitle className="font-script text-3xl text-rest-charcoal">
                                    Schedule a Class
                                </DialogTitle>
                                {dialogOpen && (
                                    <iframe
                                        src="/momence-widget.html"
                                        className="w-full h-[60vh] border-0"
                                        title="Class Schedule"
                                    />
                                )}
                            </DialogContent>
                        </Dialog>

                        {/* Pricing Cards */}
                        <div
                            ref={cardsRef}
                            className="grid grid-cols-2 sm:grid-cols-4 gap-4"
                        >
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
                                    <a
                                        href={tier.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <PricingCard
                                            name={tier.name}
                                            price={tier.price}
                                        />
                                    </a>
                                </div>
                            ))}
                        </div>
                        <p className="text-center text-rest-warm-gray text-sm mt-3">
                            Single class drop-in:{" "}
                            <span className="font-semibold text-rest-charcoal">
                                $12
                            </span>
                        </p>
                    </div>

                    {/* Image */}
                    <div
                        className={`
                            transition-all duration-700 ease-out delay-300
                            ${
                                sectionVisible
                                    ? "opacity-100 translate-x-0"
                                    : "opacity-0 translate-x-10"
                            }
                            `}
                    >
                        <img
                            src="/studio.png"
                            alt="Yoga studio with equipment and mats"
                            className="rounded-lg shadow-xl object-cover w-full h-96 sm:h-175"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default YogaClasses;
