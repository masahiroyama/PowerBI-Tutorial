import { useRef, useState, useCallback, useEffect } from 'react'

export type SpeechState = 'idle' | 'playing' | 'paused'

export function useSpeech() {
  const [state, setStateRaw] = useState<SpeechState>('idle')
  const [rate, setRateRaw] = useState(1)
  const [currentCharIndex, setCurrentCharIndex] = useState(-1)

  const stateRef = useRef<SpeechState>('idle')
  const rateRef = useRef(1)
  const textRef = useRef('')   // 元テキスト全体（再スタート用）
  const offsetRef = useRef(0) // 再スタート時に何文字目から開始したか
  const charRef = useRef(-1)  // 最新の絶対 charIndex（同期的に参照するため Ref）

  // stateRef と React state を同時に更新するヘルパー
  function applyState(s: SpeechState) {
    stateRef.current = s
    setStateRaw(s)
  }

  // utterance を作成して発話開始（内部ユーティリティ）
  function startUtterance(text: string, offset: number) {
    const u = new SpeechSynthesisUtterance(text)
    u.lang = 'ja-JP'
    u.rate = rateRef.current

    u.onboundary = (e: SpeechSynthesisEvent) => {
      const abs = offset + e.charIndex
      charRef.current = abs
      setCurrentCharIndex(abs)
    }

    u.onend = () => {
      stateRef.current = 'idle'
      setStateRaw('idle')
      charRef.current = -1
      offsetRef.current = 0
      setCurrentCharIndex(-1)
    }

    u.onerror = (e: SpeechSynthesisErrorEvent) => {
      // cancel()/cancel() による中断は無視。それ以外のエラーのみ状態をリセット
      if (e.error !== 'interrupted' && e.error !== 'canceled') {
        stateRef.current = 'idle'
        setStateRaw('idle')
        charRef.current = -1
        offsetRef.current = 0
        setCurrentCharIndex(-1)
      }
    }

    window.speechSynthesis.speak(u)
  }

  const speak = useCallback((text: string) => {
    window.speechSynthesis.cancel()
    textRef.current = text
    offsetRef.current = 0
    charRef.current = -1
    startUtterance(text, 0)
    applyState('playing')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const pause = useCallback(() => {
    window.speechSynthesis.pause()
    applyState('paused')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const resume = useCallback(() => {
    window.speechSynthesis.resume()
    applyState('playing')
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const stop = useCallback(() => {
    window.speechSynthesis.cancel()
    applyState('idle')
    charRef.current = -1
    offsetRef.current = 0
    setCurrentCharIndex(-1)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  // 速度変更：再生中・一時停止中は現在位置から新しい速度で即座に再スタート
  const setRate = useCallback((newRate: number) => {
    rateRef.current = newRate
    setRateRaw(newRate)

    if (stateRef.current !== 'idle') {
      const from = Math.max(charRef.current, 0)
      const remaining = textRef.current.slice(from)
      window.speechSynthesis.cancel()

      if (!remaining.trim()) {
        stateRef.current = 'idle'
        setStateRaw('idle')
        charRef.current = -1
        offsetRef.current = 0
        setCurrentCharIndex(-1)
        return
      }

      offsetRef.current = from
      startUtterance(remaining, from)
      stateRef.current = 'playing'
      setStateRaw('playing')
    }
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    return () => { window.speechSynthesis.cancel() }
  }, [])

  return { state, rate, currentCharIndex, speak, pause, resume, stop, setRate }
}
