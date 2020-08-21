import React, { Component } from "react";
import CommentList from "../components/CommentList"
import CommentForm from "../components/CommentForm"

class CommentBox extends Component {
  constructor(props) {
    super(props);
    this.handleCommentSubmit = this.handleCommentSubmit.bind(this)
    this.state = {
      data: [{id: 1, author: "David", text:"I love cats"}, {id: 1, author: "David", text:"I love dogs"}, {id: 1, author: "David", text:"I love fishes"}]
    };
  }

  handleCommentSubmit(comment) {
    comment.id = Date.now()
    var newComments = this.state.data.concat([comment])
    this.setState({data: newComments})
  }

  render(){
    return (
      <div className="commentBox">
        <h2>Add a Comment</h2>
        <CommentForm onCommentSubmit={this.handleCommentSubmit}/>
        <h2>Comment List</h2>
        <CommentList data={this.state.data}/>
      </div>
    )
  }
}

export default CommentBox;
