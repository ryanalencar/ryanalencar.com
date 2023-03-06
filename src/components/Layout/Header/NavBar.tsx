import { HStack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/button'
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/menu'

import { X, List } from 'phosphor-react'

import { navigationItems } from '@/constants/navigation'
import { Link } from '@/components/common/Link'

const DesktopNavBar = () => (
  <HStack
    as="ul"
    display={['none', null, 'flex']}
    spacing={4}
    css={{ listStyle: 'none' }}
  >
    {navigationItems.map(({ name, href }) => (
      <Link key={name} as="li" href={href}>
        {name}
      </Link>
    ))}
  </HStack>
)

const MobileNavBar = () => {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            display={['flex', null, 'none']}
            variant="unstyled"
            // onClick={handleMenuClick}
            px={2}
            alignItems="center"
            justifyContent="center"
            bgColor="green.400"
          >
            {isOpen ? <X /> : <List />}
          </MenuButton>
          <MenuList bgColor="var(--header-mobile-menu-color)">
            {navigationItems.map(({ name, ...rest }) => (
              <MenuItem
                key={name}
                p={0}
                _focus={{ bgColor: 'none' }}
                _hover={{ bgColor: 'unset' }}
              >
                <Link
                  flex={1}
                  px={4}
                  py={2}
                  _hover={{ textDecoration: 'none', color: 'green.400' }}
                  {...rest}
                >
                  {name}
                </Link>
              </MenuItem>
            ))}
          </MenuList>
        </>
      )}
    </Menu>
  )
}

export function NavBar() {
  return (
    <>
      <DesktopNavBar />
      <MobileNavBar />
    </>
  )
}
