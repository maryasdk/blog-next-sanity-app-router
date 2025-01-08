import { Main, Footer, Header } from "@/components/layout";
import Link from "next/link";

export default function Playground() {
  return (
    <>
      <Header>Playground</Header>
      <Main contentClassName="flex flex-col">
        <Link href="/playground/ssr">SSR</Link>
      </Main>
      <Footer>
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; 2024 My Website Playground. All rights reserved.</p>
        </div>
      </Footer>
    </>
  );
}
