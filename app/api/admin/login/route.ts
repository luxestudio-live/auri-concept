import { NextRequest, NextResponse } from "next/server"

// In a production environment, use environment variables and proper encryption
const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "admin123", // Change this to a secure password
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { username, password } = body

    // Validate credentials
    if (
      username === ADMIN_CREDENTIALS.username &&
      password === ADMIN_CREDENTIALS.password
    ) {
      // Generate a simple token (in production, use JWT with proper signing)
      const token = Buffer.from(`${username}:${Date.now()}`).toString("base64")

      return NextResponse.json(
        { 
          success: true, 
          token,
          message: "Login successful" 
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: "Invalid username or password" },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: "An error occurred during login" },
      { status: 500 }
    )
  }
}
