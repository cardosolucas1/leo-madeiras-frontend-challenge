import React from 'react'

import { Box, AiFillSetting } from '../../shared'

const Header: React.FC = () => {
  return (
    <Box d="flex" justifyContent="flex-end" maxW="24rem" w="100%" mb="2rem">
      <Box
        as={AiFillSetting}
        size="35"
        color="#F4A261"
        bg="rgb(38, 70, 83, 0.37)"
        p="4"
        mr="5"
        borderRadius="2px"
        cursor="pointer"
      />
    </Box>
  )
}

export default Header
