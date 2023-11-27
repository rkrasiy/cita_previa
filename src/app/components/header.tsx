'use client'
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "./button"
import AuthButton from "./auth-button"
import { clientRoutes } from "../lib/menu"

export default function Header() {
  const pathname = usePathname()
  const navigate = useRouter()

  return (
    <header className="shadow-1 bg-blue-100 shadow-md fixed w-full">
      <div className="w-full max-w-screen-xl xl:mx-auto">
        <Image src={"./icon.svg"} alt="icon" width={50} height={50} className="inline-block"/>
        <nav className="inline-flex justify-end">
          {
            clientRoutes.map(({ route, name }) => (
              <Link
                key={name}
                className={`p-3 ${pathname === route ? 'text-blue-500' : 'text-slate-500'}`}
                href={route}
                title={name}>
                {name}</Link>
            ))
          }
        </nav>
        <AuthButton />
      </div>

    </header>
  )
}