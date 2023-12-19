"use client"

import React, { useEffect } from "react"
import { redirect, useRouter } from "next/navigation"
import { Button } from "./button"
import { signOut, useSession } from "next-auth/react"
import Link from "next/link"


export default function AuthButton() {
  const { data, status } = useSession()
  const navigate = useRouter()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const openHandler = () => setIsOpen(!isOpen)
  const closeHandler = () => {
    console.log('Blur')
    setIsOpen(false)
  }

  if (status === 'unauthenticated') {
    return (
      <Button onClick={() => navigate.push("/login")}>Sign in</Button>
    )
  }

  const links:Array<{text: string, action: ()=>void}> = [
    {text: "Dashboard", action: () => navigate.push("/dashboard")}
  ]

  return (
    <button 
      onClick={openHandler}
      onBlur={closeHandler}
      className="relative inline-block">
      <span  className="text-sm">
       {data?.user.name}
      </span>
      {
        isOpen && (
          <div id="dropdown" className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2 overflow-hidden">
            <p className="px-4 py-2">
              {data?.user.name}
            </p>
            <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
              {
                links.map( link => (
                  <li 
                    key={link.text} 
                    onClick={link.action} 
                    className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
                      {link.text}</li>
                ))
              }              
            </ul>
            <div onClick={()=>signOut()} className="text-sx text-red-500 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white cursor-pointer">
              Sign out
            </div>
          </div>
        )
      }
    </button>
  )
}