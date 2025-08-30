"use client";

import { useEffect, useState } from "react";
import type { Schedule as ScheduleType } from "@/lib/microcms";
import Image from "next/image";

export default function Schedule() {
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


  return (
    <div style={{ padding: "2rem" }}>
      {schedule.image?.url && (
        <div>
          <Image
            src={schedule.image.url}
            alt="Schedule"
            width={schedule.image.width}
            height={schedule.image.height}
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
            }}
            priority
          />
        </div>
      )}
      <div
        style={{
          whiteSpace: "pre-wrap",
          lineHeight: "1.8",
          marginTop: "2rem",
        }}
      >
        {schedule.description}
      </div>
    </div>
  );
}
