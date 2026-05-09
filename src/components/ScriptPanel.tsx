import { useEffect, useRef } from 'react'
import { scripts } from '../data/scripts'
import { useSpeech } from '../hooks/useSpeech'

type Props = {
  stepId: number
  onClose: () => void
}

type Sentence = {
  text: string
  start: number
}

function splitIntoSentences(text: string): Sentence[] {
  const sentences: Sentence[] = []
  const regex = /[^。！？!?]+[。！？!?]?/g
  let match
  while ((match = regex.exec(text)) !== null) {
    if (match[0].trim()) {
      sentences.push({ text: match[0], start: match.index })
    }
  }
  return sentences
}

const RATES = [0.75, 1.0, 1.25, 1.5, 2.0]

export function ScriptPanel({ stepId, onClose }: Props) {
  const script = scripts[stepId]
  const { state, rate, currentCharIndex, speak, pause, resume, stop, setRate } = useSpeech()
  const sentences = script ? splitIntoSentences(script) : []
  const activeRef = useRef<HTMLSpanElement>(null)

  // Stop speech and reset when step changes
  useEffect(() => {
    stop()
  }, [stepId, stop])

  // Scroll active sentence into view
  useEffect(() => {
    activeRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [currentCharIndex])

  const activeSentenceIndex =
    currentCharIndex < 0
      ? -1
      : sentences.findIndex((s, i) => {
          const nextStart = i + 1 < sentences.length ? sentences[i + 1].start : script!.length
          return currentCharIndex >= s.start && currentCharIndex < nextStart
        })

  return (
    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-4 mb-6">
      {/* Header row */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-amber-900 dark:text-amber-200">
          🎙️ 読み上げスクリプト
        </span>
        <button
          onClick={() => { stop(); onClose() }}
          className="text-amber-500 hover:text-amber-700 dark:hover:text-amber-300 text-lg leading-none px-1"
          title="閉じる"
          aria-label="スクリプトパネルを閉じる"
        >
          ✕
        </button>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-2 mb-3">
        {state === 'idle' && (
          <button
            onClick={() => speak(script!)}
            disabled={!script}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm bg-amber-500 hover:bg-amber-600 disabled:opacity-40 text-white font-medium transition-colors"
          >
            ▶ 再生
          </button>
        )}
        {state === 'playing' && (
          <button
            onClick={pause}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
          >
            ⏸ 一時停止
          </button>
        )}
        {state === 'paused' && (
          <button
            onClick={resume}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm bg-amber-500 hover:bg-amber-600 text-white font-medium transition-colors"
          >
            ▶ 再開
          </button>
        )}
        {state !== 'idle' && (
          <button
            onClick={stop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-md text-sm border border-amber-300 dark:border-amber-700 hover:bg-amber-100 dark:hover:bg-amber-900/40 text-amber-800 dark:text-amber-300 font-medium transition-colors"
          >
            ⏹ 停止
          </button>
        )}

        {/* Speed selector */}
        <div className="flex items-center gap-1 ml-auto">
          <span className="text-xs text-amber-700 dark:text-amber-400 mr-1">速度:</span>
          {RATES.map(r => (
            <button
              key={r}
              onClick={() => setRate(r)}
              className={`px-2 py-0.5 rounded text-xs transition-colors ${
                rate === r
                  ? 'bg-amber-500 text-white font-bold'
                  : 'border border-amber-300 dark:border-amber-700 text-amber-700 dark:text-amber-400 hover:bg-amber-100 dark:hover:bg-amber-900/40'
              }`}
            >
              {r}x
            </button>
          ))}
        </div>
      </div>

      {/* Script text with karaoke highlighting */}
      {script ? (
        <div className="text-sm leading-relaxed text-gray-700 dark:text-gray-300 max-h-40 overflow-y-auto pr-1">
          {sentences.map((s, i) =>
            i === activeSentenceIndex ? (
              <span
                key={i}
                ref={activeRef}
                className="bg-yellow-300 dark:bg-yellow-500/50 text-gray-900 dark:text-white rounded px-0.5 transition-colors"
              >
                {s.text}
              </span>
            ) : (
              <span key={i}>{s.text}</span>
            )
          )}
        </div>
      ) : (
        <p className="text-sm text-amber-700 dark:text-amber-400">
          このステップにはスクリプトがありません。
        </p>
      )}
    </div>
  )
}
