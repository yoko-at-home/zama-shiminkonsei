import "@/styles/style.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";

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
    images: ["/static/ogp.jpg"],
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
      <head>{/* Add any additional head elements here */}</head>
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
