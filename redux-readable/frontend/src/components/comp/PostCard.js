import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import IconButton from 'material-ui/IconButton';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import PostControl from '../controllers/PostControl';
import UserIcon from 'react-icons/lib/md/account-circle';
import TimeAgo from 'time-ago';

import {
  fetchCommentsByPostId,
  deleteExistingPost,
  upVotePost,
  downVotePost,
  editExistingPost,
  createNewComment
} from '../../actions';

class PostCard extends Component {
  componentDidMount() {
      const { post: {id}, fetchCommentsByPostId } = this.props;
      fetchCommentsByPostId(id);
      console.log(id)
  }
  render(){
    const timeAgo = TimeAgo();
    const { post,
            deleteExistingPost,
            editExistingPost,
            upVotePost,
            downVotePost,
            createNewComment,
            fetchCommentsById
          } = this.props;
    const postStyle ={
      cursor:'pointer',
      margin:'0px auto'
    }

 return(
        <div className="ui card" style={postStyle} key={post.id}
              onClick={() => fetchCommentsByPostId(post.id)}>
            <div className="content">
              <i className="right floated like icon">{post.voteScore}</i>
              <i className="ui avatar image"> {post.author} </i>
              <div className="header">{post.title}</div>
              <div className="description">
                <p>{post.body}</p>
                </div>
            </div>
            <div className="extra content">
                <PostControl  postId={post.id} post={post}/>
            </div>
        </div>
    )
  }
}


function mapStateToProps({posts}){
  return{
    posts:posts.posts
  }
}


function mapDispatchToProps(dispatch){
  return{
    fetchCommentsByPostId:(id) => fetchCommentsByPostId(id)
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostCard);
