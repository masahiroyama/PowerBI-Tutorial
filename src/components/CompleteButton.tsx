type Props = {
  stepId: number
  isCompleted: boolean
  onToggle: (id: number) => void
}

export function CompleteButton({ stepId, isCompleted, onToggle }: Props) {
  return (
    <div className="complete-btn mt-8 flex justify-center">
      <button
        onClick={() => onToggle(stepId)}
        className={[
          'px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 border-2',
          isCompleted
            ? 'bg-green-50 dark:bg-green-900/20 border-green-400 text-green-700 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/30'
            : 'bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20',
        ].join(' ')}
      >
        {isCompleted ? '✅ 完了済み（クリックで取り消し）' : 'このステップを完了としてマーク'}
      </button>
    </div>
  )
}
