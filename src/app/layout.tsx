import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/navbar'

export const metadata: Metadata = {
  title: 'Ron Sunny Portfolio',
  description: 'React Developer Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white text-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
