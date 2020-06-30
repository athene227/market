import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Search from '../../../src/components/templates/search'
import {
  createHistory,
  createMemorySource,
  LocationProvider
} from '@reach/router'

describe('Search', () => {
  it('renders without crashing', async () => {
    const history = createHistory(createMemorySource('/search?text=water'))

    const { container } = render(
      <LocationProvider history={history}>
        <Search location={{ search: '?text=water' } as any} />
      </LocationProvider>
    )
    expect(container.firstChild).toBeInTheDocument()

    // interact with search bar
    const form = container.querySelector('form')
    const input = container.querySelector('form input')
    const button = container.querySelector('form button')

    input &&
      fireEvent.change(input, {
        target: {
          value: 'Changed Hello'
        }
      })

    button && fireEvent.click(button)
    form && fireEvent.submit(form)
  })
})
