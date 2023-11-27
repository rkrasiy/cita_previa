// import { isAuthenticated } from "./app/utils/auth";
// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";

// const protectedRoutes = ["/dashboard"];

// export default function middleware(req: NextRequest) {
//   const {isAuth} = isAuthenticated()
//   if (!isAuth && protectedRoutes.includes(req.nextUrl.pathname)) {
//     const absoluteURL = new URL("/", req.nextUrl.origin);
//     const path = absoluteURL.toString() + "login"
//     return NextResponse.redirect(path);
//   }
// }

import { withAuth } from "next-auth/middleware"

export default withAuth(
  function middleware (req) {
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        console.log("TOKEN:   ", token)
        if (
          req.nextUrl.pathname.startsWith('/dashboard') &&
          token === null
        ) {
          return false
        }
        return true
      }
    }
  }
)