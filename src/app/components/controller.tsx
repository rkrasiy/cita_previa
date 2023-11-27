'use client'
import { usePathname } from "next/navigation"
import Header from "./header"
import Footer from "./footer"



export default function ControllerPage({children}:{children: React.ReactNode}) {
  const pathname = usePathname()

  if(pathname === "/dashboard")
    return <>{children}</>
  
  return (
    <>
      <Header />
        <main className='flex-grow mt-12'>
          {children}
        </main>
      <Footer />
    </>
  )
}