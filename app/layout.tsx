import React from "react"
import type { Metadata } from 'next'
import { Playfair_Display, Source_Sans_3 } from 'next/font/google'

import './globals.css'
import { Toaster } from '@/components/ui/toaster'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-sans' })

export const metadata: Metadata = {
  title: 'Caderno de Perguntas de Gente Grande',
  description: '100 perguntas reflexivas para o seu dia a dia - Caderno de Perguntas de Gente Grande',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${playfair.variable} ${sourceSans.variable} font-sans antialiased`}>{children}
        <Toaster />
      </body>
    </html>
  )
}
