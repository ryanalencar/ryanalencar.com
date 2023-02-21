import { Box, Flex } from '@chakra-ui/layout'
import { Link } from '@chakra-ui/next-js'

import { GradientLine } from '@/components/GradientLine'
import { ToggleThemeButton } from '@/components/ToggleThemeButton'

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
          <Link href="/">Logo to home</Link>
        </Box>

        <NavBar />

        <ToggleThemeButton />
      </Container>
    </Flex>
  )
}
