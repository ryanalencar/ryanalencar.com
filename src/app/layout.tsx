import { NextSeo } from 'next-seo'
import { ReactNode } from 'react'

import { NEXT_SEO_DEFAULT } from '@/config/SEO'
import { AppWrapper } from '@/components/Layout/AppWrapper'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>
        <NextSeo useAppDir {...NEXT_SEO_DEFAULT} />
      </head>
      <body>
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  )
}
