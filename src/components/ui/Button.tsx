import type { ReactNode } from "react";

interface ButtonProps {
    variant?: "primary" | "secondary" | "outline";
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className?: string;
}

const variantStyles = {
    primary: "bg-rest-tan text-rest-charcoal hover:bg-rest-dark-tan",
    secondary: "bg-rest-warm-brown text-white hover:bg-rest-charcoal",
    outline:
        "bg-transparent border-2 border-rest-taupe text-rest-charcoal hover:bg-rest-beige",
};

export function Button({
    variant = "primary",
    children,
    href,
    onClick,
    className = "",
}: ButtonProps) {
    const baseStyles = `
    inline-block px-6 py-3 rounded-md font-medium text-sm
    transition-all duration-300 ease-out
    hover:scale-[1.02] hover:shadow-md
    active:scale-[0.98]
    cursor-pointer text-center
  `;

    const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedStyles}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={combinedStyles}>
            {children}
        </button>
    );
}

export default Button;
