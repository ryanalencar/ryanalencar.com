import { ReactNode } from 'react'
import { Container, Flex, Heading } from '@chakra-ui/layout'

interface IPageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: IPageLayoutProps) {
  return (
    <Flex direction="column" minHeight="100vh">
      {/* <Header /> */}
      <Heading>Header</Heading>
      <Container as="main" maxW="container.lg">
        {children}
      </Container>
      <Heading>Footer</Heading>
      {/* <Footer /> */}
    </Flex>
  )
}
