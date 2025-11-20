import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/microcms";
import parse from "html-react-parser";

// TODO: 将来的に microCMS から取得

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const resolvedParams = await params;
    const news = await client.get({
      endpoint: "news",
      contentId: resolvedParams.slug,
    });

    return {
      title: `${news.title} | 座間市民混声合唱団`,
      description: news.subTitle,
    };
  } catch {
    return {
      title: "お知らせが見つかりません | 座間市民混声合唱団",
    };
  }
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;

  try {
    const news = await client.get({
      endpoint: "news",
      contentId: resolvedParams.slug,
    });

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
            公開: {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
            {new Date(news.publishedAt).toLocaleDateString("ja-JP") !==
              new Date(news.revisedAt).toLocaleDateString("ja-JP") &&
              ` (更新: ${new Date(news.revisedAt).toLocaleDateString(
                "ja-JP"
              )})`}
          </time>
          <div
            style={{
              lineHeight: "1.8",
            }}
          >
            {parse(news.content)}
          </div>
        </article>
      </div>
    );
  } catch {
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
}
