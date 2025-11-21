// app/api/gaialink/city/route.ts
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
    // In real implementation, query city_gaialink table
    const mockData = {
      Delhi: { variation: 0.7 },
      Mumbai: { variation: 0.4 },
      Darjeeling: { variation: 0.2 }
    };

    const data = mockData[city as keyof typeof mockData] || { variation: 0.5 };

    return NextResponse.json(data);
  } catch (err: any) {
    console.error("GaiaLink city API error:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}

