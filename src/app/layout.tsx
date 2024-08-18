import type { Metadata } from 'next'
import { Inter, Koulen } from 'next/font/google'
import './globals.css'
import PrelineScript from './components/PrelineScript'
import 'dotenv/config'

const inter = Inter({ subsets: ['latin'],variable: "--font-inter" })
const koulen = Koulen({
  subsets: ['khmer'],
  weight:['400'],
  variable: "--font-koulen"
})

export const metadata: Metadata = {
  title: {
    default: 'Esite Jeremiah Tam',
    template: '%s | Esite Jeremiah Tam',
  },
  description: 'Full stack developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${koulen.variable} ${inter}`}>
      <body>{children}</body>
      <PrelineScript />
    </html>
  )
}
