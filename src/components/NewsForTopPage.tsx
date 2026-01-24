"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { News } from "@/lib/microcms";

export default function NewsForTopPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const [pinnedResponse, latestResponse] = await Promise.all([
          fetch("/api/news/pinned"),
          fetch("/api/news"),
        ]);

        const pinnedData = await pinnedResponse.json();
        const latestData = await latestResponse.json();

        if (pinnedData.error || latestData.error) {
          setError(pinnedData.error || latestData.error);
          return;
        }

        const combinedNews = [...pinnedData.contents];
        const pinnedIds = new Set(
          pinnedData.contents.map((item: News) => item.id)
        );

        for (const item of latestData.contents) {
          if (combinedNews.length >= 3) break;
          if (!pinnedIds.has(item.id)) {
            combinedNews.push(item);
          }
        }

        setNews(combinedNews);
      } catch {
        setError("お知らせの取得に失敗しました");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return (
      <div style={{ padding: "2rem" }}>
        <p style={{ color: "#666" }}>{error}</p>
      </div>
    );
  }

  if (news.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900">NEWS</h2>
        {news.map((item, index) => (
          <div
            key={item.id}
            className="news-item"
            style={{
              padding: "1.5rem",
              borderRadius: "10px",
              boxShadow: "0 5px 8px rgba(0,0,0,0.1)",
              marginBottom: "1rem",
              opacity: 0,
              transform: "translateY(20px)",
              animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
            }}
          >
            <div className="text-sm">
              {/* {new Date(item.publishedAt)
                .toLocaleDateString("ja-JP", {
                  year: "numeric",
                  month: "numeric",
                  day: "numeric",
                })
                .replace(/\./g, "/")} */}
            </div>
            <Link
              href={`/news/${item.id}`}
              className="block no-underline text-gray-700 hover:text-gray-900"
              style={{ textDecoration: "none" }}
            >
              <h3 className="text-xl font-semibold text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.subTitle}</p>
            </Link>
          </div>
        ))}
      </div>
      <Link
        href="/news"
        style={{
          display: "inline-block",
          marginBottom: "2rem",
          marginLeft: "65%",
          color: "#9e8c07",
          textDecoration: "none",
          textAlign: "center",
          whiteSpace: "nowrap",
        }}
      >
        お知らせ一覧→
      </Link>
    </section>
  );
}
