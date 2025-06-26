import dynamic from "next/dynamic";

// 動的インポートで重いコンポーネントを遅延読み込み
const Hero = dynamic(() => import("@/components/Hero"), {
  ssr: true,
  loading: () => (
    <div
      style={{
        height: "70vh",
        backgroundColor: "#f9f4c6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: "1.2rem", color: "#666" }}>読み込み中...</div>
    </div>
  ),
});

// NewsForTopPageとScheduleForTopPageはClient Componentとして処理
const NewsForTopPage = dynamic(() => import("@/components/NewsForTopPage"), {
  ssr: true,
  loading: () => (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
      <div
        style={{
          height: "200px",
          backgroundColor: "#fff",
          borderRadius: "8px",
        }}
      />
    </div>
  ),
});

const ScheduleForTopPage = dynamic(
  () => import("@/components/ScheduleForTopPage"),
  {
    ssr: true,
    loading: () => (
      <div style={{ padding: "2rem", backgroundColor: "#f9f9f9" }}>
        <div
          style={{
            height: "120px",
            backgroundColor: "#fff",
            borderRadius: "8px",
          }}
        />
      </div>
    ),
  }
);

export default function Home() {
  return (
    <main className="bg-yellow-500">
      <Hero />
      <NewsForTopPage />
      <ScheduleForTopPage />
    </main>
  );
}
