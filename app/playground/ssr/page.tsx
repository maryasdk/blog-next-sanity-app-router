import { Main, Footer, Header } from "@/components/layout";
import Link from "next/link";
import ClientButton from "./client-button";

const getData: any = async () => {
  let data;

  try {
    const res = await fetch(
      "https://timeapi.io/api/time/current/zone?timeZone=Europe%2FAmsterdam",
      {
        cache: "no-store", // Ensure SSR on each request
      }
    );
    data = await res.json();
  } catch (err) {
    console.error(err);
  }

  return data;
};

export default async function Ssr() {
  const data = await getData();

  return (
    <>
      <Header>
        <Link href="/playground" className="hover:underline">
          Playground
        </Link>
      </Header>
      <Main>
        <h1>
          <strong>SSR Example</strong>
        </h1>
        <p>Date SSR</p>
        <p>date: {data.date}</p>
        <p>time: {data.time}</p>
        <p>timeZone: {data.timeZone}</p>
        <ClientButton />
      </Main>
      <Footer>
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2024 My Website Playground. All rights reserved.</p>
          </div>
        </div>
      </Footer>
    </>
  );
}
