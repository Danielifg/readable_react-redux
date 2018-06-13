import React, { Component } from 'react';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down';
import Trash from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
import AddComment from 'react-icons/lib/md/control-point-duplicate';
import { connect } from 'react-redux';

import {
    deleteExistingComment,
    upVoteComment,
    downVoteComment,
    openEditCommentDialog,
    openCommentDialog
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
      <span class="left floated like">
          <Trash size={24} onClick={() => deleteExistingComment(commentId,comment)} />
          <EditIcon size={24} onClick={() => openEditCommentDialog(comment)} />
      </span>
      <span class="right floated star">
          <ThumbsUp   size={24} onClick={() => upVoteComment(commentId)}    />
          <ThumbsDown size={24} onClick={() => downVoteComment(commentId)}     />
          <AddComment size={24} onClick={() => (openEditCommentDialog(comment))}    />
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
