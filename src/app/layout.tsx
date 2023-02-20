import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

import { NEXT_SEO_DEFAULT } from '@/config/SEO'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <NextSeo useAppDir {...NEXT_SEO_DEFAULT} />
      </head>
      <body>{children}</body>
    </html>
  )
}
