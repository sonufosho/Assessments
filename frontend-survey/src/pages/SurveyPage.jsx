import { useState } from 'react'
import questions from '../data/questions'
import { useNavigate } from 'react-router'
import './SurveyPage.css'

function SurveyPage() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const currentQuestion = questions[currentQuestionIndex]
  const [answers, setAnswers] = useState([])

  const saveAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }))
  };

  const handleSubmit = () => {
    const surveyData = {
      sessionId: crypto.randomUUID(),
      answers: answers,
      status: "COMPLETED",
      submittedAt: new Date().toISOString()
    }

    const existing = JSON.parse(localStorage.getItem("surveyData")) || []

    existing.push(surveyData);

    localStorage.setItem("surveyData", JSON.stringify(existing))
  }

  const navigate = useNavigate()

  return (
    <>
      <div className="survey-page">
        <div className="survey-container">
          <p className="survey-question">{questions[currentQuestionIndex].text}</p>

          <span className="current-question-number">{currentQuestionIndex + 1}/{questions.length}</span>

          <div className="rating-scale">
            {currentQuestion.type === 'rating' && (
              Array.from({ length: currentQuestion.scale }, (_, i) => (
                <span
                  className="rating-button"
                  key={i}
                  onClick={() => saveAnswer(currentQuestion.text, i + 1)}
                >
                  {i + 1}
                </span>
              ))
            )}

            {currentQuestion.type === 'text' && (
              <input
                onChange={(e) => saveAnswer(currentQuestion.text, e.target.value)}
                type="text"
              />
            )}
          </div>

          {currentQuestion.type === 'rating' && (<div className="rating-names">
            <span>Poor</span>
            <span>Excellent</span>
          </div>
          )}

          <div className="buttons">
            <button
              onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
              disabled={currentQuestionIndex === 0}
              className="button-secondary"
            >
              Back
            </button>

            {currentQuestionIndex === questions.length - 1
              ? <button
                onClick={() => {
                  handleSubmit()
                  navigate("/submit")
                }}
                className="button-primary"
              >
                Submit
              </button>

              : <button
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
                disabled={currentQuestionIndex === questions.length - 1}
                className="button-primary"
              >
                Next
              </button>}
          </div>
        </div>
      </div>
    </>
  )
}

export default SurveyPage
