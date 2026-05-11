import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { steps } from '../data/steps'
import { StepNav } from './StepNav'
import { CompleteButton } from './CompleteButton'
import { wrapGlossaryTerms } from '../utils/wrapGlossaryTerms'

type Props = {
  stepId: number
  isCompleted: (id: number) => boolean
  onToggleComplete: (id: number) => void
}

export function StepPage({ stepId, isCompleted, onToggleComplete }: Props) {
  const step = steps.find(s => s.id === stepId)
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [stepId])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return
      if (e.key === 'ArrowRight' && stepId < steps.length - 1) {
        navigate(`/step/${stepId + 1}`)
      }
      if (e.key === 'ArrowLeft' && stepId > 0) {
        navigate(`/step/${stepId - 1}`)
      }
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [stepId, navigate])

  if (!step) {
    return (
      <div className="p-8 text-gray-500 dark:text-gray-400">
        ステップが見つかりません。
      </div>
    )
  }

  return (
    <article className="step-section max-w-3xl mx-auto px-8 py-8">
      <div className="flex items-start gap-4 mb-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              ステップ {step.id}
            </span>
            {step.estimatedMinutes !== null && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400">
                ⏱ {step.estimatedMinutes}分
              </span>
            )}
            {step.category === 'tutorial' && isCompleted(step.id) && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400">
                ✅ 完了
              </span>
            )}
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
            {step.title}
          </h1>
        </div>
      </div>

      <div className="prose-sm">{wrapGlossaryTerms(step.content)}</div>

      {step.category === 'tutorial' && (
        <CompleteButton
          stepId={step.id}
          isCompleted={isCompleted(step.id)}
          onToggle={onToggleComplete}
        />
      )}

      <StepNav currentStepId={step.id} />

      <p className="mt-6 text-center text-xs text-gray-400 dark:text-gray-600">
        ← → キーでステップを移動できます
      </p>
    </article>
  )
}
