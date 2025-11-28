import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const payload = await request.json();

  // Placeholder persistence. In production, send to CRM, email, or database.
  console.log("Contact submission", payload);

  return NextResponse.json({ ok: true });
}
