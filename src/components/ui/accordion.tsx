"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { createContext, useContext, useState, HTMLAttributes } from "react";

const AccordionContext = createContext<{
  openItem: string | null;
  toggle: (value: string) => void;
}>({ openItem: null, toggle: () => {} });

export function Accordion({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const toggle = (value: string) =>
    setOpenItem((prev) => (prev === value ? null : value));

  return (
    <AccordionContext.Provider value={{ openItem, toggle }}>
      <div className={cn("space-y-3", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem } = useContext(AccordionContext);
  const isOpen = openItem === value;

  return (
    <div
      className={cn(
        "rounded-xl border transition-all duration-300",
        isOpen
          ? "border-primary/40 bg-card-elevated shadow-md shadow-primary/5"
          : "border-border bg-card",
        className
      )}
    >
      {children}
    </div>
  );
}

export function AccordionTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem, toggle } = useContext(AccordionContext);
  const isOpen = openItem === value;

  return (
    <button
      onClick={() => toggle(value)}
      className={cn(
        "flex w-full items-center justify-between p-5 text-left font-medium text-white transition-colors hover:text-primary-light cursor-pointer",
        className
      )}
    >
      {children}
      <ChevronDown
        className={cn(
          "h-5 w-5 text-muted transition-transform duration-300",
          isOpen && "rotate-180 text-primary"
        )}
      />
    </button>
  );
}

export function AccordionContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { openItem } = useContext(AccordionContext);
  const isOpen = openItem === value;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-300",
        isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}
    >
      <div className={cn("px-5 pb-5 text-muted leading-relaxed", className)}>
        {children}
      </div>
    </div>
  );
}
