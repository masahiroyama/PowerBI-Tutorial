import { steps } from '../data/steps'

type Props = {
  currentStepId: number
  completedCount: number
  progressPercent: number
}

const TIMED_STEPS = steps.filter(s => s.estimatedMinutes !== null)
const TOTAL_MINUTES = TIMED_STEPS.reduce((sum, s) => sum + (s.estimatedMinutes ?? 0), 0)

export function ProgressBar({ currentStepId, completedCount, progressPercent }: Props) {
  const completedMinutes = steps
    .filter(s => s.estimatedMinutes !== null)
    .reduce((sum, s) => {
      const isLearned = s.id < currentStepId
      return isLearned ? sum + (s.estimatedMinutes ?? 0) : sum
    }, 0)
  const remainingMinutes = Math.max(0, TOTAL_MINUTES - completedMinutes)

  return (
    <div className="fixed top-[52px] left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-2 print:hidden">
      <div className="flex items-center gap-4">
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-yellow-400 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          ステップ {currentStepId + 1} / {steps.length}
          {' · '}完了 {completedCount} / {steps.length}
          {remainingMinutes > 0 && ` · 残り約${remainingMinutes}分`}
        </span>
      </div>
    </div>
  )
}
