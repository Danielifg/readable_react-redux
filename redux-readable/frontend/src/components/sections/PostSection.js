
import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import CommentSection from './CommentSection';
import PostCard from '../comp/PostCard'
import { fetchCommentsById } from '../../actions';
import { Route, withRouter } from 'react-router-dom';
import CommentDetail from '../comp/CommentDetail';



class PostSection extends Component{
  componentDidMount(){
      this.props.fetchPosts();
    }

render(){
  const { posts } = this.props;

  return(
      <div>
      {posts.map((post, index) => (
                  <PostCard key={index} post={post} />
              ))}

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
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(PostSection))
