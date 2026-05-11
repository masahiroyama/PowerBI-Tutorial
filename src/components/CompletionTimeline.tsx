import { steps } from '../data/steps'

type Props = {
  timestamps: Record<number, string>
  onClose: () => void
  scriptPanelHeight?: number
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleDateString('ja-JP', { month: 'numeric', day: 'numeric' })
}

function formatTime(iso: string): string {
  const d = new Date(iso)
  return d.toLocaleTimeString('ja-JP', { hour: '2-digit', minute: '2-digit' })
}

function formatElapsed(ms: number): string {
  const totalMinutes = Math.round(ms / 60000)
  if (totalMinutes < 1) return '1分未満'
  if (totalMinutes < 60) return `${totalMinutes}分`
  const h = Math.floor(totalMinutes / 60)
  const m = totalMinutes % 60
  return m > 0 ? `${h}時間${m}分` : `${h}時間`
}

export function CompletionTimeline({ timestamps, onClose, scriptPanelHeight = 0 }: Props) {
  const sorted = Object.entries(timestamps)
    .map(([id, ts]) => {
      const stepId = Number(id)
      const step = steps.find(s => s.id === stepId)
      return { stepId, title: step?.title ?? `ステップ ${stepId}`, ts }
    })
    .sort((a, b) => a.ts.localeCompare(b.ts))

  const entries = sorted.map((entry, i) => ({
    ...entry,
    elapsed: i > 0 ? new Date(entry.ts).getTime() - new Date(sorted[i - 1].ts).getTime() : undefined,
  }))

  const totalMs =
    sorted.length > 1
      ? new Date(sorted[sorted.length - 1].ts).getTime() - new Date(sorted[0].ts).getTime()
      : undefined

  return (
    <div
      className="fixed right-0 top-22 w-80 z-40 flex flex-col bg-white dark:bg-gray-900 border-l border-gray-200 dark:border-gray-700 shadow-xl print:hidden"
      style={{ bottom: scriptPanelHeight }}
    >
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700">
        <span className="font-semibold text-gray-800 dark:text-gray-100">📋 完了履歴</span>
        <button
          onClick={onClose}
          className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 text-xl leading-none"
          title="閉じる"
        >
          ✕
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {entries.length === 0 ? (
          <div className="px-4 py-10 text-center">
            <p className="text-4xl mb-3">📝</p>
            <p className="text-sm text-gray-400 dark:text-gray-500">まだ完了したステップがありません</p>
          </div>
        ) : (
          <div className="px-4 py-4">
            <div className="mb-4 p-3 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <p className="text-xs font-semibold text-green-700 dark:text-green-400">
                ✅ {entries.length} ステップ完了
              </p>
              {totalMs !== undefined && (
                <p className="text-xs text-green-600 dark:text-green-500 mt-0.5">
                  総所要時間: {formatElapsed(totalMs)}
                </p>
              )}
            </div>

            <ol className="relative">
              {entries.map((entry, i) => (
                <li key={entry.stepId} className="relative pl-6 pb-5 last:pb-0">
                  {i < entries.length - 1 && (
                    <div className="absolute left-[5px] top-3.5 h-[calc(100%-4px)] w-0.5 bg-gray-200 dark:bg-gray-700" />
                  )}
                  <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full bg-green-400 dark:bg-green-500 border-2 border-white dark:border-gray-900 z-10" />

                  <div className="flex items-baseline justify-between gap-1 mb-0.5">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      ステップ {entry.stepId}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 shrink-0">
                      {formatDate(entry.ts)} {formatTime(entry.ts)}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-200 leading-snug">
                    {entry.title}
                  </p>
                  {entry.elapsed !== undefined && (
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      ↳ 前から {formatElapsed(entry.elapsed)}
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </div>
  )
}
