import { Suspense } from "react";

import MoreStories from "./more-stories";
import PortableText from "./portable-text";

import type { Settings } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { settingsQuery } from "@/sanity/lib/queries";
import { Main } from "@/components/layout";

function IntroHeader({ settings }: { settings: Settings }) {
  const { title, subheader, introTitle, introContent } = settings;
  return (
    <header className="mt-16 mb-16">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center lg:mb-12 lg:flex-row lg:justify-between">
          <h1 className="text-balance text-center md:text-left text-6xl font-bold leading-tight tracking-tighter lg:pr-8 lg:text-8xl">
            {title}
          </h1>
          <h2 className="text-pretty mt-5 text-center text-lg lg:pl-8 lg:text-left">
            <PortableText className="prose-lg" value={subheader as any} />
          </h2>
        </div>
        <div className="my-20">
          <h2 className="text-2xl font-bold">{introTitle}</h2>
          <br />
          <p>{introContent}</p>
        </div>
      </div>
    </header>
  );
}

export default async function Page() {
  const settings = await sanityFetch({
    query: settingsQuery,
  });

  return (
    <>
      <IntroHeader settings={settings as Settings} />
      <Main>
        <aside>
          <h2 className="mb-8 text-6xl font-bold leading-tight tracking-tighter md:text-7xl">
            Compilations
          </h2>
          <Suspense>
            <MoreStories skip={""} limit={100} />
          </Suspense>
        </aside>
      </Main>
    </>
  );
}
