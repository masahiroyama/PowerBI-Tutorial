import { useState, useEffect } from 'react'

export type FontSize = 'sm' | 'md' | 'lg'

const STORAGE_KEY = 'pbi_font_size'
const SIZE_CLASSES: Record<FontSize, string> = { sm: '', md: 'font-size-md', lg: 'font-size-lg' }

function getInitialSize(): FontSize {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'sm' || stored === 'md' || stored === 'lg') return stored
  return 'sm'
}

export function useFontSize() {
  const [fontSize, setFontSize] = useState<FontSize>(getInitialSize)

  useEffect(() => {
    const html = document.documentElement
    html.classList.remove('font-size-md', 'font-size-lg')
    const cls = SIZE_CLASSES[fontSize]
    if (cls) html.classList.add(cls)
    localStorage.setItem(STORAGE_KEY, fontSize)
  }, [fontSize])

  return { fontSize, setFontSize }
}
