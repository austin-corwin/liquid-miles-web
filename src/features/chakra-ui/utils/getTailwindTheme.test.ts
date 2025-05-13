import { describe, expect, test } from 'vitest'
import { getTailwindTheme } from './getTailwindTheme'

describe('getTailwindTheme', () => {
  const twTheme = getTailwindTheme()
  test('Primary, Secondary Colors Registered', () => {
    expect(twTheme.colors.primary).toBeDefined()
    expect(twTheme.colors.secondary).toBeDefined()
  })
})
