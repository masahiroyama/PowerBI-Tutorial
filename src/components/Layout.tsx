import { useState } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Header } from './Header'
import { ProgressBar } from './ProgressBar'
import { Sidebar } from './Sidebar'
import { ScriptPanel } from './ScriptPanel'
import { GlossaryPanel } from './GlossaryPanel'
import { useDarkMode } from '../hooks/useDarkMode'
import { useProgress } from '../hooks/useProgress'
import { steps } from '../data/steps'

export function Layout() {
  const { dark, toggle } = useDarkMode()
  const { isCompleted, toggleComplete, completedCount, progressPercent } = useProgress(steps.length)
  const { id } = useParams<{ id: string }>()
  const currentStepId = id !== undefined ? parseInt(id, 10) : 0
  const [showScript, setShowScript] = useState(false)
  const toggleScript = () => setShowScript(prev => !prev)
  const [showGlossary, setShowGlossary] = useState(false)
  const toggleGlossary = () => setShowGlossary(prev => !prev)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header
        dark={dark}
        onToggleDark={toggle}
        showScript={showScript}
        onToggleScript={toggleScript}
        showGlossary={showGlossary}
        onToggleGlossary={toggleGlossary}
      />
      <ProgressBar
        currentStepId={currentStepId}
        completedCount={completedCount}
        progressPercent={progressPercent}
      />

      <div className={`flex pt-22 ${showScript ? 'pb-44' : ''} ${showGlossary ? 'pr-80' : ''}`}>
        <Sidebar currentStepId={currentStepId} isCompleted={isCompleted} />
        <main className="flex-1 min-w-0 bg-white dark:bg-gray-950">
          <Outlet context={{ isCompleted, toggleComplete }} />
        </main>
      </div>

      {showScript && (
        <ScriptPanel stepId={currentStepId} onClose={toggleScript} />
      )}

      {showGlossary && (
        <GlossaryPanel onClose={toggleGlossary} />
      )}
    </div>
  )
}
