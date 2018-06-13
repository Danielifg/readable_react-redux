
import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import 'semantic-ui-css/semantic.min.css';
import { fetchPosts } from '../../actions';
import { connect } from 'react-redux';
import CommentSection from './CommentSection';
import PostCard from '../comp/PostCard'
import { fetchCommentsById } from '../../actions'


class PostSection extends Component{

 constructor(props){
      super(props);
        this.props.fetchPosts();
    }

render(){

      return(
      <div>
              <PostCard posts={ this.props.posts } />
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

export default connect(mapStateToProps,mapDispatchToProps)(PostSection);
