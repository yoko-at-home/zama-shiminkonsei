"use client";

import { useState } from "react";
import Image from "next/image";
import type { Gallery } from "@/lib/microcms";

type Category = "all" | "concert" | "party";

export default function GalleryClient({ galleries }: { galleries: Gallery[] }) {
  const [selectedCategory, setSelectedCategory] = useState<Category>("all");

  const filteredGalleries =
    selectedCategory === "all"
      ? galleries
      : galleries.filter((gallery) => gallery.category === selectedCategory);

  return (
    <div style={{ padding: "1rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>ギャラリー</h1>

      {/* カテゴリーフィルター */}
      <div style={{ marginBottom: "2rem", textAlign: "center" }}>
        <button
          type="button"
          onClick={() => setSelectedCategory("all")}
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
          onClick={() => setSelectedCategory("concert")}
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
          onClick={() => setSelectedCategory("party")}
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
                <p style={{ margin: "0", fontSize: "0.875rem", color: "#666" }}>
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
    </div>
  );
}
