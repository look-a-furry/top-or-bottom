import { useNavigate } from 'react-router-dom'
import { personalityTypes } from '../data/types'
import './Landing.css'

function Landing() {
  const navigate = useNavigate()
  const types = Object.values(personalityTypes)

  return (
    <div className="landing">
      <div className="landing-hero">
        <h1 className="landing-title">
          <span className="title-emoji">🐾</span>
          What's Your Fursona?
          <span className="title-emoji">🐾</span>
        </h1>
        <p className="landing-subtitle">
          Discover your inner furry personality type with our fun quiz!
        </p>
        <p className="landing-description">
          Answer 12 simple questions to find out which of 8 furry archetypes
          matches your personality best. Are you a loyal Wolf, a clever Fox,
          or perhaps a cozy Rabbit?
        </p>
        <button
          className="start-button"
          onClick={() => navigate('/quiz')}
        >
          Take the Test
        </button>
      </div>

      <div className="personality-preview">
        <h2 className="preview-title">The 8 Personality Types</h2>
        <div className="type-grid">
          {types.map(type => (
            <div
              key={type.id}
              className="type-card"
              style={{ background: type.gradient }}
            >
              <span className="type-emoji">{type.emoji}</span>
              <span className="type-name">{type.name}</span>
              <span className="type-tagline">{type.tagline}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="traits-section">
        <h2 className="traits-title">How It Works</h2>
        <div className="traits-grid">
          <div className="trait-card">
            <div className="trait-icon">👥</div>
            <h3>Social Style</h3>
            <p>Are you a pack animal who thrives in groups, or a solitary soul who values independence?</p>
          </div>
          <div className="trait-card">
            <div className="trait-icon">⚡</div>
            <h3>Energy Level</h3>
            <p>Do you bounce off the walls with playful energy, or radiate calm and thoughtful vibes?</p>
          </div>
          <div className="trait-card">
            <div className="trait-icon">🌲</div>
            <h3>Environment</h3>
            <p>Does the call of the wild excite you, or do you prefer cozy indoor comforts?</p>
          </div>
        </div>
      </div>

      <footer className="landing-footer">
        <p>Made with 💖 for the furry community</p>
      </footer>
    </div>
  )
}

export default Landing
