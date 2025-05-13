import { render, RenderResult } from '@testing-library/react'
import { beforeAll, describe, expect, test } from 'vitest'
import Home from './Home'

let page: RenderResult

beforeAll(() => {
  page = render(<Home />)
})

describe('Home Page', () => {
  test('Headline renders', () => {
    expect(
      page.getByRole('heading', { level: 1, name: 'Welcome to Liquid Miles' })
    ).toBeDefined()
  })
  test('About Section Renders', () => {
    expect(
      page.getByRole('heading', { level: 2, name: 'What is Liquid Miles?' })
    ).toBeDefined()
  })
})
