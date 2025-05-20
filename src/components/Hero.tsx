"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    id: 1,
    src: "/static/hero/1.jpg",
    alt: "合唱団の練習風景1",
  },
  {
    id: 2,
    src: "/static/hero/2.jpg",
    alt: "合唱団の練習風景2",
  },
  {
    id: 3,
    src: "/static/hero/3.jpg",
    alt: "合唱団の練習風景3",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "70vh",
        overflow: "hidden",
      }}
    >
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: currentSlide === index ? 1 : 0,
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            style={{
              objectFit: "cover",
            }}
            priority={index === 0}
          />
        </div>
      ))}

      {/* フレーム画像 */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 1,
          pointerEvents: "none", // クリックイベントを下の要素に通す
        }}
      >
        <Image
          src="/static/hero/frame.png"
          alt="フレーム"
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: "0.5rem",
          zIndex: 2, // フレームの上に表示
        }}
      >
        {slides.map((slide) => (
          <button
            key={slide.id}
            type="button"
            onClick={() =>
              setCurrentSlide(slides.findIndex((s) => s.id === slide.id))
            }
            style={{
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              border: "none",
              backgroundColor:
                currentSlide === slides.findIndex((s) => s.id === slide.id)
                  ? "#f9f4c6"
                  : "white",
              cursor: "pointer",
              opacity: 0.8,
              transition: "all 0.3s ease",
            }}
            aria-label={`スライド${slide.id}に移動`}
          />
        ))}
      </div>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: 0,
          right: 0,
          transform: "translateY(-50%)",
          display: "flex",
          justifyContent: "space-between",
          padding: "0 1rem",
          zIndex: 2, // フレームの上に表示
        }}
      >
        <button
          type="button"
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          aria-label="前のスライド"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            color: "white",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            fontSize: "1.5rem",
          }}
          aria-label="次のスライド"
        >
          ›
        </button>
      </div>
    </div>
  );
}
