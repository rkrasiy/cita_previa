'use client'
import Image from "next/image"
import { FC, ReactNode } from "react"
interface Props {
  children: ReactNode
}

 const Header:FC<Props> = ({ children }) => {
  return (
    <header className="shadow-1 bg-blue-100 shadow-md fixed w-full">
      <div className="w-full max-w-screen-xl xl:mx-auto">
        <Image src={"./icon.svg"} alt="icon" width={50} height={50} className="inline-block"/>
        { children }
      </div>
    </header>
  )
}

export default Header