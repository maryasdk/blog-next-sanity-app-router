interface HeaderProps {
  children: string | React.ReactNode;
}

export default function Header({ children }: HeaderProps) {
  return (
    <header className="mb-16 mt-10">
      <div className="container mx-auto px-5">
        <h2 className="text-2xl font-bold leading-tight tracking-tight md:text-4xl md:tracking-tighter">
          {children}
        </h2>
      </div>
    </header>
  );
}
