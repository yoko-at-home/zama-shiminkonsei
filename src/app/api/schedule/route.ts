import { NextResponse } from "next/server";
import { client } from "@/lib/microcms";

export async function GET() {
  try {
    const data = await client.get({
      endpoint: "schedule",
      queries: {
        fields:
          "id,createdAt,updatedAt,publishedAt,revisedAt,image,description",
      },
    });

    // console.log("API Response:", data);

    if (!data) {
      return NextResponse.json(
        { error: "スケジュールが見つかりません" },
        { status: 404 }
      );
    }

    if (!data.description) {
      return NextResponse.json(
        { error: "スケジュールのデータが不完全です" },
        { status: 400 }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch schedule:", error);
    return NextResponse.json(
      { error: "スケジュールの取得に失敗しました" },
      { status: 500 }
    );
  }
}
