import { useScrollAnimation } from "../../hooks/useScrollAnimation";

const offerings = [
    "small class sizes for personalized attention",
    "trauma informed instruction",
    "vinyasa and yin style classes",
    "all props and supplies provided",
    "affordability & accessibility",
    "workshops & events",
    "private bookings available",
    "yoga therapy",
];

export function AboutStudio() {
    const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

    return (
        <section id="about" className="py-20 bg-rest-light-gray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div
                    ref={sectionRef}
                    className={`
                        text-center
                        transition-all duration-700 ease-out
                        ${
                            sectionVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-5"
                        }
                    `}
                >
                    <h2 className="font-script text-4xl md:text-5xl text-rest-charcoal italic mb-8">
                        About the Studio
                    </h2>

                    <p className="text-lg text-rest-warm-gray max-w-3xl mx-auto mb-12">
                        Here at REST: Yoga & Mindfulness Center we take a
                        therapeutic approach. Yoga was never meant for flexible
                        contortionists. Yoga was meant for YOU. Whether you want
                        gentle movement, strengthened muscles, better balance,
                        mindful awareness, love of body, or peace of mind, you
                        will find a place here.
                    </p>

                    <h3 className="font-script text-3xl md:text-4xl text-rest-charcoal italic mb-6">
                        Why choose REST?
                    </h3>

                    <ul className="inline-block text-left">
                        {offerings.map((item, index) => (
                            <li
                                key={index}
                                className="flex items-start text-rest-warm-gray"
                            >
                                <span className="mr-3 text-rest-sage text-lg">
                                    •
                                </span>
                                <span className="text-lg">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default AboutStudio;
