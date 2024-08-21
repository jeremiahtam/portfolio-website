import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import About from './page'

describe('About Page', () => {
  it('Should display the footer component', () => {
    render(<About />)
    const heading = screen.getByText('2024 Designed by Jeremiah')
    expect(heading).toBeInTheDocument()
  })
})
