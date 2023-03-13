import './index.css'

const wonImgUrl = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
const lossImgUrl = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onPlayGameAgain} = props
  const gameStatusImgUrl = isWon ? wonImgUrl : lossImgUrl
  const winLossText = isWon ? 'You Won' : 'You Lose'
  const scoreStatusText = isWon ? 'Best Score' : 'Score'
  const onClickPlayAgainBtn = () => {
    onPlayGameAgain()
  }

  return (
    <div className="win-lose-card">
      <div className="win-lose-img-container">
        <img
          className="win-lose-img"
          src={gameStatusImgUrl}
          alt="win or lose"
        />
      </div>
      <div className="win-lose-content">
        <h1 className="win-lose-text">{winLossText}</h1>
        {/* <div className="win-lose-score-container"> */}
        <p className="score-status">{scoreStatusText}</p>
        <p className="score-value">{score}/12</p>
        {/* </div> */}
        <button
          className="paly-again-btn"
          type="button"
          onClick={onClickPlayAgainBtn}
        >
          Play Again
        </button>
      </div>
    </div>
  )
}

export default WinOrLoseCard
