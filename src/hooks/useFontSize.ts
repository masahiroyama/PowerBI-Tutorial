import { useState, useEffect } from 'react'

export type FontSize = 'sm' | 'md' | 'lg'

const STORAGE_KEY = 'pbi_font_size'

function getInitialSize(): FontSize {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'sm' || stored === 'md' || stored === 'lg') return stored
  return 'sm'
}

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>(getInitialSize)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, fontSize)
  }, [fontSize])

  return { fontSize, setFontSize }
}
