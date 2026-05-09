import { Link } from 'react-router-dom'
import { steps } from '../data/steps'

type Props = {
  currentStepId: number
  isCompleted: (id: number) => boolean
}

export function Sidebar({ currentStepId, isCompleted }: Props) {
  return (
    <nav className="w-56 shrink-0 sticky top-28 h-[calc(100vh-112px)] overflow-y-auto border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 print:hidden">
      <ul className="py-3">
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
    </nav>
  )
}
