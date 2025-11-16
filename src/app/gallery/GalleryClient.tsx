"use client";

import { useState } from "react";
import Image from "next/image";
import type { Gallery } from "@/lib/microcms";

type Category = "all" | "concert" | "party";

type Props = {
  initialGalleries: Gallery[];
  totalCount: number;
};

export default function GalleryClient({ initialGalleries, totalCount }: Props) {
  const itemsPerPage = 12; // 1ページあたりの表示件数
  const [galleries, setGalleries] = useState<Gallery[]>(initialGalleries);
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const filteredGalleries =
    selectedCategory === "all"
      ? galleries
      : galleries.filter((gallery) => gallery.category === selectedCategory);

  const totalPages = Math.ceil(totalCount / itemsPerPage);

  const fetchGalleries = async (page: number, category: Category) => {
    setLoading(true);
    const offset = (page - 1) * itemsPerPage;
    const response = await fetch(
      `/api/gallery?offset=${offset}&limit=${itemsPerPage}&category=${category}`
    );
    const data = await response.json();
    setGalleries(data.contents as Gallery[]);
    setLoading(false);
  };

  const handleNextPage = async () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      await fetchGalleries(nextPage, selectedCategory);
      setCurrentPage(nextPage);
    }
  };

  const handlePrevPage = async () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      await fetchGalleries(prevPage, selectedCategory);
      setCurrentPage(prevPage);
    }
  };

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>ギャラリー</h1>

      {/* カテゴリーフィルター */}
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("all");
            setCurrentPage(1);
            fetchGalleries(1, "all");
          }}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor:
              selectedCategory === "all" ? "#f9f4c6" : "transparent",
            border: "1px solid #ddd",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          すべて
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("concert");
            setCurrentPage(1);
            fetchGalleries(1, "concert");
          }}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor:
              selectedCategory === "concert" ? "#f9f4c6" : "transparent",
            border: "1px solid #ddd",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          演奏会
        </button>
        <button
          type="button"
          onClick={() => {
            setSelectedCategory("party");
            setCurrentPage(1);
            fetchGalleries(1, "party");
          }}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor:
              selectedCategory === "party" ? "#f9f4c6" : "transparent",
            border: "1px solid #ddd",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          親睦会
        </button>
      </div>

      {loading ? (
        <div>Loading...</div>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {filteredGalleries.map((gallery) => (
            <div
              key={gallery.id}
              style={{
                backgroundColor: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ position: "relative", aspectRatio: "4/3" }}>
                <Image
                  src={gallery.src.url}
                  alt={gallery.alt}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ padding: "1rem" }}>
                <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>
                  {gallery.alt}
                </p>
                {gallery.description && (
                  <p
                    style={{
                      margin: "0",
                      fontSize: "0.875rem",
                      color: "#666",
                    }}
                  >
                    {gallery.description}
                  </p>
                )}
                <p
                  style={{
                    margin: "0.5rem 0 0 0",
                    fontSize: "0.875rem",
                    color: "#666",
                  }}
                >
                  {gallery.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ページネーションコントロール */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        <button
          type="button"
          onClick={handlePrevPage}
          disabled={currentPage === 1 || loading}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor:
              currentPage === 1 || loading ? "#e0e0e0" : "#f9f4c6",
            border: "1px solid #ddd",
            borderRadius: "0.25rem",
            cursor: currentPage === 1 || loading ? "not-allowed" : "pointer",
          }}
        >
          前へ
        </button>
        <span style={{ padding: "0.5rem 1rem" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button
          type="button"
          onClick={handleNextPage}
          disabled={currentPage === totalPages || loading}
          style={{
            padding: "0.5rem 1rem",
            margin: "0 0.5rem",
            backgroundColor:
              currentPage === totalPages || loading ? "#e0e0e0" : "#f9f4c6",
            border: "1px solid #ddd",
            borderRadius: "0.25rem",
            cursor:
              currentPage === totalPages || loading ? "not-allowed" : "pointer",
          }}
        >
          次へ
        </button>
      </div>
    </div>
  );
}
