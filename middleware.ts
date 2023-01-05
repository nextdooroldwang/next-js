import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest, response: NextResponse) {
  console.log(request);
}

export const config = {
  matcher: "/api/:function*",
};
