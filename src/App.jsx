import { ChakraBaseProvider, Text } from '@chakra-ui/react'
// `@chakra-ui/theme` is a part of the base install with `@chakra-ui/react`
// import chakraTheme from '@chakra-ui/theme'

import { theme } from './resources/theme'

function App() {
  return (
    <ChakraBaseProvider theme={theme}>
      <Text fontSize='6xl' textAlign={'center'}>Hello!!</Text>
    </ChakraBaseProvider>
  )
}

export default App