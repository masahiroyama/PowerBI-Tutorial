import { useState } from 'react'
import { glossary } from '../data/glossary'

type Props = {
  term: string
  children: React.ReactNode
}

export function GlossaryTerm({ term, children }: Props) {
  const [visible, setVisible] = useState(false)

  const entry =
    glossary.find(e => e.term === term) ??
    glossary.find(e => e.term.startsWith(term + '（'))

  if (!entry) return <>{children}</>

  return (
    <span
      className="relative inline"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(v => !v)}
    >
      <span className="border-b border-dotted border-yellow-500 dark:border-yellow-400 cursor-help">
        {children}
      </span>
      {visible && (
        <span
          role="tooltip"
          className="absolute z-50 bottom-full left-0 mb-1.5 w-72 rounded-lg border border-yellow-200 dark:border-yellow-700 bg-white dark:bg-gray-800 p-3 text-left shadow-xl whitespace-normal"
        >
          <span className="block text-xs font-bold text-yellow-600 dark:text-yellow-400 mb-1.5">{entry.term}</span>
          <span className="block text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{entry.definition}</span>
        </span>
      )}
    </span>
  )
}
