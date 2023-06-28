import './globals.css'
import { Inter } from 'next/font/google'

import type { Metadata } from 'next'
import NavBar from './NavBar/page'
import Footer from './footer'
import ScrollToTop from '@/service/scrollToTop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nasa API Hub',
  description: 'Welcome page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <NavBar />
        <div className="overflow-hidden" id='stars'></div>
        {children}
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
