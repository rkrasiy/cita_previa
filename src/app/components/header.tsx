'use client'
import Image from "next/image"
import { FC, ReactNode } from "react"
import LogoWeb from "./logo-web"
interface Props {
  children: ReactNode
}

 const Header:FC<Props> = ({ children }) => {
  return (
    <header className="shadow-1 bg-blue-100 shadow-md fixed w-full">
      <div className="w-full max-w-screen-xl xl:mx-auto flex items-center">
        <LogoWeb />
        { children }
      </div>
    </header>
  )
}

export default Header