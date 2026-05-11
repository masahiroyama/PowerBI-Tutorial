import { useState, useCallback } from 'react'
import { steps } from '../data/steps'

const STORAGE_KEY = 'pbi_completed_steps'
const TIMESTAMPS_KEY = 'pbi_completion_timestamps'

const TUTORIAL_IDS = new Set(
  steps.filter(s => s.category === 'tutorial').map(s => s.id)
)

function loadCompleted(): Set<number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return new Set()
    return new Set(JSON.parse(raw) as number[])
  } catch {
    return new Set()
  }
}

function saveCompleted(set: Set<number>) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify([...set]))
}

function loadTimestamps(): Record<number, string> {
  try {
    const raw = localStorage.getItem(TIMESTAMPS_KEY)
    if (!raw) return {}
    return JSON.parse(raw) as Record<number, string>
  } catch {
    return {}
  }
}

function saveTimestamps(ts: Record<number, string>) {
  localStorage.setItem(TIMESTAMPS_KEY, JSON.stringify(ts))
}

export function useProgress() {
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted)
  const [timestamps, setTimestamps] = useState<Record<number, string>>(loadTimestamps)

  const toggleComplete = useCallback((stepId: number) => {
    const wasCompleted = completed.has(stepId)

    setCompleted(prev => {
      const next = new Set(prev)
      if (wasCompleted) {
        next.delete(stepId)
      } else {
        next.add(stepId)
      }
      saveCompleted(next)
      return next
    })

    setTimestamps(prev => {
      const next = { ...prev }
      if (wasCompleted) {
        delete next[stepId]
      } else {
        next[stepId] = new Date().toISOString()
      }
      saveTimestamps(next)
      return next
    })
  }, [completed])

  const isCompleted = useCallback(
    (stepId: number) => completed.has(stepId),
    [completed],
  )

  const resetProgress = useCallback(() => {
    setCompleted(new Set())
    setTimestamps({})
    localStorage.removeItem(STORAGE_KEY)
    localStorage.removeItem(TIMESTAMPS_KEY)
  }, [])

  const completedCount = [...completed].filter(id => TUTORIAL_IDS.has(id)).length
  const progressPercent = Math.round((completedCount / TUTORIAL_IDS.size) * 100)

  return { isCompleted, toggleComplete, resetProgress, completedCount, progressPercent, timestamps }
}
