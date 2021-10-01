import React from 'react'

import { render } from '../../../test-utils'

import { Box } from '../../../../shared'

describe('Box shared component should render correctly', () => {
  const children = 'children'
  const wrapper = render(<Box>{children}</Box>)
  const { queryByText } = wrapper

  it('Box has children', () => {
    const childrenElement = queryByText(children)
    expect(childrenElement).toBeInTheDocument()
  })

  it('Box should matches snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
