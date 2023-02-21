'use client'
import { ChakraProvider } from '@chakra-ui/react'

import { CacheProvider } from '@chakra-ui/next-js'
import React, { ReactNode } from 'react'

interface IAppWrapperProps {
  children: ReactNode
}

export function AppWrapper({ children }: IAppWrapperProps) {
  return (
    <CacheProvider>
      <ChakraProvider>
        <h1>Header</h1>
        {children}
        <h1>Footer</h1>
      </ChakraProvider>
    </CacheProvider>
  )
}
