import React from 'react'

import Routes from './routes'

import { ChakraProvider } from './layout/Provider'

import { Box } from './shared'

const App: React.FC = () => {
  return (
    <ChakraProvider resetCSS>
      <Box
        bgGradient="linear(to-br, #e9c46a, #f4a261, #e76f51)"
        fontFamily="Montserrat"
      >
        <Routes />
      </Box>
    </ChakraProvider>
  )
}

export default App
