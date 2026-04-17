import { useNavigate } from 'react-router'
import './HomePage.css'

function HomePage() {
  const navigate = useNavigate()

  return (
    <>
      <div className="home-page">
        <div className="home-container">
          <p className="home-title">Would you like to take a survey?</p>
          <p className="home-subtitle">This short survey will take less than a minute and helps us improve your shopping experience.</p>

          <button
          onClick={() => navigate("/survey")}
          className="button-primary"
          >
            Start Survey
          </button>
        </div>
      </div>
    </>
  )
}

export default HomePage
