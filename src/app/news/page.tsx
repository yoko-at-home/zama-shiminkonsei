import type { Metadata } from "next";
import Link from "next/link";
import { client } from "@/lib/microcms";

export const metadata: Metadata = {
  title: "お知らせ | 座間市民混声合唱団",
  description: "座間市民混声合唱団からのお知らせ一覧です。",
};

export default async function NewsPage() {
  const news = await client.get({
    endpoint: "news",
    queries: {
      fields: "id,title,subTitle,publishedAt",
      orders: "-publishedAt",
    },
  });

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>お知らせ</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
        {news.contents.map((news) => (
          <article
            key={news.id}
            style={{
              padding: "1.5rem",
              backgroundColor: "#fff",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            <Link
              href={`/news/${news.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <h2 style={{ marginTop: "0.5rem", fontSize: "1.25rem" }}>
                {news.title}
              </h2>
              <time
                style={{
                  display: "block",
                  fontSize: "0.875rem",
                  color: "#666",
                  marginBottom: "0.3rem",
                }}
              >
                {new Date(news.publishedAt).toLocaleDateString("ja-JP")}
              </time>
              {news.subTitle && (
                <p style={{ color: "#333", marginTop: "0.5rem" }}>
                  {news.subTitle}
                </p>
              )}
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
