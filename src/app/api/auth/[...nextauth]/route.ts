import { hashPassword, login } from "@/app/lib/auth"
import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"


const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "email"},
        password: { label: "Password", type: "password"},
      },
      async authorize (credentials, req) {
        if (!credentials?.email || !credentials.password) return null

        try {

          const user = await login(credentials.email, credentials.password)
          
          return user
        } catch (error) {
          console.log(error)
          return null
        }
      },
    })
  ],
  pages: {
    signIn: "/login",
  },
  session: { strategy: "jwt" }
})

export { handler as GET, handler as POST }