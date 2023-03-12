import './index.css'

const NavBar = props => {
  const {score, topScore, isGameInProgress} = props

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <img
            className="navbar-img"
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
          <h1 className="navbar-title">Emoji Game</h1>
        </div>
        {isGameInProgress && (
          <div className="score-container">
            <p className="current-score">Score: {score}</p>
            <p className="top-score">Top Score: {topScore}</p>
          </div>
        )}
      </nav>
    </div>
  )
}

export default NavBar
