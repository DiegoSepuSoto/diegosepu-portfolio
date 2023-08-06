import './globals.css'
import type { Metadata } from 'next'
import { Ubuntu } from 'next/font/google'

export const metadata: Metadata = {
  title: 'Diego Sepúlveda\'s Portfolio',
  description: 'Everyone told me to make a portfoi',
}

const ubuntuFont = Ubuntu({weight: "400", style: 'normal', subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ubuntuFont.className}>{children}</body>
    </html>
  )
}
