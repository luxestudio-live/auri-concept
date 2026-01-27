import { NextRequest, NextResponse } from "next/server"
import { cloudinary } from "@/lib/cloudinary"

export const runtime = "nodejs"

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData()
    const file = formData.get("file")

    if (!file || !(file instanceof Blob)) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Check file size - Vercel has limits
    if (file.size > 10000000) {
      return NextResponse.json({ error: "File too large. Maximum 10MB." }, { status: 413 })
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const uploadResult = await new Promise<{ url: string; public_id: string }>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: "auri-concept/products",
          resource_type: "image",
          overwrite: false,
          max_file_size: 10000000,
        },
        (error, result) => {
          if (error || !result) {
            return reject(error || new Error("Upload failed"))
          }
          resolve({ url: result.secure_url, public_id: result.public_id })
        }
      )

      uploadStream.end(buffer)
    })

    return NextResponse.json(uploadResult)
  } catch (error) {
    console.error("Cloudinary upload error:", error)
    return NextResponse.json({ error: "Upload failed" }, { status: 500 })
  }
}
