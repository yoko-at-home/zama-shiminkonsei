"use client";

export const ScrollToTop = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "8px",
        right: "8px",
        zIndex: 50,
      }}
    >
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        style={{
          backgroundColor: "#f9f4c6",
          padding: "1rem",
          borderRadius: "9999px",
          boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1)",
          marginRight: "0.5rem",
        }}
        aria-label="ページトップへ"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          style={{
            width: "1.5rem",
            height: "1.5rem",
          }}
          role="img"
          aria-hidden="true"
        >
          <title>ページトップへ</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};
