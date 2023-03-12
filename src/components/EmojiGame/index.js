/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLoseCard from '../WinOrLoseCard'
import './index.css'

class EmojiGame extends Component {
  state = {score: 0, topScore: 0, selectedIdList: [], isGameInProgress: true}

  onPlayGameAgain = () => {
    const {topScore, score} = this.state
    this.setState({
      topScore: topScore < score ? score : topScore,
      score: 0,
      selectedIdList: [],
      isGameInProgress: true,
    })
  }

  onScoreIncrement = id => {
    const {selectedIdList} = this.state

    if (selectedIdList.includes(id)) {
      this.setState(prevState => ({
        // topScore: prevState.topScore < score ? score : prevState.topScore,
        isGameInProgress: !prevState.isGameInProgress,
      }))
    } else {
      this.setState(prevState => ({
        selectedIdList: [...prevState.selectedIdList, id],
        score: prevState.score + 1,
      }))
    }
  }

  renderWinOrLossCard = () => {
    const {score} = this.state
    const {emojisList} = this.props
    const isWon = emojisList.length === score

    return (
      <WinOrLoseCard
        score={score}
        isWon={isWon}
        onPlayGameAgain={this.onPlayGameAgain}
      />
    )
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.shuffledEmojisList()

    return (
      <div className="emoji-card-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojiDetails={eachEmoji}
            onScoreIncrement={this.onScoreIncrement}
          />
        ))}
      </div>
    )
  }

  render() {
    const {score, topScore, isGameInProgress} = this.state

    return (
      <div className="emoji-game-app">
        <NavBar
          score={score}
          topScore={topScore}
          isGameInProgress={isGameInProgress}
        />
        {isGameInProgress
          ? this.renderEmojisList()
          : this.renderWinOrLossCard()}
      </div>
    )
  }
}

export default EmojiGame
