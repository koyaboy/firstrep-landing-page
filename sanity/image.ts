import imageUrlBuilder from "@sanity/image-url";
import type { ImageUrlBuilder } from "@sanity/image-url";

import { client } from "./client";

const builder = imageUrlBuilder(client);

export function urlFor(source: unknown): ImageUrlBuilder {
  return builder.image(source as never);
}
