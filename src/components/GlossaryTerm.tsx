import { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import { glossary } from '../data/glossary'

type Props = {
  term: string
  children: React.ReactNode
}

export function GlossaryTerm({ term, children }: Props) {
  const [visible, setVisible] = useState(false)
  const [pos, setPos] = useState({ top: 0, left: 0 })
  const triggerRef = useRef<HTMLSpanElement>(null)

  const entry =
    glossary.find(e => e.term === term) ??
    glossary.find(e => e.term.startsWith(term + '（'))

  if (!entry) return <>{children}</>

  const showTooltip = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect()
      setPos({ top: rect.top, left: rect.left })
    }
    setVisible(true)
  }

  return (
    <span
      ref={triggerRef}
      className="relative inline"
      onMouseEnter={showTooltip}
      onMouseLeave={() => setVisible(false)}
      onClick={() => setVisible(v => !v)}
    >
      <span className="border-b border-dotted border-yellow-500 dark:border-yellow-400 cursor-help">
        {children}
      </span>
      {visible && ReactDOM.createPortal(
        <span
          role="tooltip"
          style={{
            position: 'fixed',
            top: pos.top,
            left: pos.left,
            transform: 'translateY(calc(-100% - 6px))',
            zIndex: 9999,
          }}
          className="w-72 rounded-lg border border-yellow-200 dark:border-yellow-700 bg-white dark:bg-gray-800 p-3 text-left shadow-xl whitespace-normal pointer-events-none"
        >
          <span className="block text-xs font-bold text-yellow-600 dark:text-yellow-400 mb-1.5">{entry.term}</span>
          <span className="block text-xs text-gray-600 dark:text-gray-300 leading-relaxed">{entry.definition}</span>
        </span>,
        document.body
      )}
    </span>
  )
}
