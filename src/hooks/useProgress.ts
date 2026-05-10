import { useState, useCallback } from 'react'
import { steps } from '../data/steps'

const STORAGE_KEY = 'pbi_completed_steps'

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

export function useProgress() {
  const [completed, setCompleted] = useState<Set<number>>(loadCompleted)

  const toggleComplete = useCallback((stepId: number) => {
    setCompleted(prev => {
      const next = new Set(prev)
      if (next.has(stepId)) {
        next.delete(stepId)
      } else {
        next.add(stepId)
      }
      saveCompleted(next)
      return next
    })
  }, [])

  const isCompleted = useCallback(
    (stepId: number) => completed.has(stepId),
    [completed],
  )

  const completedCount = [...completed].filter(id => TUTORIAL_IDS.has(id)).length
  const progressPercent = Math.round((completedCount / TUTORIAL_IDS.size) * 100)

  return { isCompleted, toggleComplete, completedCount, progressPercent }
}
