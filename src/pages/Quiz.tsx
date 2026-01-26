import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { questions } from '../data/questions'
import { TraitScore, calculatePersonalityType } from '../data/types'
import './Quiz.css'

function Quiz() {
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [scores, setScores] = useState<TraitScore>({
    social: 0,
    energy: 0,
    nature: 0
  })
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const question = questions[currentQuestion]
  const progress = ((currentQuestion) / questions.length) * 100

  const handleAnswerClick = (answerIndex: number, score: number) => {
    if (isTransitioning) return

    setSelectedAnswer(answerIndex)
    setIsTransitioning(true)

    // Update scores
    const newScores = { ...scores }
    newScores[question.axis] += score
    setScores(newScores)

    // Transition to next question or results
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer(null)
        setIsTransitioning(false)
      } else {
        // Calculate final type and navigate to results
        const typeId = calculatePersonalityType(newScores)
        navigate(`/results/${typeId}`)
      }
    }, 400)
  }

  const handleBack = () => {
    if (currentQuestion > 0 && !isTransitioning) {
      setCurrentQuestion(currentQuestion - 1)
      setSelectedAnswer(null)
    }
  }

  return (
    <div className="quiz">
      <div className="quiz-container">
        <div className="quiz-header">
          <button
            className="back-button"
            onClick={handleBack}
            disabled={currentQuestion === 0}
          >
            ← Back
          </button>
          <div className="question-counter">
            {currentQuestion + 1} / {questions.length}
          </div>
        </div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className={`question-card ${isTransitioning ? 'transitioning' : ''}`}>
          <h2 className="question-text">{question.text}</h2>

          <div className="answers">
            {question.answers.map((answer, index) => (
              <button
                key={index}
                className={`answer-button ${selectedAnswer === index ? 'selected' : ''}`}
                onClick={() => handleAnswerClick(index, answer.score)}
                disabled={isTransitioning}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>

        <div className="trait-indicator">
          {question.axis === 'social' && '👥 Social Style'}
          {question.axis === 'energy' && '⚡ Energy Level'}
          {question.axis === 'nature' && '🌲 Environment'}
        </div>
      </div>
    </div>
  )
}

export default Quiz
