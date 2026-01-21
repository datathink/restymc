// Pricing tiers
export const pricingTiers = [
    {
        id: "first-free",
        name: "first class",
        price: "FREE",
        link: "https://momence.com/Rest%3AYoga-and-Mindfulness-Center/membership/First-Time-Pass/58250",
    },
    {
        id: "first-time",
        name: "first time pass",
        price: 22,
        link: "https://momence.com/Rest%3AYoga-and-Mindfulness-Center/membership/First-Time-Pass/58250",
    },
    {
        id: "5-class",
        name: "5 class pass",
        price: 55,
        link: "https://momence.com/Rest%3AYoga-and-Mindfulness-Center/membership/5-Class-Pass-/58247",
    },
    {
        id: "10-class",
        name: "10 class pass",
        price: 95,
        link: "https://momence.com/Rest%3AYoga-and-Mindfulness-Center/membership/10-Class-Pass-/58248",
    },
];

// Personal services
export const services = [
    {
        id: "ladies-night",
        question: "Ladies Night Out",
        title: "Ladies Night Out",
        description: "Groups up to 5 package includes:",
        features: [
            "1 hour private yoga practice",
            "1 hour visiting time in Zen garden or studio",
            "Self-Care gift bag for each",
        ],
        ctaText: "Book Your Ladies Night Today!",
    },
    {
        id: "private",
        question: "Want the studio all to yourself?",
        title: "Private Practice",
        description:
            "Does joining a class make you nervous? Are you recovering from an injury and desire a practice designed especially for you? Do you want to take yoga to a deeper, more personal level?",
        features: [],
        ctaText: "Sign up for a 1:1 Practice",
    },
    {
        id: "group",
        question: "Family, youth group, or friends only",
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
        season: "Spring",
    },
    {
        id: "advanced",
        title: "take your yoga practice to the next level",
        description:
            "Are you intimidated by arm balances or headstands? Do you want to deepen and enhance your experience with meditation? These workshops will take you where you need to go!",
        season: "Fall",
    },
];

// Instructors
export const instructors = [
    {
        id: "julia",
        name: "Julia",
        tagline:
            "I believe yoga can heal & strengthen your body, your mind and your soul.",
        bio: "I am a mother of seven and have been practicing yoga for over ten years. I am a 500HR certified yoga teacher and founder of REST: Yoga & Mindfulness Center. If you are struggling with embracing your body and health challenges, I've been there! A visit to the emergency room and autoimmune diagnosis started me on my personal yoga journey. The benefits of yoga in my life have been exponential — physically, emotionally, mentally and spiritually. I only hope such a practice can do the same for you!",
        image: "/julia.png",
    },
    {
        id: "terra",
        name: "Terra",
        tagline:
            "I believe yoga helps create balance and harmony in our lives.",
        bio: 'I\'m a lover of sourdough, slippers, warm showers, watercolor, flowers, and a good book. I have been practicing yoga for nearly a decade and am excited to share my love of yoga with others. I came to yoga after having my three children and feeling "broken." I came seeking physical healing and found not only that but also mental, emotional, and spiritual strength. Yoga has changed me, helped me, healed me, and enlivened me, providing me with an opportunity to reconnect with myself both on the mat and as I step off the mat and into the rest of life.',
        image: "/terra.png",
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
    { label: "Yoga Therapy", href: "#therapy" },
    { label: "About", href: "#about" },
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
    title: "Yoga Therapy Coming Soon",
    description: "Interested in joining a free session?",
    ctaText: "Join the Wait List",
};

// Contact/Footer content
export const contactContent = {
    phone: "(208) 656-4063",
    email: "julia@restymc.com",
    hours: "Monday - Friday",
};
