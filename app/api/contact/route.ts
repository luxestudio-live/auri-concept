import { NextResponse } from "next/server"
import { db } from "@/lib/firebase"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"

type ContactPayload = {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject?: string
  message: string
}

export async function POST(request: Request) {
  try {
    const data = (await request.json()) as Partial<ContactPayload>

    if (!data.firstName || !data.lastName || !data.email || !data.phone || !data.message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    await addDoc(collection(db, "contacts"), {
      ...data,
      createdAt: serverTimestamp(),
      status: "new",
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("[contact] error saving message", error)
    return NextResponse.json({ ok: false, error: "Failed to save message" }, { status: 500 })
  }
}
