import { describe, expect, it } from 'vitest'
import App from '@/App'
import { render, screen } from './utils/test-utils'

describe('App', () => {
  it('should render Vite + React', () => {
    render(<App />)
    const text = screen.getByRole('heading', { name: 'Vite + React', level: 1 })
    expect(text).toBeInTheDocument()
  })
})
