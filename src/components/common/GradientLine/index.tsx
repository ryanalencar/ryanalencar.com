import { Box, BoxProps } from '@chakra-ui/layout'

import { gradients } from '@/styles/theme/gradients'

export function GradientLine({ ...props }: BoxProps) {
  return <Box w="full" h={3} bgGradient={gradients['pink-purple']} {...props} />
}
