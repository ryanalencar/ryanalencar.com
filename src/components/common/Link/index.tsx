'use client'

import { usePathname } from 'next/navigation'
import { Link as NextLink, LinkProps } from '@chakra-ui/next-js'

export function Link({ href, children, ...rest }: LinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <NextLink
      href={href}
      color={isActive ? 'purple.500' : 'var(--text-color)'}
      fontWeight={isActive ? 700 : 500}
      transition="all 0.3s ease"
      _hover={{
        color: 'purple.600',
      }}
      {...rest}
    >
      {children}
    </NextLink>
  )
}
