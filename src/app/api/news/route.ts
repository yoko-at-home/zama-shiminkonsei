import { NextResponse } from "next/server";
import { client } from "@/lib/microcms";

export async function GET() {
  try {
    const data = await client.get({
      endpoint: "news",
      queries: {
        fields: "id,title,subTitle,publishedAt",
        orders: "-publishedAt",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch news:", error);
    return NextResponse.json(
      { error: "お知らせの取得に失敗しました" },
      { status: 500 }
    );
  }
}
