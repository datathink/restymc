// Pricing tiers
export const pricingTiers = [
    {
        id: "first-time",
        name: "first time pass",
        price: 22,
        subtitle: "Single class drop-in price: $0",
    },
    {
        id: "5-class",
        name: "5 class pass",
        price: 55,
    },
    {
        id: "10-class",
        name: "10 class pass",
        price: 95,
    },
];

// Personal services
export const services = [
    {
        id: "ladies-night",
        question: "do you want some lady time?",
        title: "Ladies Night Out",
        description: "Ladies night out packages for groups up to 5 include:",
        features: [
            "1 hour private yoga practice",
            "1 hour visiting time in Zen garden or studio",
            "Self-Care gift bag for each",
        ],
        ctaText: "Book Your Ladies Night Today!",
    },
    {
        id: "private",
        question: "want the studio all to yourself?",
        title: "Private Practice",
        description:
            "Does joining a class make you nervous? Are you recovering from an injury and desire a practice designed especially for you? Do you want to take yoga to a deeper, more personal level?",
        features: [],
        ctaText: "Sign up for a 1:1 Practice",
    },
    {
        id: "group",
        question: 'how about family, youth group, or "friends only"?',
        title: "Group Bookings",
        description: "Private group slots are available!",
        features: [
            "2-5 people required",
            "Outdoor bookings for larger groups are available May-Sept",
        ],
        ctaText: "Schedule your group practice today!",
    },
];

// Workshops
export const workshops = [
    {
        id: "self-love",
        title: "self-love is not selfish",
        description:
            "Studies show that self-compassion leads to deeper curiosity, the capacity to look outward, boosts our mood, and strengthens our relationship with those we love most. Come learn the Three Pillars of Self-Love & how to cultivate it in our lives.",
        season: "Winter" as const,
    },
    {
        id: "motherhood",
        title: "do you want to trust yourself more as a mother?",
        description:
            "The first step is to understand yourself and your desires. Becoming the best version of yourself sets the best example for your children to gain their own sense of self and confidence.",
        season: "Spring" as const,
    },
    {
        id: "perfectionism",
        title: "do you want to overcome perfectionism?",
        description:
            '"I\'m never going to make it." "I can\'t change." "I must make no mistakes to be loved." Get the tools you need to combat the thoughts that keep you stuck.',
        season: "Fall" as const,
    },
    {
        id: "advanced",
        title: "take your yoga practice to the next level",
        description:
            "Are you intimidated by arm balances or headstands? Do you want to deepen and enhance your experience with meditation? These workshops will take you where you need to go!",
        season: "Fall" as const,
    },
];

// Instructors
export const instructors = [
    {
        id: "julia",
        name: "Julia",
        tagline:
            "I believe yoga can heal & strengthen your body, your mind and your soul.",
        bio: "I am a mother of triplets and have been practicing yoga for over a decade. Combined with my love for nutrition and a healthy lifestyle, yoga became my source of vitality when life becomes overwhelming. Whether you are struggling with anxiety or recovering from an injury, whether you want to bring more peace to your days or bring more strength to your muscles, I know the benefits of yoga can help. I have been trained in yoga specifically for the postnatal experience and am especially experienced in teaching yoga for first-time mothers.",
        credentials: [
            "200+ hour certified yoga teacher",
            "Trauma-informed",
            "Mindfulness Coaching certification",
            "BS in Marriage, Family & Human Development",
        ],
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=500&fit=crop&crop=face",
    },
    {
        id: "tierra",
        name: "Tierra",
        tagline:
            "I believe yoga helps create balance and harmony in our lives.",
        bio: 'My yoga journey began when I was a new mother seeking peace and balance after having my three children and feeling "broken" after years of high-intensity cardio training. Yoga has helped heal my body, calm my mind, and reminded me by providing me with a state of the most inner peace and fulfillment. I hope to share this gift with you for the rest of my life.',
        credentials: [
            "200+ hour certified yoga teacher",
            "Specializes in restorative yoga",
            "Children's yoga certified",
        ],
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    },
];

// Testimonials
export const testimonials = [
    {
        id: "1",
        quote: "REST Yoga has transformed my relationship with my body and mind. Julia's classes are the perfect blend of challenge and compassion. I finally found a practice that truly nourishes me.",
        author: "Sarah M.",
        role: "Member since 2024",
    },
    {
        id: "2",
        quote: "After years of high-intensity workouts, I was skeptical about yoga. But the instructors here understand that yoga is more than physical. They helped me find peace I didn't know I was missing.",
        author: "Jennifer K.",
        role: "Workshop participant",
    },
    {
        id: "3",
        quote: "The private sessions helped me recover from injury in ways I never thought possible. I'm so grateful for this community and the personalized attention I received.",
        author: "Michelle R.",
        role: "Yoga therapy client",
    },
    {
        id: "4",
        quote: "As a busy mom, finding time for myself felt impossible. REST Yoga gave me permission to prioritize my wellbeing. The workshops on motherhood changed my perspective entirely.",
        author: "Amanda T.",
        role: "Mother of three",
    },
];

// Navigation items
export const navItems = [
    { label: "Classes", href: "#classes" },
    { label: "Services", href: "#services" },
    { label: "Workshops", href: "#workshops" },
    { label: "About", href: "#about" },
    { label: "Yoga Therapy", href: "#therapy" },
    { label: "Contact", href: "#contact" },
];

// Hero content
export const heroContent = {
    title: "REST",
    subtitle: "Yoga & Mindfulness Center",
    tagline: "Renew Embrace Strengthen & Transform",
    description: "Your body. Your mind. Your spirit.",
};

// Yoga Therapy content
export const yogaTherapyContent = {
    title: "YogaTherapy",
    description:
        "Throughout the year, we will be hosting weekend workshops & mini-retreats. You can also book your own event with us!",
    ctaText: "Book your Private Event!",
    testimonialIntro: "do you want to be an emotionally regulated parent?",
    testimonialQuestions: [
        "Are you consistently fighting the voices in your head saying you're not good enough?",
        "Do you feel that no matter what you're never going to make it?",
        "Children are usually mirrors. When we lash out at them, parents have a lot of work to do.",
        "Do you struggle with perfectionism? Do you believe you must be flawless in order to be loved?",
    ],
};

// Contact/Footer content
export const contactContent = {
    address: "123 Serenity Lane, Peaceful Valley, CA 90210",
    phone: "(555) 123-4567",
    email: "hello@restyoga.com",
    hours: "Mon-Sat: 6am - 8pm | Sun: 8am - 6pm",
    social: {
        instagram: "https://instagram.com/restyoga",
        facebook: "https://facebook.com/restyoga",
    },
};
