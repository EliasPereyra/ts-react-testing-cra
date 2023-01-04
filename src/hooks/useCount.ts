import { useState, useCallback } from 'react'

export function useCount() {
  const [count, countSet] = useState(0)

  const increment = useCallback(() => countSet((x) => x + 1), [])
  return { count, increment }
}
