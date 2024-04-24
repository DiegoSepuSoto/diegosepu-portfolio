import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diego Sepúlveda\'s Portfolio',
  description: 'Everyone told me to make a portfolio, so...',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
