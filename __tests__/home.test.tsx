import Home from '@/features/Home/Home'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('Home Page', () => {
  render(<Home />)
  expect(
    screen.getByRole('heading', { level: 1, name: 'Welcome to Liquid Miles' })
  ).toBeDefined()
})
