const EmojiItems = props => {
  const {emojiDetails, onChangeDetails} = props
  const {imageUrl, name} = emojiDetails

  const updateContent = () => {
    onChangeDetails()
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt={name} onClick={updateContent} />
        <h1>{name}</h1>
      </div>
    </li>
  )
}
export default EmojiItems
