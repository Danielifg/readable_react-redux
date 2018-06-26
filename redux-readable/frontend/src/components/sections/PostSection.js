
import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import CommentSection from './CommentSection';
import PostCard from '../comp/PostCard'
import { fetchCommentsById , openPostDialog } from '../../actions';
import { Route, withRouter } from 'react-router-dom';
import CommentDetail from '../comp/CommentDetail';
import AddComment from 'react-icons/lib/md/control-point-duplicate';
import Button from 'material-ui/Button';



class PostSection extends Component{
  componentDidMount(){
      this.props.fetchPosts();
    }

render(){
  const { posts ,openPostDialog} = this.props;
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
      {posts.map((post, index) => (
                  <PostCard key={index} post={post} postId={this.props.params} />
              ))}
                   <Button
                         fab
                         style={fabStyle}
                         color="primary"
                         aria-label="add"
                         onClick={openPostDialog}>
                      <AddComment size={24} />
                  </Button>
      </div>
    )
  }
}


function mapStateToProps({posts,comments}){

  return{
    posts: posts.posts,
    comments: comments
  }
}

function mapDispatchToProps(dispatch){
   return {
    fetchPosts: () => dispatch(fetchPosts()),
      openPostDialog:() => dispatch(openPostDialog())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostSection))
