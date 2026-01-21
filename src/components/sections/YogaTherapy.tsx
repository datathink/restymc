import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Button, TestimonialCard } from "../ui";
import { yogaTherapyContent, testimonials } from "../../data/content";

export function YogaTherapy() {
    const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
    const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
    const { ref: testimonialsRef, isVisible: testimonialsVisible } =
        useScrollAnimation();

    return (
        <section id="therapy" className="py-20 bg-rest-cream">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div
                    ref={headerRef}
                    className={`
                        grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20
                        transition-all duration-700 ease-out
                        ${
                            headerVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }
                    `}
                >
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/julia-ending.png"
                            alt="Yoga therapy session"
                            className="rounded-lg shadow-xl mx-auto w-100 h-175 object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="font-script text-4xl md:text-5xl text-rest-charcoal mb-6">
                            {yogaTherapyContent.title}
                        </h2>

                        <p className="text-rest-warm-gray leading-relaxed mb-6">
                            {yogaTherapyContent.description}
                        </p>

                        <Button variant="secondary">
                            {yogaTherapyContent.ctaText}
                        </Button>
                    </div>
                </div>

                {/* Testimonials Section */}
                <div
                    ref={contentRef}
                    className={`
                        transition-all duration-700 ease-out
                        ${
                            contentVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }
                    `}
                >
                    <h3 className="font-script text-3xl text-rest-charcoal text-center mb-4">
                        Testimonials
                    </h3>
                </div>

                {/* Testimonial Cards */}
                <div
                    ref={testimonialsRef}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`
                transition-all duration-500 ease-out
                ${
                    testimonialsVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-10"
                }
              `}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <TestimonialCard
                                quote={testimonial.quote}
                                author={testimonial.author}
                                role={testimonial.role}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default YogaTherapy;
