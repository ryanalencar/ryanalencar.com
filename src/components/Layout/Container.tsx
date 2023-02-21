import { Container as ChakraContainer, ContainerProps } from '@chakra-ui/layout'

export function Container({ children, ...rest }: ContainerProps) {
  return (
    <ChakraContainer maxW="5xl" paddingX={8} {...rest}>
      {children}
    </ChakraContainer>
  )
}
