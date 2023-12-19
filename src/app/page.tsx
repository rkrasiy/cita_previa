'use client'
import Link from "next/link"
import AuthButton from "./components/auth-button"
import Footer from "./components/footer"
import Header from "./components/header"
import { MenuType } from "./interfaces/menu.interface"
import { usePathname } from "next/navigation"

const Section = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <div className='h-screen bg-slate-300 flex items-center justify-center'>
      {children}
    </div>
  )
}

const menu: MenuType[] = [
  { route: "/", name: "Home" },
  { route: "/contact", name: "Contact us" },
  { route: "/pricing", name: "Pricing" },
  { route: "/booking", name: "Booking" },
]

export default function Home() {
  const pathname = usePathname()

  return (
    <>
      <Header>
        <nav className="inline-flex justify-end">
            {
              menu.map(({ route, name }) => (
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
      </Header>
      <main className='flex-grow mt-12'>
        {
          ["1", "2", "3", "4"].map(item => (
            <Section key={item}><h1>{item}</h1></Section>
          ))
        }
      </main>
      <Footer />
    </>
  )
}