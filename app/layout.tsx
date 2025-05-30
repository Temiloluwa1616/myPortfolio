import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hardware & Software Engineer Portfolio',
  description: 'Portfolio website showcasing hardware and software engineering projects',
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
