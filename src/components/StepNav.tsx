import { Link } from 'react-router-dom'
import { steps } from '../data/steps'

type Props = {
  currentStepId: number
}

export function StepNav({ currentStepId }: Props) {
  const prev = steps.find(s => s.id === currentStepId - 1)
  const next = steps.find(s => s.id === currentStepId + 1)

  return (
    <div className="step-nav flex items-center justify-between mt-10 pt-6 border-t border-gray-200 dark:border-gray-700">
      <div className="w-5/12">
        {prev && (
          <Link
            to={`/step/${prev.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors text-gray-700 dark:text-gray-300"
          >
            <span className="text-lg">←</span>
            <div className="text-left">
              <div className="text-xs text-gray-400 dark:text-gray-500">前へ</div>
              <div className="text-sm font-medium truncate">{prev.id}. {prev.title}</div>
            </div>
          </Link>
        )}
      </div>
      <div className="w-5/12 flex justify-end">
        {next && (
          <Link
            to={`/step/${next.id}`}
            className="flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 transition-colors text-gray-700 dark:text-gray-300"
          >
            <div className="text-right">
              <div className="text-xs text-gray-400 dark:text-gray-500">次へ</div>
              <div className="text-sm font-medium truncate">{next.id}. {next.title}</div>
            </div>
            <span className="text-lg">→</span>
          </Link>
        )}
      </div>
    </div>
  )
}
