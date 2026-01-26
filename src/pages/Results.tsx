import { useParams, useNavigate, Link } from 'react-router-dom'
import { personalityTypes } from '../data/types'
import './Results.css'

function Results() {
  const { typeId } = useParams<{ typeId: string }>()
  const navigate = useNavigate()

  const personality = typeId ? personalityTypes[typeId] : null

  if (!personality) {
    return (
      <div className="results error">
        <h1>Oops! Type not found</h1>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    )
  }

  const compatibleTypes = personality.compatibleWith.map(name =>
    Object.values(personalityTypes).find(t => t.name === name)
  ).filter(Boolean)

  const shareText = `I'm a ${personality.name}! ${personality.tagline} - Take the Furry Personality Test to find your type!`

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `I'm a ${personality.name}!`,
          text: shareText,
          url: window.location.href
        })
      } catch {
        // User cancelled or error occurred
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(`${shareText}\n${window.location.href}`)
      alert('Copied to clipboard!')
    }
  }

  return (
    <div className="results">
      <div className="results-container">
        <div className="results-header" style={{ background: personality.gradient }}>
          <span className="result-emoji">{personality.emoji}</span>
          <h1 className="result-name">You're a {personality.name}!</h1>
          <p className="result-tagline">{personality.tagline}</p>
        </div>

        <div className="results-content">
          <section className="result-section">
            <h2>About You</h2>
            <p className="description">{personality.description}</p>
          </section>

          <section className="result-section">
            <h2>Your Traits</h2>
            <div className="traits-list">
              {personality.traits.map(trait => (
                <span key={trait} className="trait-tag" style={{ borderColor: personality.color }}>
                  {trait}
                </span>
              ))}
            </div>
          </section>

          <div className="two-column">
            <section className="result-section">
              <h2>Your Strengths</h2>
              <ul className="list strengths">
                {personality.strengths.map(strength => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </section>

            <section className="result-section">
              <h2>Growth Areas</h2>
              <ul className="list challenges">
                {personality.challenges.map(challenge => (
                  <li key={challenge}>{challenge}</li>
                ))}
              </ul>
            </section>
          </div>

          <section className="result-section compatibility">
            <h2>Compatible With</h2>
            <div className="compatible-types">
              {compatibleTypes.map(type => type && (
                <div key={type.id} className="compatible-card" style={{ background: type.gradient }}>
                  <span className="compatible-emoji">{type.emoji}</span>
                  <span className="compatible-name">{type.name}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="actions">
            <button className="share-button" onClick={handleShare}>
              Share Your Result
            </button>
            <Link to="/quiz" className="retake-button">
              Retake Test
            </Link>
            <Link to="/" className="home-button">
              Back Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Results
