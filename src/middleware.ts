import { NextRequestWithAuth, withAuth } from "next-auth/middleware"
import { NextResponse } from "next/server";

export default withAuth(
  function middleware (request: NextRequestWithAuth) {
    const session = request?.nextauth?.token;

    if (request.nextUrl.pathname === '/') 
      return NextResponse.next()
    if (!session && request.nextUrl.pathname !== '/login') 
      return NextResponse.redirect(new URL('/login', request.url))
    if (session && request.nextUrl.pathname === '/login')
      return NextResponse.redirect(new URL('/dashboard', request.url))

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ req, token }) => {
        if (
          req.nextUrl.pathname.startsWith('/dashboard') &&
          token === null
        ) {
          return false
        }
        return true
      }
    }
  },
)