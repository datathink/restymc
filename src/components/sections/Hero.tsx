import { useEffect, useState } from "react";
import { heroContent } from "../../data/content";

export function Hero() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations after mount
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-rest-cream via-rest-light-gray to-rest-cream relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 opacity-30">
                <div className="absolute top-20 right-20 w-64 h-64 bg-rest-sage/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-rest-beige/40 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Plant Image */}
                    <div
                        className={`
              flex justify-center lg:justify-end order-2 lg:order-1
              transition-all duration-1000 ease-out
              ${
                  isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-10"
              }
            `}
                    >
                        <div className="relative">
                            <img
                                src="/header.jpeg"
                                alt="Eucalyptus plant in glass vase"
                                className="rounded-lg shadow-xl max-w-xs lg:max-w-sm object-cover"
                            />
                            {/* Decorative frame */}
                            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-rest-sage/30 rounded-lg -z-10" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="text-center lg:text-left order-1 lg:order-2 space-y-6">
                        <h1
                            className={`
                font-serif text-6xl md:text-7xl lg:text-8xl font-semibold text-rest-charcoal tracking-wide
                transition-all duration-700 ease-out delay-200
                ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }
              `}
                        >
                            {heroContent.title}
                        </h1>

                        <p
                            className={`
                font-script text-2xl md:text-3xl text-rest-warm-gray
                transition-all duration-700 ease-out delay-400
                ${
                    isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-5"
                }
              `}
                        >
                            {heroContent.subtitle}
                        </p>

                        <div className="pt-4">
                            <p
                                className={`
                  font-script text-xl md:text-2xl text-rest-warm-brown italic
                  transition-all duration-700 ease-out delay-500
                  ${
                      isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                  }
                `}
                            >
                                {heroContent.tagline}
                            </p>

                            <p
                                className={`
                  font-script text-lg md:text-xl text-rest-taupe mt-3
                  transition-all duration-700 ease-out delay-700
                  ${
                      isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                  }
                `}
                            >
                                {heroContent.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
