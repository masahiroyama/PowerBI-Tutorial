import { useState } from 'react'
import { Link } from 'react-router-dom'
import { steps } from '../data/steps'

type Props = {
  currentStepId: number
  isCompleted: (id: number) => boolean
  onResetProgress: () => void
}

export function Sidebar({ currentStepId, isCompleted, onResetProgress }: Props) {
  const [confirming, setConfirming] = useState(false)

  const handleReset = () => {
    onResetProgress()
    setConfirming(false)
  }

  return (
    <nav className="w-56 shrink-0 sticky top-28 h-[calc(100vh-112px)] overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 print:hidden flex flex-col">
      <ul className="py-3 flex-1">
        {steps.map(step => {
          const isCurrent = step.id === currentStepId
          const done = isCompleted(step.id)
          return (
            <li key={step.id}>
              <Link
                to={`/step/${step.id}`}
                className={[
                  'flex items-center gap-2 px-4 py-2 text-sm transition-colors',
                  isCurrent
                    ? 'bg-yellow-50 dark:bg-yellow-900/20 text-yellow-700 dark:text-yellow-400 font-semibold border-r-2 border-yellow-400'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800',
                ].join(' ')}
              >
                <span className="text-base w-4 text-center shrink-0">
                  {done ? '✅' : isCurrent ? '▶' : '□'}
                </span>
                <span className="truncate">
                  {step.id}. {step.title}
                </span>
              </Link>
            </li>
          )
        })}
      </ul>

      <div className="px-4 py-3 border-t border-gray-100 dark:border-gray-800">
        {confirming ? (
          <div className="space-y-1">
            <p className="text-xs text-gray-400 dark:text-gray-500">本当にリセットしますか？</p>
            <div className="flex items-center gap-3">
              <button
                onClick={handleReset}
                className="text-xs text-red-400 dark:text-red-500 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                はい
              </button>
              <button
                onClick={() => setConfirming(false)}
                className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              >
                キャンセル
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setConfirming(true)}
            className="text-xs text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            進捗をリセット
          </button>
        )}
      </div>
    </nav>
  )
}
