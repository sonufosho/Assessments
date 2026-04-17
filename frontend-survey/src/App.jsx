import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import SurveyPage from './pages/SurveyPage'
import SubmitPage from './pages/SubmitPage'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/survey" element={<SurveyPage />} />
        <Route path="/submit" element={<SubmitPage />} />
      </Routes>
    </>
  )
}

export default App
