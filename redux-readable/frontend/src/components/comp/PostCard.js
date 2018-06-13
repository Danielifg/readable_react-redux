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
  fetchCommentsById,
  deleteExistingPost,
  upVotePost,
  downVotePost,
  editExistingPost,
  createNewComment
} from '../../actions';

class PostCard extends Component {

  render(){
    const timeAgo = TimeAgo();
    const { posts,
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
    <div>
      {posts.map(i => {
        return(
          <div class="ui card" style={postStyle} key={i.id}
              onClick={() => fetchCommentsById(i.id)}>
            <div className="content">
              <i class="right floated like icon">{i.voteScore}</i>
              <i class="ui avatar image"> {i.author} </i>
              <div class="header">{i.title}</div>
              <div class="description">
                <p>{i.body}</p>
                </div>
            </div>
            <div class="extra content">
                <PostControl  postId={i.id} post={i}/>
            </div>


          </div>
        );
      })}
      </div>
    )
  }
}



function mapDispatchToProps(dispatch){
  return{
    fetchCommentsById:(id) => fetchCommentsById(id)
  }
}


export default connect(
  null,
  mapDispatchToProps
)(PostCard);
