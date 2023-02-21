'use client'

import React, { ReactNode } from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import { CacheProvider } from '@chakra-ui/next-js'

import { theme } from '@/styles/theme'

import { PageLayout } from './PageLayout'

interface IAppWrapperProps {
  children: ReactNode
}

export function AppWrapper({ children }: IAppWrapperProps) {
  return (
    <CacheProvider>
      <ChakraProvider theme={theme} resetCSS>
        <PageLayout>{children}</PageLayout>
      </ChakraProvider>
    </CacheProvider>
  )
}
