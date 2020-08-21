import React, { Component } from "react";

class Comment extends Component {
  render() {
    return (
      <div className="comment">
        <h4 classname="comment-author">{this.props.author}</h4>
        {this.props.children}
      </div>
    )
  }
}

export default Comment;
