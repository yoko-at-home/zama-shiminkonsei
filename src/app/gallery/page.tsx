import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import type { Gallery } from "@/lib/microcms";
import GalleryClient from "./GalleryClient";

const itemsPerPage = 12;

export const metadata: Metadata = {
  title: "ギャラリー | 座間市民混声合唱団",
  description: "座間市民混声合唱団の活動写真です。",
};

export default async function GalleryPage() {
  const initialData = await client.get({
    endpoint: "gallery",
    queries: { offset: 0, limit: itemsPerPage },
  });

  const initialGalleries = initialData.contents as Gallery[];
  const totalCount = initialData.totalCount;

  return (
    <GalleryClient
      initialGalleries={initialGalleries}
      totalCount={totalCount}
    />
  );
}
