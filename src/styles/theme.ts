import { extendTheme } from '@chakra-ui/react'

/*
default
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac'
  }
}

const theme = extendTheme({ colors })

export default theme
*/

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'cyan.50'
      }
    }
  }
})

export default theme
