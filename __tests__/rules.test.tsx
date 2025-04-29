import RulesPage from '@/app/(nonAuth)/(informational)/rules/page'
import { render, screen } from '@testing-library/react'
import { expect, test } from 'vitest'

test('Home Page', () => {
  render(<RulesPage />)
  expect(screen.getByRole('heading', { level: 1, name: 'Rules' })).toBeDefined()
})
