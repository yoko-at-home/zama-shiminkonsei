"use client";

import { useEffect, useState } from "react";
import type { Schedule as ScheduleType } from "@/lib/microcms";
import Link from "next/link";

export default function ScheduleForTopPage() {
  const [schedule, setSchedule] = useState<ScheduleType | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const response = await fetch("/api/schedule");
        const data = await response.json();

        if (data.error) {
          setError(data.error);
          return;
        }

        setSchedule(data);
      } catch {
        setError("スケジュールの取得に失敗しました");
      }
    };

    fetchSchedule();
  }, []);

  if (error) {
    return (
      <div style={{ padding: "2rem" }}>
        <p style={{ color: "#666" }}>{error}</p>
      </div>
    );
  }

  if (!schedule) {
    return <div>Loading...</div>;
  }

  const formattedDate = new Date(schedule.updatedAt).toLocaleDateString(
    "ja-JP",
    {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    }
  );

  return (
    <div
      style={{
        backgroundColor: "#fff",
        padding: "2rem",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <div className="text-sm text-gray-500">{formattedDate}</div>
      <Link
        href="/schedule"
        className="block no-underline text-gray-900 hover:text-gray-900"
        style={{ textDecoration: "none" }}
      >
        <h3 className="text-xl font-semibold text-gray-900">
          練習スケジュール
        </h3>
        <p className="text-gray-600">練習スケジュールを更新しました</p>
      </Link>
    </div>
  );
}
