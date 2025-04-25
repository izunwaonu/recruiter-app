import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Log API requests for debugging
  if (request.nextUrl.pathname.startsWith("/api/")) {
    console.log(`Middleware: ${request.method} request to ${request.nextUrl.pathname}`)
  }

  return NextResponse.next()
}
