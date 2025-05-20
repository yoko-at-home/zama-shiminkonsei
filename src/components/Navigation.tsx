"use client";

import { useState } from "react";
import Link from "next/link";

export const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/about", label: "座間市民混声合唱団について" },
  { href: "/works", label: "練習中の曲・過去取り組んだ曲" },
  { href: "/faq", label: "よく頂く質問" },
  { href: "/access", label: "活動拠点" },
  { href: "/contact", label: "お問い合わせ" },
  { href: "/gallery", label: "ギャラリー" },
];

export const Navigation = () => {
  const [opened, setOpened] = useState(false);
  const title = opened ? "メニューを閉じる" : "メニューを開く";

  return (
    <div style={{ position: "relative" }}>
      <nav>
        <button
          type="button"
          onClick={() => setOpened((o) => !o)}
          style={{
            position: "fixed",
            zIndex: 101,
            right: "30px",
            top: "30px",
            width: "60px",
            height: "35px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "10px",
            cursor: "pointer",
            border: "none",
            backgroundColor: "transparent",
          }}
          aria-label={title}
        >
          <span
            style={{
              display: "block",
              width: "100%",
              height: "1.5px",
              backgroundColor: "black",
              transform: opened ? "rotate(45deg) translateY(5px)" : "none",
              transition: "all 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "100%",
              height: "1.5px",
              backgroundColor: "black",
              opacity: opened ? 0 : 1,
              transition: "all 0.3s",
            }}
          />
          <span
            style={{
              display: "block",
              width: "100%",
              height: "1.5px",
              backgroundColor: "black",
              transform: opened ? "rotate(-45deg) translateY(-5px)" : "none",
              transition: "all 0.3s",
            }}
          />
        </button>

        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 100,
            opacity: opened ? 1 : 0,
            visibility: opened ? "visible" : "hidden",
            transition: "all 0.2s",
          }}
        >
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(0, 0, 0, 0.8)",
            }}
            onClick={() => setOpened(false)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setOpened(false);
              }
            }}
            role="button"
            tabIndex={0}
          />
          <div
            style={{
              position: "fixed",
              inset: 0,
              backgroundColor: "rgba(158, 140, 7, 0.95)",
              overflow: "auto",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <div style={{ padding: "2rem" }}>
              {navItems.map(({ href, label }) => (
                <Link key={href} href={href} style={{ textDecoration: "none" }}>
                  <button
                    type="button"
                    onClick={() => setOpened(false)}
                    style={{
                      display: "block",
                      width: "100%",
                      padding: "1.25rem",
                      fontSize: "1.25rem",
                      fontWeight: 600,
                      color: "#fff",
                      backgroundColor: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {label}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
