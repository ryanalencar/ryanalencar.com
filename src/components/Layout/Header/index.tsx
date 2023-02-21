import { Box, Flex } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/next-js'

import Image from 'next/image'

import { GradientLine } from '@/components/GradientLine'

import { NavBar } from './NavBar'
import { Container } from '../Container'

export function Header() {
  return (
    <Flex
      as="header"
      top={0}
      css={{ backdropFilter: 'saturate(180%) blur(20px)' }}
      width="full"
      zIndex="docked"
      position="sticky"
      direction="column"
    >
      <GradientLine />

      <Container
        w="full"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        py={8}
      >
        <Box cursor="pointer" title="Go to home">
          <Link href="/">
            <Image
              alt="Ryan Alencar Logo"
              src="/images/logo.png"
              width={46}
              height={60}
              priority
            />
          </Link>
        </Box>

        <NavBar />

        {/* <ToggleThemeButton /> */}
      </Container>
    </Flex>
  )
}
