import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onScoreIncrement} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onClickEmoji = () => {
    onScoreIncrement(id)
  }

  return (
    <li className="emoji-list-item">
      <button className="emoji-btn" type="button" onClick={onClickEmoji}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
