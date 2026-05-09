type Props = {
  dark: boolean
  onToggleDark: () => void
  showScript: boolean
  onToggleScript: () => void
}

export function Header({ dark, onToggleDark, showScript, onToggleScript }: Props) {
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
