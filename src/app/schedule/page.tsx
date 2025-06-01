import Schedule from "@/components/Schedule";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <article style={{ maxWidth: "800px", margin: "0 auto" }}>
        <Link
          href="/"
          style={{
            display: "inline-block",
            marginBottom: "2rem",
            color: "#9e8c07",
            textDecoration: "none",
          }}
        >
          ← ホームへ
        </Link>
        <h1 style={{ marginBottom: "1rem" }}>練習スケジュール</h1>
        <Schedule />
      </article>
    </div>
  );
};

export default page;
