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
                        {/* Mobile: square face crop */}
                        <img
                            src="/julia-ending-mobile.png"
                            alt="Yoga therapy session"
                            className="sm:hidden rounded-lg shadow-xl mx-auto w-64 h-64 object-cover"
                        />
                        {/* Desktop: full image */}
                        <img
                            src="/julia-ending.png"
                            alt="Yoga therapy session"
                            className="hidden sm:block rounded-lg shadow-xl mx-auto sm:w-64 sm:h-64 md:w-100 md:h-175 object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div>
                        <h2 className="font-script text-4xl md:text-5xl text-rest-charcoal mb-4">
                            {yogaTherapyContent.title}
                        </h2>

                        <p className="font-bold text-sm sm:text-xl text-rest-sage mb-6">
                            {yogaTherapyContent.tagline}
                        </p>

                        <p className="text-rest-warm-gray leading-relaxed mb-6">
                            {yogaTherapyContent.description}
                        </p>

                        <p className="text-rest-warm-gray leading-relaxed mb-2">
                            {yogaTherapyContent.individualPricing}
                        </p>

                        <p className="text-rest-warm-gray leading-relaxed mb-8">
                            {yogaTherapyContent.groupNote}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button variant="secondary" href="#">
                                {yogaTherapyContent.bookCtaText}
                            </Button>
                        </div>
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
                    // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    className="flex flex-row flex-wrap gap-4 justify-center"
                >
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`
                                transition-all duration-500 ease-out max-w-75
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
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default YogaTherapy;
