import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "accent" | "outline";
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium",
        {
          "bg-card border border-border text-muted": variant === "default",
          "bg-primary/10 border border-primary/20 text-primary-light": variant === "primary",
          "bg-accent/10 border border-accent/20 text-accent": variant === "accent",
          "border border-border text-muted": variant === "outline",
        },
        className
      )}
      {...props}
    />
  );
}
