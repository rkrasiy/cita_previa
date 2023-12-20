"use client"

import React from "react"
import { useRouter } from "next/navigation"
import Button from "./button"
import { signOut, useSession } from "next-auth/react"


export default function AuthButton() {
  const { data, status } = useSession()
  const navigate = useRouter()
  const [isOpen, setIsOpen] = React.useState<boolean>(false)

  const openHandler = () => setIsOpen(true)
  const closeHandler = () => setIsOpen(false)

  if (status === 'unauthenticated') {
    return (
      <Button onClick={() => navigate.push("/login")}>Sign in</Button>
    )
  }

  const links:Array<{text: string, action: ()=>void}> = [
    {text: "Dashboard", action: () => navigate.push("/dashboard")}
  ]

  console.log(data)
  
  return (
    <button 
      onClick={openHandler}
      onBlur={closeHandler}
      className="relative inline-block ml-auto px-4">
      <span className="text-sm">
       {data?.user.name}
      </span>
      {
        isOpen && (
          <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 mt-2 overflow-hidden right-4">
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