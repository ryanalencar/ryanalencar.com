import { extendTheme } from '@chakra-ui/react'

import { config } from './config'
import { colors } from './colors'
import { styles } from './global'

export const theme = extendTheme({
  config,
  colors,
  styles,
})
