import { useState, useEffect } from 'react'

const TIMER_KEY = 'pbi_timer_start'

function loadStartTime(): number | null {
  const saved = localStorage.getItem(TIMER_KEY)
  return saved ? parseInt(saved, 10) : null
}

export function useTimer() {
  const [startTime, setStartTime] = useState<number | null>(loadStartTime)
  const [elapsed, setElapsed] = useState<number>(() => {
    const t = loadStartTime()
    return t ? Math.floor((Date.now() - t) / 1000) : 0
  })

  useEffect(() => {
    if (!startTime) return
    const id = setInterval(() => {
      setElapsed(Math.floor((Date.now() - startTime) / 1000))
    }, 1000)
    return () => clearInterval(id)
  }, [startTime])

  const start = () => {
    const now = Date.now()
    localStorage.setItem(TIMER_KEY, String(now))
    setStartTime(now)
    setElapsed(0)
  }

  const reset = () => {
    localStorage.removeItem(TIMER_KEY)
    setStartTime(null)
    setElapsed(0)
  }

  return { elapsed, isRunning: startTime !== null, start, reset }
}
