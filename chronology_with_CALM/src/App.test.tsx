import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('App', () => {
  it('renders every engagement in chronological order', () => {
    render(<App />)

    const headings = screen
      .getAllByRole('heading', { level: 3 })
      .map((heading) => heading.textContent)

    expect(headings).toEqual(['Seed', 'Sprouting', 'Flowering'])
    expect(screen.getByText('03')).toBeTruthy()
  })
})
