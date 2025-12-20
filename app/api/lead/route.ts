import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Hier kun je later opslaan in DB / doorsturen naar Formspree / Mail / CRM
    console.log("NEW LEAD:", body);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (e) {
    console.error("LEAD ERROR:", e);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}