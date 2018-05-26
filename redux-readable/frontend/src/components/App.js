import * as CategoriesAPI from '../api/categories-RestClient';
import * as PostsAPI from '../api/posts-RestClient';
import * as CommentsAPI from '../api/comments-RestClient';
import * as RB from 'react-bootstrap';
import { Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import AddComment from 'react-icons/lib/ti/document-add'
import Book from 'react-icons/lib/fa/book'

import CategorySection from './sections/CategorySection';
import PostSection from './sections/PostSection';
import CommentSection from './sections/CommentSection'
import DetailPost from './comp/DetailPost';

import 'semantic-ui-css/semantic.min.css';
import '../styles/main.css'



class App extends Component {


  render() {

    const outline ={
      //border:'solid 1px black',
      float:'right',
        transform: 'rotate(40deg)',
        fontZise:'10px',
        marginTop:'-15px'

    }

return (
  <div>
    <Route exact path="/" render={() => (
      <div>
      <RB.PageHeader>
          Example page header <small>Subtext for header</small>
          <div  style={outline}>
            <div>
                <h4 ><Book size={20}/>Readable</h4>
            </div>
          </div>
    </RB.PageHeader>

    <RB.Grid>
      <RB.Row className="show-grid">
          <CategorySection/>
          <PostSection/>
          <CommentSection/>
      </RB.Row>
    </RB.Grid>
  </div>
  )}/>
        <Route exact path="/:category" component={PostSection}/>
        <Route exact path="/:category/:post_id" component={DetailPost}/>

  </div>



    )
  }
}

export default withRouter(App);
