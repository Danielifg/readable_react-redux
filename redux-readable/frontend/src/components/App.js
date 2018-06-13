import { Route, Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import React, { Component } from 'react';
import Book from 'react-icons/lib/fa/book'
import Root from './Root'

import CategorySection from './sections/CategorySection';
import PostSection from './sections/PostSection';
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
        <Root/>
    )}/>
  </div>
    )
  }
}

export default withRouter(App);
