import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()
    // Log or forward to email/CRM here in the future
    console.log("[v0] Contact submission:", data)
    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 })
  }
}
