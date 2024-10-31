import { twMerge } from "tailwind-merge";

interface FooterProps {
  className: React.HTMLAttributes<HTMLElement>["className"];
  children: React.ReactNode;
}

export default function Footer({ className, children }: FooterProps) {
  return (
    <footer
      className={twMerge(
        "flex justify-center border border-gray-200 bg-gray-50",
        className
      )}
    >
      {children}
    </footer>
  );
}
