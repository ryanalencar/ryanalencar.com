import { Styles, GlobalStyleProps } from '@chakra-ui/theme-tools'

const global = ({ colorMode }: GlobalStyleProps) => ({
  'html,body': {
    backgroundColor: colorMode === 'dark' ? 'dark' : 'white.100',
    color: colorMode === 'dark' ? 'white.100' : 'dark',
    WebkitFontSmoothing: 'antialiased',
  },
  _selection: {
    backgroundColor: 'purple.500',
    color: 'white.100',
  },
})

export const styles = {
  global,
} as Styles
