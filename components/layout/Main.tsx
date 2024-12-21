import React from "react";
import { twMerge } from "tailwind-merge";

interface MainProps {
  contentClassName?: React.HTMLAttributes<HTMLElement>["className"];
  children: React.ReactNode;
}

export default function Main({ contentClassName, children }: MainProps) {
  return (
    <main className="flex-grow flex-auto bg-background">
      <div className={twMerge("container mx-auto px-5 py-8", contentClassName)}>
        {children}
      </div>
    </main>
  );
}
