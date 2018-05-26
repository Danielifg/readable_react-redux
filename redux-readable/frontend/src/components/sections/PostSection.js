
import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import CommentSection from './CommentSection';
import PostCard from '../comp/PostCard';


class PostSection extends Component{

componentDidMount(){
  const { posts } = this.props
  this.props.fetchPosts();
}

  render(){
const { posts } = this.props
    return(
    <div>
          <RB.Col xs={6} md={4}>
            <PostCard posts={ posts } />
          </RB.Col>
    </div>
    )
  }
}


function mapStateToProps({posts}){

  return{
    posts: posts.posts
    //initComments: post.post
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchPosts: () => dispatch(fetchPosts())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(PostSection);
