import { urlForImage } from "@/sanity/lib/utils";
import type { SanityAsset } from "@sanity/image-url/lib/types/types";
import { Image } from "next-sanity/image";
import { getImageDimensions, SanityImageAsset } from "@sanity/asset-utils";

interface Props {
  asset: SanityAsset;
  alt: string;
  caption?: string;
}

export const SanityImage = (props: Props) => {
  const { asset, alt, caption } = props;
  const imgObj = {
    _type: "image",
    alt,
    asset: asset as SanityImageAsset,
  };
  const { width, height } = getImageDimensions(imgObj);
  const src = urlForImage({ _type: "image", alt, asset })
    ?.height(height)
    .width(width)
    .url();

  if (!src) {
    return null;
  }

  return (
    <figure>
      <Image
        src={src}
        alt={alt || ""}
        width={width}
        height={height}
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
