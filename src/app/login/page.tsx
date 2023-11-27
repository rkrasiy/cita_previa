'use client'

import AuthForm from "../components/auth-form"


type Props = {
  searchParams?: Record<'callbackUrl' | 'error', string>
}

export default function LoginPage(props: Props){
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <AuthForm
        error={props.searchParams?.error} />
    </div>
  )
}