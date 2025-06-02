import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "練習中の曲・過去取り組んだ曲",
  description:
    "座間市民混声合唱団が現在練習中の曲や、過去に取り組んだ曲の一覧をご紹介します。定期演奏会での演奏曲目や、練習会での取り組みなど、合唱団の活動内容をご覧いただけます。",
  openGraph: {
    title: "練習中の曲・過去取り組んだ曲",
    description:
      "座間市民混声合唱団が現在練習中の曲や、過去に取り組んだ曲の一覧をご紹介します。定期演奏会での演奏曲目や、練習会での取り組みなど、合唱団の活動内容をご覧いただけます。",
    images: [
      {
        url: "/static/hero/2.webp",
        width: 800,
        height: 600,
        alt: "演奏会の様子",
      },
    ],
  },
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
