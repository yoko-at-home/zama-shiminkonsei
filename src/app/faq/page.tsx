"use client";

import { useState } from "react";

const faqItems = [
  {
    id: 1,
    question: "合唱団の活動頻度はどのくらいですか？",
    answer:
      "月2回、日曜日の午後1時から3時半まで、座間市公民館、立野台コミュニティセンター北地区文化センターで練習を行っています。",
  },
  {
    id: 2,
    question: "初心者でも参加できますか？",
    answer:
      "はい、大歓迎です。経験の有無に関わらず、合唱に興味のある方ならどなたでも参加できます。",
  },
  {
    id: 3,
    question: "年齢制限はありますか？",
    answer:
      "年齢制限は設けていません。現在は20代から80代までの幅広い年齢層の方が活動しています。",
  },
  {
    id: 4,
    question: "楽譜は読めないといけませんか？",
    answer:
      "基本的な楽譜の読み方は練習の中で学べます。最初は不安でも、先輩方が丁寧にサポートします。",
  },
  {
    id: 5,
    question: "定期演奏会はいつ開催されますか？",
    answer:
      "3年に1回、10月頃にハーモニーホール座間で定期演奏会を開催しています。",
  },
  {
    id: 6,
    question: "団費はいくらですか",
    answer: "月額3500円です。ホールでの演奏会には参加費が必要です。",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null);

  return (
    <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        FAQ<span>よくある質問</span>
      </h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {faqItems.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            <button
              type="button"
              onClick={() => setOpenId(openId === item.id ? null : item.id)}
              style={{
                width: "100%",
                padding: "1rem",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#f9f4c6",
                border: "none",
                cursor: "pointer",
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "left",
                color: "#777",
                textDecoration: "none",
                WebkitTapHighlightColor: "transparent",
              }}
            >
              <span
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <span
                  role="img"
                  aria-label="音符"
                  style={{ fontSize: "1.25rem" }}
                >
                  🎵
                </span>
                {item.question}
              </span>
              <span
                style={{
                  transform:
                    openId === item.id ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s",
                }}
              >
                ▼
              </span>
            </button>
            {openId === item.id && (
              <div
                style={{
                  padding: "1rem",
                  backgroundColor: "white",
                  borderTop: "1px solid #e5e7eb",
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
