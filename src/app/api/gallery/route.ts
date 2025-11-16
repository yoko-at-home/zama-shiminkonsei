import { client } from "@/lib/microcms";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const offset = Number(searchParams.get("offset")) || 0;
  const limit = Number(searchParams.get("limit")) || 12;
  const category = searchParams.get("category");

  const queries: { offset: number; limit: number; filters?: string } = {
    offset,
    limit,
  };

  if (category && category !== "all") {
    queries.filters = `category[equals]${category}`;
  }

  const data = await client.get({
    endpoint: "gallery",
    queries,
  });

  return NextResponse.json(data);
}
