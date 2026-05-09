import { steps } from '../data/steps'

type Props = {
  currentStepId: number
  completedCount: number
  progressPercent: number
  elapsed: number
  isTimerRunning: boolean
  onStartTimer: () => void
  onResetTimer: () => void
}

const TUTORIAL_STEPS = steps.filter(s => s.category === 'tutorial')
const TUTORIAL_TOTAL = TUTORIAL_STEPS.length
const TIMED_STEPS = TUTORIAL_STEPS.filter(s => s.estimatedMinutes !== null)
const TOTAL_MINUTES = TIMED_STEPS.reduce((sum, s) => sum + (s.estimatedMinutes ?? 0), 0)

function formatTime(seconds: number): string {
  const h = Math.floor(seconds / 3600)
  const m = Math.floor((seconds % 3600) / 60)
  const s = seconds % 60
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

type Pace = 'ahead' | 'ontrack' | 'behind'

function calcPace(elapsed: number, currentStepId: number): Pace | null {
  const cumulativeMinutes = TUTORIAL_STEPS
    .filter(s => s.id < currentStepId && s.estimatedMinutes !== null)
    .reduce((sum, s) => sum + (s.estimatedMinutes ?? 0), 0)
  if (cumulativeMinutes === 0) return null
  const ratio = elapsed / 60 / cumulativeMinutes
  if (ratio > 1.15) return 'behind'
  if (ratio < 0.85) return 'ahead'
  return 'ontrack'
}

const PACE_CONFIG: Record<Pace, { label: string; className: string }> = {
  behind: { label: '⚠ 遅れ', className: 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-400' },
  ontrack: { label: '✓ 順調', className: 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-400' },
  ahead: { label: '⚡ 早い', className: 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-400' },
}

export function ProgressBar({ currentStepId, completedCount, progressPercent, elapsed, isTimerRunning, onStartTimer, onResetTimer }: Props) {
  const tutorialIndex = TUTORIAL_STEPS.findIndex(s => s.id === currentStepId)
  const completedMinutes = TIMED_STEPS
    .reduce((sum, s) => (s.id < currentStepId ? sum + (s.estimatedMinutes ?? 0) : sum), 0)
  const remainingMinutes = Math.max(0, TOTAL_MINUTES - completedMinutes)

  const pace = isTimerRunning ? calcPace(elapsed, currentStepId) : null

  return (
    <div className="fixed top-13 left-0 right-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-2 print:hidden">
      <div className="flex items-center gap-4">
        <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
          <div
            className="h-full bg-yellow-400 transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap">
          {tutorialIndex >= 0
            ? `ステップ ${tutorialIndex + 1} / ${TUTORIAL_TOTAL}`
            : '補足'
          }
          {' · '}完了 {completedCount} / {TUTORIAL_TOTAL}
          {remainingMinutes > 0 && ` · 残り約${remainingMinutes}分`}
        </span>
      </div>
      <div className="flex items-center gap-2 mt-1">
        {isTimerRunning ? (
          <>
            <span className="text-sm font-mono text-gray-700 dark:text-gray-300">
              ⏱ {formatTime(elapsed)}
            </span>
            {pace && (
              <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${PACE_CONFIG[pace].className}`}>
                {PACE_CONFIG[pace].label}
              </span>
            )}
            <button
              onClick={onResetTimer}
              className="text-xs px-2 py-0.5 rounded border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              リセット
            </button>
          </>
        ) : (
          <button
            onClick={onStartTimer}
            className="text-xs px-3 py-0.5 rounded border border-gray-300 dark:border-gray-600 text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            ⏱ 計測開始
          </button>
        )}
      </div>
    </div>
  )
}
