import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import { ThemeProvider } from '@/components/theme-provider'

import '@/styles/globals.css'
import { ResumeSidebar } from '@/components/resume-sidebar'
import { TooltipProvider } from '@/components/ui/tooltip'
import { MenuSidebar } from '@/components/menu-sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider>
            <div className="flex">
              <ResumeSidebar />
              {children}
              <MenuSidebar />
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
