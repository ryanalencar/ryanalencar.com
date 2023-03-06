import { ReactNode } from 'react'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html>
      <head>{/* <NextSeo useAppDir {...NEXT_SEO_DEFAULT} /> */}</head>
      <body>
        {/* <AppWrapper>{children}</AppWrapper> */}
        {children}
      </body>
    </html>
  )
}
