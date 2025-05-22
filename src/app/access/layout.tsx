import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "活動拠点",
  description:
    "座間市民混声合唱団の練習会場の案内です。練習会場へのアクセス方法や地図をご案内しています。",
  openGraph: {
    title: "活動拠点",
    description:
      "座間市民混声合唱団の練習会場の案内です。練習会場へのアクセス方法や地図をご案内しています。",
  },
};

export default function AccessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
