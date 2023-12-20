import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Providers from './components/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:  process.env.META_TITLE,
  description: process.env.META_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}