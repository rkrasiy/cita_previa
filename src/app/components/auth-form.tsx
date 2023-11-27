'use client'

import React from "react"
import Link from "next/link"
import { signIn, useSession } from "next-auth/react"
import { Button } from "./button"
import InputField from "./input"

type Props = {
  className?: string
  error?: string
}

const AuthForm = (props: Props) => {
  const userEmail = React.useRef("")
  const pass = React.useRef("")

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    await signIn('credentials',{
      email: userEmail.current,
      password: pass.current,
      redirect: true,
      callbackUrl: "http://localhost:3000/dashboard"
    })

  }

  return (
    <div className="p-4 border container mx-auto max-w-xs rounded-md bg-white">
      <h3 className="mb-8">Sign in</h3>
      <form onSubmit={submitHandler}>
        <InputField
          name="email"
          type="email"
          label="Email"
          onChange={(e) => (userEmail.current = e.target.value)}
        />
        <InputField
          name="password"
          type="password"
          label="Password"
          onChange={(e) => (pass.current = e.target.value)}

        />
        {!!props.error && <p className="bg-red-100 text-red-600 text-center p-2">Authentification failed</p>}
        <div className="flex flex-col gap-3">
          <Button type="submit" className="mr-0" disabled={false}>Sign In</Button>
          <Link href={"/"} className="text-center text-gray-400">Cancel
          </Link>
        </div>
        
      </form>
    </div>
  )
}

export default AuthForm