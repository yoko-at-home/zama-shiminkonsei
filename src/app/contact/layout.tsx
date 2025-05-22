import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description:
    "座間市民混声合唱団へのお問い合わせはこちらから。入団に関するご質問や、演奏会のご案内など、お気軽にお問い合わせください。",
  openGraph: {
    title: "お問い合わせ",
    description:
      "座間市民混声合唱団へのお問い合わせはこちらから。入団に関するご質問や、演奏会のご案内など、お気軽にお問い合わせください。",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
