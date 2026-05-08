import { useState, useCallback } from 'react'

const STORAGE_KEY = 'pbi_completed_steps'

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

export function useProgress(totalSteps: number) {
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

  const completedCount = completed.size
  const progressPercent = Math.round((completedCount / totalSteps) * 100)

  return { isCompleted, toggleComplete, completedCount, progressPercent }
}
