import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "よく頂く質問",
  description:
    "座間市民混声合唱団に関するよくある質問と回答をご紹介します。入団条件、練習日程、費用など、合唱団への参加をご検討の方に役立つ情報を掲載しています。",
  openGraph: {
    title: "よく頂く質問",
    description:
      "座間市民混声合唱団に関するよくある質問と回答をご紹介します。入団条件、練習日程、費用など、合唱団への参加をご検討の方に役立つ情報を掲載しています。",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
