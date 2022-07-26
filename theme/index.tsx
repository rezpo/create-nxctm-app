import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'
import { ContainerStyles as Container } from './components/ContainerStyles'

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({ 
    config,
    colors: {
      primary: {
        main: '#e74645'
      },
      secondary: {
        main: '#fb7756'
      },
      tertiary: {
        main: '#facd60'
      },
      quaternary: {
        main: '#fdfa66'
      },
      quinary: {
        main: '#1ac0c6'
      }
    },
    components: {
      Button,
      Container
    }
})

export default theme
