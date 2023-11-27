'use client'

import Link from 'next/link'
import AuthButton from '../components/auth-button'


function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <div className='flex flex-grow'>
      <Link href="/">Menu</Link>
      <div className='w-full'>
        <AuthButton />
        {children}
      </div>
    </div>
  )
}

export default RootLayout