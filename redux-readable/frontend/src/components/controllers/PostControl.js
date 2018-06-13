import React, { Component } from 'react';
import { connect } from 'react-redux';
import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down';
import Trash from 'react-icons/lib/fa/trash-o';
import EditIcon from 'react-icons/lib/fa/edit';
import AddComment from 'react-icons/lib/md/control-point-duplicate';
import Button from 'material-ui/Button';
import {
      deleteExistingPost,
      openEditPostDialog,
      upVotePost,
      downVotePost,
      openPostDialog
    } from '../../actions'

 class PostControl extends Component{

  render(){

  const {   postId,
            deleteExistingPost,
            openEditPostDialog,
            upVotePost,
            downVotePost,
            openPostDialog,
            post
        } = this.props

        const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};


  return(
    <div>
      <span class="left floated like">
          <Trash size={24} onClick={() => deleteExistingPost(postId)} />
          <EditIcon size={24} onClick={() => openEditPostDialog(post)} />
      </span>
      <span class="right floated star">
          <ThumbsUp   size={24} onClick={() => upVotePost(postId)}       />
          <ThumbsDown size={24} onClick={() => downVotePost(postId)}     />


                      <Button
                        fab
                        style={fabStyle}
                        color="primary"
                        aria-label="add"
                        onClick={openPostDialog}>
                        <AddComment size={24} />
                    </Button>
      </span>
    </div>
  )
 }
}
function mapDispatchToProps(dispatch){
  return{
    deleteExistingPost:(id) => dispatch(deleteExistingPost(id)),
    openEditPostDialog:(post) => dispatch(openEditPostDialog(post)),
    upVotePost:(id) => dispatch(upVotePost(id)),
    downVotePost:(id) => dispatch(downVotePost(id)),
    openPostDialog:() => dispatch(openPostDialog())
  }
}



export default connect(
  null,
  mapDispatchToProps
)(PostControl);
