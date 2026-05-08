import { Outlet, useParams } from 'react-router-dom'
import { Header } from './Header'
import { ProgressBar } from './ProgressBar'
import { Sidebar } from './Sidebar'
import { useDarkMode } from '../hooks/useDarkMode'
import { useProgress } from '../hooks/useProgress'
import { steps } from '../data/steps'

export function Layout() {
  const { dark, toggle } = useDarkMode()
  const { isCompleted, toggleComplete, completedCount, progressPercent } = useProgress(steps.length)
  const { id } = useParams<{ id: string }>()
  const currentStepId = id !== undefined ? parseInt(id, 10) : 0

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header dark={dark} onToggleDark={toggle} />
      <ProgressBar
        currentStepId={currentStepId}
        completedCount={completedCount}
        progressPercent={progressPercent}
      />

      <div className="flex pt-[88px]">
        <Sidebar currentStepId={currentStepId} isCompleted={isCompleted} />
        <main className="flex-1 min-w-0 bg-white dark:bg-gray-950">
          <Outlet context={{ isCompleted, toggleComplete }} />
        </main>
      </div>
    </div>
  )
}
