import { NextResponse } from "next/server";
import { client } from "@/lib/microcms";

export async function GET() {
  try {
    const data = await client.get({
      endpoint: "news",
      queries: {
        fields: "id,title,subTitle,publishedAt",
        filters: "pin[equals]true",
        orders: "-publishedAt",
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error("Failed to fetch pinned news:", error);
    return NextResponse.json(
      { error: "お知らせの取得に失敗しました" },
      { status: 500 }
    );
  }
}
