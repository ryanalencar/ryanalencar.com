import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

import { NEXT_SEO_DEFAULT } from '@/config/SEO'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <NextSeo useAppDir {...NEXT_SEO_DEFAULT} />
      </head>
      <body>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </body>
    </html>
  )
}
