import { ReactNode } from 'react'
import { Flex, Heading } from '@chakra-ui/layout'

import { Header } from './Header'
import { Container } from './Container'

interface IPageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: IPageLayoutProps) {
  return (
    <Flex direction="column" minHeight="100vh">
      <Header />
      <Container as="main">{children}</Container>
      <Heading>Footer</Heading>
      {/* <Footer /> */}
    </Flex>
  )
}
