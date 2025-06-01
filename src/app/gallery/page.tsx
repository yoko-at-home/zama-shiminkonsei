import type { Metadata } from "next";
import { client } from "@/lib/microcms";
import type { Gallery } from "@/lib/microcms";
import GalleryClient from "./GalleryClient";

export const metadata: Metadata = {
  title: "ギャラリー | 座間市民混声合唱団",
  description: "座間市民混声合唱団の活動写真です。",
};

export default async function GalleryPage() {
  const data = await client.get({
    endpoint: "gallery",
  });

  const galleries = data.contents as Gallery[];

  return <GalleryClient galleries={galleries} />;
}
