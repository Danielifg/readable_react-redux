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
  deleteExistingPost,
  upVotePost,
  downVotePost,
  editExistingPost,
  createNewComment
} from '../../actions';

class PostCard extends Component {
  render(){

    const timeAgo = TimeAgo();
    const { post, post:{id},
            deleteExistingPost,
            editExistingPost,
            upVotePost,
            downVotePost,
            createNewComment,
          } = this.props;
    const postStyle ={
      cursor:'pointer',
      margin:'0px auto'
    }

 return(
        <div className="ui card" style={postStyle} key={post.id}>
            <div className="content">
              <i className="right floated like icon">
                  {post.voteScore}
              </i>
              <i className="ui avatar image"> {post.author} </i>
              <div className="header">{post.title}</div>
              <div className="description">
                <p>{post.body}</p>
                </div>
            </div>
            <div className="extra content">
                <PostControl postId={id} post={post}/>
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




export default connect(
  mapStateToProps,
  null
)(PostCard);
