import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/styles/globals.css'
import MenuDesktop from '@/app/components/menus/MenuDesktop'
import MenuMobile from '@/app/components/menus/MenuMobile'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MenuDesktop />
        <MenuMobile />
        {children}
      </body>
    </html>
  )
}
