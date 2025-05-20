"use client";

import { useState } from "react";
import Image from "next/image";

type GalleryItem = {
  id: number;
  src: string;
  alt: string;
  description: string;
  category: "concert" | "party";
  date: string;
};

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    src: "/static/gallery/concert1.png",
    alt: "ゴールデンウェーブシニア音楽祭",
    description: "2023年10月 みなとみらい大ホール",
    category: "concert",
    date: "2023-4-17",
  },
  {
    id: 2,
    src: "/static/gallery/concert2.jpg",
    alt: "第8回定期演奏会",
    description: "ハーモニーホール座間にて開催",
    category: "concert",
    date: "2018",
  },
  {
    id: 3,
    src: "/static/gallery/concert3.jpg",
    alt: "第8回定期演奏会",
    description: "ハーモニーホール座間にて開催",
    category: "concert",
    date: "2018",
  },
  {
    id: 4,
    src: "/static/gallery/party1.jpg",
    alt: "演奏会後の打ち上げ風景",
    description: "第8回定期演奏会",
    category: "party",
    date: "2023-12",
  },
  // 他の画像も同様に追加
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "concert" | "party"
  >("all");

  const filteredItems =
    selectedCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  const handleKeyDown = (e: React.KeyboardEvent, action: () => void) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div>
      <section>
        <h2>
          Gallery<span>ギャラリー</span>
        </h2>

        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "2rem" }}>
          {/* カテゴリーフィルター */}
          <div style={{ marginBottom: "2rem", textAlign: "center" }}>
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              onKeyDown={(e) =>
                handleKeyDown(e, () => setSelectedCategory("all"))
              }
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
              onKeyDown={(e) =>
                handleKeyDown(e, () => setSelectedCategory("concert"))
              }
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
              onKeyDown={(e) =>
                handleKeyDown(e, () => setSelectedCategory("party"))
              }
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

          {/* ギャラリーグリッド */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            {filteredItems.map((item) => (
              <div
                key={item.id}
                style={{
                  cursor: "pointer",
                  borderRadius: "0.5rem",
                  overflow: "hidden",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
                onClick={() => setSelectedImage(item)}
                onKeyDown={(e) =>
                  handleKeyDown(e, () => setSelectedImage(item))
                }
                role="button"
                tabIndex={0}
              >
                <div style={{ position: "relative", aspectRatio: "4/3" }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: "1rem" }}>
                  <h3 style={{ fontSize: "1.2rem", marginBottom: "0.5rem" }}>
                    {item.alt}
                  </h3>
                  <p style={{ color: "#666", fontSize: "0.9rem" }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* モーダル */}
        {selectedImage && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 1000,
              padding: "2rem",
            }}
            onClick={() => setSelectedImage(null)}
            onKeyDown={(e) => handleKeyDown(e, () => setSelectedImage(null))}
            role="button"
            tabIndex={0}
          >
            <div
              style={{
                maxWidth: "90vw",
                maxHeight: "90vh",
                position: "relative",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                onKeyDown={(e) =>
                  handleKeyDown(e, () => setSelectedImage(null))
                }
                style={{
                  position: "absolute",
                  top: "-2rem",
                  right: "-2rem",
                  backgroundColor: "transparent",
                  border: "none",
                  color: "white",
                  fontSize: "2rem",
                  cursor: "pointer",
                  padding: "0.5rem",
                }}
                aria-label="モーダルを閉じる"
              >
                ×
              </button>
              <div
                style={{ position: "relative", width: "100%", height: "80vh" }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div
                style={{
                  backgroundColor: "white",
                  padding: "1rem",
                  marginTop: "1rem",
                  borderRadius: "0.5rem",
                }}
              >
                <h3 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
                  {selectedImage.alt}
                </h3>
                <p style={{ color: "#666" }}>{selectedImage.description}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
