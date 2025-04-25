import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Log API requests for debugging
  if (request.nextUrl.pathname.startsWith("/api/")) {
    console.log(`Middleware: ${request.method} request to ${request.nextUrl.pathname}`)

    // For POST requests, log additional information
    if (request.method === "POST") {
      console.log("Headers:", Object.fromEntries(request.headers.entries()))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/api/:path*", "/jobs/apply/:path*"],
}
