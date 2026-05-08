import { useState } from 'react'

type Props = {
  code: string
  language?: string
}

export function CodeBlock({ code, language }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="relative my-3 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
      {language && (
        <div className="px-4 py-1 text-xs text-gray-400 dark:text-gray-500 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          {language}
        </div>
      )}
      <pre className="p-4 bg-gray-50 dark:bg-gray-900 overflow-x-auto text-sm leading-relaxed text-gray-800 dark:text-gray-200 font-mono">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 px-2 py-1 text-xs rounded bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
      >
        {copied ? '✓ コピー済' : 'コピー'}
      </button>
    </div>
  )
}
