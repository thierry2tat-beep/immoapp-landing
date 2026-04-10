"use client";

import { cn } from "@/lib/utils";
import { createContext, useContext, useState, HTMLAttributes } from "react";

const TabsContext = createContext<{
  activeTab: string;
  setActiveTab: (value: string) => void;
}>({ activeTab: "", setActiveTab: () => {} });

export function Tabs({
  defaultValue,
  children,
  className,
  ...props
}: HTMLAttributes<HTMLDivElement> & { defaultValue: string }) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={cn("", className)} {...props}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export function TabsList({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row items-stretch sm:items-center gap-1 rounded-xl bg-surface border border-border p-1.5 w-full sm:w-auto",
        className
      )}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer text-center",
        isActive
          ? "bg-primary text-white shadow-md shadow-primary/25"
          : "text-muted hover:text-white hover:bg-card",
        className
      )}
    >
      {children}
    </button>
  );
}

export function TabsContent({
  value,
  children,
  className,
}: {
  value: string;
  children: React.ReactNode;
  className?: string;
}) {
  const { activeTab } = useContext(TabsContext);
  if (activeTab !== value) return null;

  return <div className={cn("mt-8 w-full", className)}>{children}</div>;
}
