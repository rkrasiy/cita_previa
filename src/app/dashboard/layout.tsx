'use client'

import Link from 'next/link'
import AuthButton from '../components/auth-button'
import { useSession } from 'next-auth/react'
import { FC } from 'react'
import Spinner, { FullPageLoader } from '../components/spinner'
import { BsSearch } from "react-icons/bs"
import Image from 'next/image'
import LogoWeb from '../components/logo-web'

function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return(
    <Auth>
       <div className='flex flex-grow bg-slate-100'>
        <MenuColumn />
        <div className='w-full'>
          <div className='flex p-2 m-4'>
            <BsSearch />
            <AuthButton />
          </div>
          <div className='p-4 rounded-md bg-white border m-4 flex-grow'>
            {children}
          </div>
        </div>
       </div>
    </Auth>
  )
}

const MenuColumn:FC = () => {
  return (
    <div className='w-72 p-4 bg-white border-r'>
      <LogoWeb />
      <Link href="/">Web</Link>
    </div>
  )
}

const Auth:FC<{children: React.ReactNode}> = ({ children }) => {
  const { status } = useSession({ required: true })

  if (status === "loading") {
    return <FullPageLoader />
  }

  return children
}

export default RootLayout