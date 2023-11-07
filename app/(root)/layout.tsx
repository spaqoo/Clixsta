"use client"
import Navbar from '@/components/Navbar'
import Navbar2 from '@/components/Navbar'
import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="dark:bg-stone-900">
        <ThemeProvider enableSystem={true} attribute="class">
          {/* <Navbar /> */}
          <Navbar2 />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}