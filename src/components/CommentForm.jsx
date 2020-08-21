import React, { Component } from 'react'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.handleAuthorChange = this.handleAuthorChange.bind(this)
    this.handleTextChange = this.handleTextChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      author: '',
      text: ''
    }
  }

  handleAuthorChange(event) {
    this.setState({author: event.target.value})
  }

  handleTextChange(event) {
    this.setState({text: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()
    var author = this.state.author.trim
    var text = this.state.text.trim
    if (!author || !text) {
      return
    }
    this.props.onCommentSubmit({author: this.state.author, text: this.state.text})
    this.setState({author: '', text: ''})
  }

  render() {
    return(
      <form classname="commentForm" onSubmit={this.handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={this.state.author}
          onChange={this.handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Say something..."
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        <input
          type="submit"
          value="Post"
        />
        </form>
    )
  }
}

export default CommentForm
