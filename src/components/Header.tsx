import type { FontSize } from '../hooks/useFontSize'

type Props = {
  dark: boolean
  onToggleDark: () => void
  fontSize: FontSize
  onSetFontSize: (s: FontSize) => void
  showScript: boolean
  onToggleScript: () => void
  showGlossary: boolean
  onToggleGlossary: () => void
  showTimeline: boolean
  onToggleTimeline: () => void
}

const FONT_SIZES: { value: FontSize; label: string; className: string }[] = [
  { value: 'sm', label: 'A', className: 'text-xs' },
  { value: 'md', label: 'A', className: 'text-sm' },
  { value: 'lg', label: 'A', className: 'text-base' },
]

export function Header({ dark, onToggleDark, fontSize, onSetFontSize, showScript, onToggleScript, showGlossary, onToggleGlossary, showTimeline, onToggleTimeline }: Props) {
  const handlePrint = () => window.print()

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 shadow-sm print:hidden">
      <div className="flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Power BI <span className="text-yellow-400">入門</span>チュートリアル
          </span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center border border-gray-200 dark:border-gray-600 rounded-md overflow-hidden" title="文字サイズ">
            {FONT_SIZES.map(({ value, label, className }, i) => (
              <button
                key={value}
                onClick={() => onSetFontSize(value)}
                className={`px-2.5 py-1.5 font-bold transition-colors ${className} ${
                  i > 0 ? 'border-l border-gray-200 dark:border-gray-600' : ''
                } ${
                  fontSize === value
                    ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300'
                    : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                title={`文字サイズ: ${value === 'sm' ? '小' : value === 'md' ? '中' : '大'}`}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={onToggleTimeline}
            className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
              showTimeline
                ? 'bg-emerald-100 dark:bg-emerald-900/40 border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300'
                : 'border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
            title={showTimeline ? '完了履歴を非表示' : '完了履歴を表示'}
          >
            📋 履歴
          </button>
          <button
            onClick={onToggleGlossary}
            className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
              showGlossary
                ? 'bg-blue-100 dark:bg-blue-900/40 border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-300'
                : 'border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
            title={showGlossary ? '用語集を非表示' : '用語集を表示'}
          >
            📖 用語集
          </button>
          <button
            onClick={onToggleScript}
            className={`px-3 py-1.5 rounded-md text-sm border transition-colors ${
              showScript
                ? 'bg-amber-100 dark:bg-amber-900/40 border-amber-300 dark:border-amber-700 text-amber-800 dark:text-amber-300'
                : 'border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300'
            }`}
            title={showScript ? 'スクリプトを非表示' : 'スクリプトを表示'}
          >
            📜 スクリプト
          </button>
          <button
            onClick={onToggleDark}
            className="px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            title={dark ? 'ライトモードに切り替え' : 'ダークモードに切り替え'}
          >
            {dark ? '☀️ ライト' : '🌙 ダーク'}
          </button>
          <button
            onClick={handlePrint}
            className="print-btn px-3 py-1.5 rounded-md text-sm border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300 transition-colors"
            title="印刷 / PDF保存"
          >
            🖨️ 印刷
          </button>
        </div>
      </div>
    </header>
  )
}
