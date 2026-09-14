import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(req: NextRequest) {
  const force = req.nextUrl.searchParams.get("force");
  if (force) {
    const [country, region] = force.split(":");
    return NextResponse.json({ country: country || null, region: region || null });
  }
  return NextResponse.json({
    country: req.headers.get("x-vercel-ip-country") ?? null,
    region: req.headers.get("x-vercel-ip-country-region") ?? null,
  });
}
