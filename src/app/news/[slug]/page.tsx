import type { Metadata } from "next";
import Link from "next/link";
import { mockNews } from "@/lib/mockNews.server";

// TODO: 将来的にmicroCMSから取得

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const news = mockNews.find((n) => n.slug === params.slug);
  if (!news) {
    return {
      title: "お知らせが見つかりません | 座間市民混声合唱団",
    };
  }

  return {
    title: `${news.title} | 座間市民混声合唱団`,
    description: news.content.split("\n")[0],
  };
}

export default function NewsArticlePage({ params }: Props) {
  const news = mockNews.find((n) => n.slug === params.slug);

  if (!news) {
    return (
      <div style={{ padding: "2rem" }}>
        <h1>お知らせが見つかりません</h1>
        <Link
          href="/news"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            color: "#9e8c07",
            textDecoration: "none",
          }}
        >
          ← お知らせ一覧
        </Link>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem" }}>
      <article style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link
          href="/news"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            color: "#9e8c07",
            textDecoration: "none",
          }}
        >
          ← お知らせ一覧
        </Link>
        <h1 style={{ marginBottom: "1rem" }}>{news.title}</h1>
        <time
          style={{
            display: "block",
            fontSize: "0.875rem",
            color: "#666",
            marginBottom: "2rem",
          }}
        >
          {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
        </time>
        <div
          style={{
            whiteSpace: "pre-wrap",
            lineHeight: "1.8",
          }}
        >
          {news.content}
        </div>
      </article>
    </div>
  );
}
