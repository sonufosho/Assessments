import { useEffect } from 'react'
import { useNavigate } from 'react-router'
import './SubmitPage.css'

function SubmitPage() {
  const navigate = useNavigate()

  useEffect(() => {
    setTimeout(() => {
      navigate("/")
    }, 5000)
  })

  return (
    <>
      <div className="submit-page">
        <div className="submit-container">
          Thank You for Your Feedback!
        </div>
      </div>
    </>
  )
}

export default SubmitPage