import { urlForImage } from "@/sanity/lib/utils";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import Image from "next/image";

interface Props {
  asset: SanityAsset;
  alt: string;
  caption?: string;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props;
  console.log("SanityImage asset", asset);
  const src = urlForImage({ asset })?.height(1000).width(2000).url();

  if (!src) {
    return null;
  }

  return (
    <figure>
      <Image
        src={src}
        alt={alt || ""}
        width={2000}
        height={1000}
        sizes="(max-width: 800px) 100vw, 800px"
      />
      {caption && (
        <figcaption className="mt-2 text-center italic text-sm text-gray-500 dark:text-gray-400">
          {caption}
        </figcaption>
      )}
    </figure>
  );
};
