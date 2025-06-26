import "@/styles/style.css";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { ScrollToTop } from "@/components/ScrollToTop";

// 動的インポートで重いコンポーネントを遅延読み込み
const Header = dynamic(() => import("@/components/Header"), {
  ssr: true,
  loading: () => (
    <div style={{ height: "100px", backgroundColor: "#f9f4c6" }} />
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: true,
  loading: () => <div style={{ height: "50px", backgroundColor: "#f5f5f5" }} />,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://zama-shiminkonsei.vercel.app"),
  title: {
    default: "座間市民混声合唱団",
    template: "%s | 座間市民混声合唱団",
  },
  description:
    "座間市民混声合唱団の公式サイトです。定期演奏会や練習会の情報、団員募集など、合唱団の活動についてご紹介しています。",
  icons: {
    icon: "/ogp.png",
    shortcut: "/konsei.svg",
    apple: "/konsei.svg",
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: "https://zama-shiminkonsei.vercel.app",
    siteName: "座間市民混声合唱団",
    images: [
      {
        url: "/static/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "座間市民混声合唱団",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "座間市民混声合唱団",
    description:
      "座間市民混声合唱団の公式サイトです。定期演奏会や練習会の情報、団員募集など、合唱団の活動についてご紹介しています。",
    images: ["/static/ogp.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <head>
        <link
          rel="preload"
          as="style"
          href="/_next/static/css/43e7b61d8dbae259.css"
        />
        <link rel="preload" href="/static/hero/1.jpg" as="image" />
      </head>
      <body
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
