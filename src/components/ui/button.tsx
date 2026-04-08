import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition-all duration-300 cursor-pointer",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
          "disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-primary-light hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]":
              variant === "primary",
            "bg-white text-primary-dark hover:bg-gray-100 shadow-lg hover:shadow-xl active:scale-[0.98]":
              variant === "secondary",
            "bg-accent text-white hover:bg-accent-light hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]":
              variant === "accent",
            "border border-border text-foreground hover:bg-card hover:border-primary/50":
              variant === "outline",
            "text-foreground hover:bg-card": variant === "ghost",
          },
          {
            "h-9 px-4 text-sm": size === "sm",
            "h-11 px-6 text-base": size === "md",
            "h-13 px-8 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, type ButtonProps };
