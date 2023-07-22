import { TheHeader } from '@/components/TheHeader'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { TheFooter } from '@/components/TheFooter'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next App Zhekka',
  description: 'next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <main className="flex items-center justify-between p-12">

          <TheHeader />
          {children}
          <TheFooter />
        </main>
      </body>
    </html>
  )
}
