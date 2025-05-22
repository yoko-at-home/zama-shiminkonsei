import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ギャラリー | 座間市民混声合唱団",
  description: "座間市民混声合唱団の演奏会や親睦会の写真ギャラリーです。",
  openGraph: {
    title: "ギャラリー | 座間市民混声合唱団",
    description: "座間市民混声合唱団の演奏会や親睦会の写真ギャラリーです。",
    images: [
      {
        url: "/static/gallery/concert1.png",
        width: 1200,
        height: 630,
        alt: "ゴールデンウェーブシニア音楽祭",
      },
    ],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
