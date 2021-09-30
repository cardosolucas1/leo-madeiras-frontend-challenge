import React from 'react'

import { Button as ButtonUI, ButtonProps } from '@chakra-ui/react'

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return (
    <ButtonUI
      data-testid="form-button"
      type="submit"
      color="white"
      fontWeight="bold"
      boxShadow="none!important"
      h="3rem"
      mb="3rem"
      {...rest}
    >
      {children}
    </ButtonUI>
  )
}

export default Button
