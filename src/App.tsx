import { HashRouter, Routes, Route, Navigate, useParams, useOutletContext } from 'react-router-dom'
import { Layout } from './components/Layout'
import { StepPage } from './components/StepPage'
import { steps } from './data/steps'

type OutletContext = {
  isCompleted: (id: number) => boolean
  toggleComplete: (id: number) => void
  showScript: boolean
  toggleScript: () => void
}

function StepRoute() {
  const { id } = useParams<{ id: string }>()
  const { isCompleted, toggleComplete, showScript, toggleScript } = useOutletContext<OutletContext>()
  const stepId = id !== undefined ? parseInt(id, 10) : 0

  if (isNaN(stepId) || stepId < 0 || stepId >= steps.length) {
    return <Navigate to="/step/0" replace />
  }

  return (
    <StepPage
      stepId={stepId}
      isCompleted={isCompleted}
      onToggleComplete={toggleComplete}
      showScript={showScript}
      onToggleScript={toggleScript}
    />
  )
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/step/0" replace />} />
          <Route path="step/:id" element={<StepRoute />} />
          <Route path="*" element={<Navigate to="/step/0" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
