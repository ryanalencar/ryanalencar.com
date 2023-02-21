import { Button, ButtonProps } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/react'
import { Moon, SunDim } from 'phosphor-react'

export function ToggleThemeButton(props: ButtonProps) {
  const { colorMode, toggleColorMode } = useColorMode()

  const isDarkMode = colorMode === 'dark'

  const buttonTitle = isDarkMode
    ? 'Switch to light mode'
    : 'Switch to dark mode'

  return (
    <Button
      onClick={toggleColorMode}
      display="flex"
      variant="unstyled"
      alignItems="center"
      justifyContent="center"
      title={buttonTitle}
      {...props}
    >
      {isDarkMode ? <Moon size={25} /> : <SunDim size={25} />}
    </Button>
  )
}
