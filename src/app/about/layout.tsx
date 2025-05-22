import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "座間市民混声合唱団について",
  description:
    "1995年10月に結成された座間市民混声合唱団の歴史や活動内容、指揮者・ピアニストの紹介など、合唱団の詳細情報をご覧いただけます。",
  openGraph: {
    title: "座間市民混声合唱団について",
    description:
      "1995年10月に結成された座間市民混声合唱団の歴史や活動内容、指揮者・ピアニストの紹介など、合唱団の詳細情報をご覧いただけます。",
    images: [
      {
        url: "/static/about/1.jpg",
        width: 800,
        height: 600,
        alt: "座間市民混声合唱団の写真",
      },
    ],
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
