import RulesPage from '@/app/(nonAuth)/(informational)/rules/page'
import { render, RenderResult } from '@testing-library/react'
import { beforeAll, describe, expect, test } from 'vitest'

let page: RenderResult

beforeAll(() => {
  page = render(<RulesPage />)
})

describe('Rules Page', () => {
  test('Headline renders', () => {
    expect(page.getByRole('heading', { level: 1, name: 'Rules' })).toBeDefined()
  })
  test('Rules List', async () => {
    const rules = await page.findAllByRole('listitem')
    expect(rules?.length).toBe(9)
  })
})
