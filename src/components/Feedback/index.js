// Write your React code here.

import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackShow: true}

  onClickEmojis = () => {
    this.setState({isFeedbackShow: false})
  }

  renderShowEmojis = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-card">
        <h1>How satisfied are you with our customer support performance </h1>
        <ul className="emoji-card">
          {emojis.map(eachEmoji => (
            <li key={eachEmoji.id} className="list-emojis">
              <button type="button">
                <img
                  className="emojis"
                  src={eachEmoji.imageUrl}
                  key={eachEmoji.id}
                  alt={eachEmoji.name}
                  onClick={this.onClickEmojis}
                />
              </button>
              <br />
              <span>{eachEmoji.name}</span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderAfterOnclick = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="feedback-card">
        <img src={loveEmojiUrl} alt="love emoji" />
        <h1>Thank You</h1>
        <p>
          we will use your feedback to improve our customer support perfamanace
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackShow} = this.state

    return (
      <div className="app">
        {isFeedbackShow ? this.renderShowEmojis() : this.renderAfterOnclick()}
      </div>
    )
  }
}
export default Feedback
