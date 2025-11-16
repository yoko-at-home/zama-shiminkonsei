import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import type { Gallery } from "@/lib/microcms";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "ギャラリー | 座間市民混声合唱団",
  description: "座間市民混声合唱団の活動写真です。",
};

export default async function GalleryPage() {
  let allGalleries: Gallery[] = [];
  let offset = 0;
  const limit = 100;
  let hasMore = true;

  while (hasMore) {
    const data = await client.get({
      endpoint: "gallery",
      queries: { offset, limit },
    });

    const galleries = data.contents as Gallery[];
    allGalleries = [...allGalleries, ...galleries];

    if (galleries.length < limit) {
      hasMore = false;
    } else {
      offset += limit;
    }
  }

  return <GalleryClient galleries={allGalleries} />;
}
