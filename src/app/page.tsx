import Hero from "@/components/Hero";
import NewsForTopPage from "@/components/NewsForTopPage";
import ScheduleForTopPage from "@/components/ScheduleForTopPage";

export default function Home() {
  return (
    <main className="bg-yellow-500">
      <Hero />
      <NewsForTopPage />
      <ScheduleForTopPage />
    </main>
  );
}
