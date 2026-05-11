import { useState, useCallback, useEffect } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import { Header } from './Header'
import { ProgressBar } from './ProgressBar'
import { Sidebar } from './Sidebar'
import { ScriptPanel } from './ScriptPanel'
import { GlossaryPanel } from './GlossaryPanel'
import { CompletionTimeline } from './CompletionTimeline'
import { useDarkMode } from '../hooks/useDarkMode'
import { useProgress } from '../hooks/useProgress'
import { useTimer } from '../hooks/useTimer'

export function Layout() {
  const { dark, toggle } = useDarkMode()
  const { isCompleted, toggleComplete, resetProgress, completedCount, progressPercent, timestamps } = useProgress()
  const { elapsed, isRunning: isTimerRunning, start: startTimer, reset: resetTimer } = useTimer()
  const { id } = useParams<{ id: string }>()
  const currentStepId = id !== undefined ? parseInt(id, 10) : 0
  const [showScript, setShowScript] = useState(false)
  const toggleScript = () => setShowScript(prev => !prev)
  const [showGlossary, setShowGlossary] = useState(false)
  const toggleGlossary = () => setShowGlossary(prev => {
    if (!prev) setShowTimeline(false)
    return !prev
  })
  const [showTimeline, setShowTimeline] = useState(false)
  const toggleTimeline = () => setShowTimeline(prev => {
    if (!prev) setShowGlossary(false)
    return !prev
  })
  const [scriptPanelHeight, setScriptPanelHeight] = useState(0)
  const handleScriptHeightChange = useCallback((h: number) => setScriptPanelHeight(h), [])

  // sidebar(224) + content(768) + panel(320) * 2(mx-auto の対称マージン分) = 1632
  const GLOSSARY_OVERLAP_THRESHOLD = 1632
  const [glossaryOverlaps, setGlossaryOverlaps] = useState(() => window.innerWidth < GLOSSARY_OVERLAP_THRESHOLD)
  useEffect(() => {
    const handler = () => setGlossaryOverlaps(window.innerWidth < GLOSSARY_OVERLAP_THRESHOLD)
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header
        dark={dark}
        onToggleDark={toggle}
        showScript={showScript}
        onToggleScript={toggleScript}
        showGlossary={showGlossary}
        onToggleGlossary={toggleGlossary}
        showTimeline={showTimeline}
        onToggleTimeline={toggleTimeline}
      />
      <ProgressBar
        currentStepId={currentStepId}
        completedCount={completedCount}
        progressPercent={progressPercent}
        elapsed={elapsed}
        isTimerRunning={isTimerRunning}
        onStartTimer={startTimer}
        onResetTimer={resetTimer}
      />

      <div className={`flex pt-28 ${showScript ? 'pb-44' : ''} ${(showGlossary || showTimeline) && glossaryOverlaps ? 'pr-80' : ''}`}>
        <Sidebar currentStepId={currentStepId} isCompleted={isCompleted} onResetProgress={resetProgress} showScript={showScript} />
        <main className="flex-1 min-w-0 bg-white dark:bg-gray-950">
          <Outlet context={{ isCompleted, toggleComplete }} />
        </main>
      </div>

      {showScript && (
        <ScriptPanel stepId={currentStepId} onClose={toggleScript} onHeightChange={handleScriptHeightChange} />
      )}

      {showGlossary && (
        <GlossaryPanel onClose={toggleGlossary} scriptPanelHeight={showScript ? scriptPanelHeight : 0} />
      )}

      {showTimeline && (
        <CompletionTimeline
          timestamps={timestamps}
          onClose={toggleTimeline}
          scriptPanelHeight={showScript ? scriptPanelHeight : 0}
        />
      )}
    </div>
  )
}
