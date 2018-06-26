import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down';
import Trash from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
import Launch from 'react-icons/lib/md/launch';
import { Link } from 'react-router-dom';
import CommentIcon from 'material-ui-icons/Comment';

import {
      deleteExistingPost,
      openEditPostDialog,
      upVotePost,
      downVotePost,
      fetchCommentsByPostId
    } from '../../actions'

 class PostControl extends Component{
  render(){

  const {
            postId,
            deleteExistingPost,
            openEditPostDialog,
            upVotePost,
            downVotePost,
            post,
            fetchCommentsByPostId,
            post:{commentCount}
        } = this.props
  const { category } = post;
return(
    <div>
      <span className="left floated like">
               <Link to={`/${category}/${postId}`}>
                      <Launch onClick={fetchCommentsByPostId(postId)}
                       size={24} />
                  </Link>

          <Trash size={24} onClick={() => deleteExistingPost(postId)} />
          <EditIcon size={24} onClick={() => openEditPostDialog(post)} />
            <CommentIcon />{commentCount}
      </span>
      <span className="right floated star">
          <ThumbsUp   size={24} onClick={() => upVotePost(postId)}       />
          <ThumbsDown size={24} onClick={() => downVotePost(postId)}     />
      </span>
    </div>
  )
 }
}
function mapDispatchToProps(dispatch){
  return{
    deleteExistingPost:(id)     => dispatch(deleteExistingPost(id)),
    openEditPostDialog:(post)   => dispatch(openEditPostDialog(post)),
    upVotePost:(id)             => dispatch(upVotePost(id)),
    downVotePost:(id)           => dispatch(downVotePost(id)),
    fetchCommentsByPostId:(id)  => dispatch(fetchCommentsByPostId(id))
  }
}



export default connect(
  null,
  mapDispatchToProps
)(PostControl);
