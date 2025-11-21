import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_ANON!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const city = searchParams.get('city');

  if (!city) {
    return NextResponse.json({ error: "City parameter required" }, { status: 400 });
  }

  try {
    // For demo, return mock data based on city
    // In real implementation, query city_symbiosphere table
    const mockData = {
      Delhi: { color: '#ff6b6b', vibration: 1.5 },
      Mumbai: { color: '#56c8ff', vibration: 1.2 },
      Darjeeling: { color: '#20e07a', vibration: 0.8 }
    };

    const data = mockData[city as keyof typeof mockData] || { color: '#ffd265', vibration: 1.0 };

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("SymbioSphere city API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}