import React from 'react'

import { Box } from '../../shared'

const PagesLayout: React.FC = ({ children }) => {
  return (
    <Box
      width="100%"
      minH="100vh"
      d="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="95%"
        maxW="27rem"
        mt="2rem"
        d="flex"
        flexDir="column"
        alignItems="center"
        justifyContent="flex-start"
      >
        {children}
      </Box>
    </Box>
  )
}

export default PagesLayout
