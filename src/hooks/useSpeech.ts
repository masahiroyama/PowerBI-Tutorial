import { useRef, useState, useCallback, useEffect } from 'react'

export type SpeechState = 'idle' | 'playing' | 'paused'

export function useSpeech() {
  const [state, setState] = useState<SpeechState>('idle')
  const [rate, setRateState] = useState(1)
  const [currentCharIndex, setCurrentCharIndex] = useState(-1)
  const rateRef = useRef(1)

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    setState('idle')
    setCurrentCharIndex(-1)
  }, [])

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = 'ja-JP'
    utterance.rate = rateRef.current

    utterance.onboundary = (e: SpeechSynthesisEvent) => {
      setCurrentCharIndex(e.charIndex)
    }

    utterance.onend = () => {
      setState('idle')
      setCurrentCharIndex(-1)
    }

    utterance.onerror = (e: SpeechSynthesisErrorEvent) => {
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        setState('idle')
        setCurrentCharIndex(-1)
      }
    }

    window.speechSynthesis.speak(utterance)
    setState('playing')
  }, [])

  const pause = useCallback(() => {
    window.speechSynthesis.pause()
    setState('paused')
  }, [])

  const resume = useCallback(() => {
    window.speechSynthesis.resume()
    setState('playing')
  }, [])

  const setRate = useCallback((newRate: number) => {
    rateRef.current = newRate
    setRateState(newRate)
  }, [])

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel()
    }
  }, [])

  return { state, rate, currentCharIndex, speak, pause, resume, stop, setRate }
}
