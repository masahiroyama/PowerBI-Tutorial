import { useState } from 'react'
import { glossary } from '../data/glossary'

type Props = {
  onClose: () => void
  scriptPanelHeight?: number
}

export function GlossaryPanel({ onClose, scriptPanelHeight = 0 }: Props) {
  const [query, setQuery] = useState('')

  const filtered = query.trim()
    ? glossary.filter(e => e.term.toLowerCase().includes(query.toLowerCase()))
    : glossary

  return (
    <div className="fixed right-0 top-22 w-80 z-40 flex flex-col bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-xl print:hidden" style={{ bottom: scriptPanelHeight }}>
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <span className="font-semibold text-gray-800 dark:text-gray-100">📖 用語集</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none"
          title="閉じる"
        >
          ✕
        </button>
      </div>

      <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="用語を検索..."
          className="w-full px-3 py-1.5 text-sm rounded-md border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
      </div>

      <div className="flex-1 overflow-y-auto">
        {filtered.length === 0 ? (
          <p className="px-4 py-6 text-sm text-gray-400 text-center">該当する用語が見つかりません</p>
        ) : (
          <ul>
            {filtered.map(entry => (
              <li
                key={entry.term}
                className="px-4 py-3 border-b border-gray-100 dark:border-gray-800 last:border-b-0"
              >
                <p className="text-sm font-semibold text-yellow-600 dark:text-yellow-400 mb-1">{entry.term}</p>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{entry.definition}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
