import React, { Component } from 'react';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down';
import Trash from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
import IconButton from 'material-ui/IconButton';

import { connect } from 'react-redux';


import {
    deleteExistingComment,
    upVoteComment,
    downVoteComment,
    openEditCommentDialog,
    openCommentDialog,
    fetchCommentsById
} from '../../actions'

 class CommentControl extends Component{

  render(){
  const {
          comment,
          commentId,
          deleteExistingComment,
          upVoteComment,
          downVoteComment,
          openEditCommentDialog,
          openCommentDialog,
        } = this.props

  const pointer ={
    cursor:'pointer'
  }
  return(
    <div style={pointer}>
      <span className="left floated like">
          <ThumbsUp   size={24} onClick={() => upVoteComment(commentId)}    />
          <ThumbsDown size={24} onClick={() => downVoteComment(commentId)}     />
      </span>
      <span className="right floated star">
          <EditIcon size={24} onClick={() => openEditCommentDialog(comment)} />
          <Trash size={24} onClick={() => deleteExistingComment(commentId,comment)} />
      </span>
    </div>
  )
 }
}

function mapDispatchToProps(dispatch){
  return{
    deleteExistingComment:(commentId,comment) => dispatch(deleteExistingComment(commentId,comment)),
    upVoteComment:(id) => dispatch(upVoteComment(id)),
    downVoteComment:(id) => dispatch(downVoteComment(id)),
    openEditCommentDialog: (comment) => dispatch(openEditCommentDialog(comment)),
    openCommentDialog:(comment) => dispatch(openEditCommentDialog(comment))
  }
}
export default connect(null, mapDispatchToProps)(CommentControl);
