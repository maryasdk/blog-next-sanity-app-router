export const metadata = {
  title: "Playground",
  description: "Next JS Playground entry point",
};

export default function PlaygroundLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="flex flex-col min-h-screen">{children}</div>;
}
