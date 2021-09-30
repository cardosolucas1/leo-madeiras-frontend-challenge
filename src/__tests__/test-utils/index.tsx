import React, { ReactElement } from 'react'
import { render, RenderOptions, RenderResult } from '@testing-library/react'
import { ChakraProvider } from '../../layout/Provider'

const AllTheProviders: React.FC = ({ children }) => {
  return <ChakraProvider>{children}</ChakraProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queries'>
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
import '@testing-library/jest-dom'

export { customRender as render }
