'use client'

import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/layout'
import { CacheProvider } from '@chakra-ui/next-js'

import { theme } from '@/styles/theme'
import { gradients } from '@/styles/theme/gradients'

interface IAppWrapperProps {
  children: ReactNode
}

export function AppWrapper({ children }: IAppWrapperProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} resetCSS>
        <Heading bgClip="text" bgGradient={gradients['yellow-pink']}>
          Header
        </Heading>
        {children}
        <h1>Footer</h1>
      </ChakraProvider>
    </CacheProvider>
  )
}
