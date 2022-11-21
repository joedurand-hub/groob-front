import { NextResponse } from "next/server"

export function middleware(request) {
    const token = request.cookies.get("authtoken")
    if (token === undefined) {
        return NextResponse.redirect(new URL("/register", request.url))
    }
    return NextResponse.next()
}

export const config = {
    matcher: ["/feed", "/messages/:path*", "/notifications/:path*", 
    "/user/:path*", 
    "/payments/:path*", "/search/:path*", "/verify-account/:path*", "/report-errors"]
}
// Solo permito el ingreso a:
// /index
// /feed/:id
// /user/:id
