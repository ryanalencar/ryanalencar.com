import { DefaultSeoProps } from 'next-seo'

const title = 'Ryan Alencar - Software Engineer'
const description =
  'Software Engineer who uses technology to boost the world with great experiences.'
const url = 'https://ryanalencar.com'

export const NEXT_SEO_DEFAULT: DefaultSeoProps = {
  title,
  defaultTitle: title,
  description,
  canonical: url,
  openGraph: {
    url,
    type: 'website',
    title,
    locale: 'en-CA',
    description,
    profile: {
      firstName: 'Ryan',
      lastName: 'Alencar',
      username: 'ryanalencar',
      gender: 'male',
    },
    siteName: 'Ryan Alencar Portfolio',
  },
}
