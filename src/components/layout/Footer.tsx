import { contactContent, navItems } from "../../data/content";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer id="contact" className="bg-rest-beige py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand & Description */}
                    <div>
                        <h3 className="font-serif text-2xl font-semibold text-rest-charcoal mb-4">
                            REST
                        </h3>
                        <p className="font-script text-lg text-rest-warm-gray mb-4">
                            Yoga & Mindfulness Center
                        </p>
                        <p className="text-sm text-rest-warm-gray leading-relaxed">
                            your body, your mind, your spirit
                        </p>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-medium text-rest-charcoal mb-4">
                            Contact Us
                        </h4>
                        <div className="space-y-3 text-sm text-rest-warm-gray">
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-3 text-rest-sage"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                    />
                                </svg>
                                {contactContent.phone}
                            </p>
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-3 text-rest-sage"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                <a
                                    className="hover:underline"
                                    href={`mailto:${contactContent.email}`}
                                >
                                    {contactContent.email}
                                </a>
                            </p>
                            <p className="flex items-center">
                                <svg
                                    className="w-5 h-5 mr-3 text-rest-sage"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.5}
                                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                {contactContent.hours}
                            </p>
                        </div>
                    </div>

                    {/* Quick Links & Social */}
                    <div>
                        <h4 className="font-medium text-rest-charcoal mb-4">
                            Quick Links
                        </h4>
                        <nav className="space-y-2 mb-6">
                            {navItems.slice(0, 4).map((item) => (
                                <a
                                    key={item.href}
                                    href={item.href}
                                    className="block text-sm text-rest-warm-gray hover:text-rest-charcoal transition-colors"
                                >
                                    {item.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-12 pt-8 border-t border-rest-taupe/30 text-center">
                    <p className="text-sm text-rest-warm-gray">
                        &copy; {currentYear} REST Yoga & Mindfulness Center. All
                        rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
