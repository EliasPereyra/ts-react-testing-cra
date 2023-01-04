import { renderHook, act } from '@testing-library/react'
import { useCount } from './useCount'

test("should count", () => {
  const { result } = renderHook(() => useCount())

  act(() => {
    result.current.increment()
  })

  expect(result.current.count).toBe(1)
})
