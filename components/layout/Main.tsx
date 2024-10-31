interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps) {
  return (
    <main className="flex-grow flex-auto bg-background">
      <div className="container mx-auto px-5 py-8">{children}</div>
    </main>
  );
}
