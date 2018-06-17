import FormDialog from './comp/FormDialog'
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as RB from 'react-bootstrap';
import CategorySection from './sections/CategorySection';
import PostSection from './sections/PostSection';
import CommentSection from './sections/CommentSection';
import Book from 'react-icons/lib/fa/book'
import 'semantic-ui-css/semantic.min.css';
import Dialogs from './comp/Dialogs';
import { Route, withRouter } from 'react-router-dom';
import {getCommentById} from '../api/comments-RestClient';
import CommentDetail from './comp/CommentDetail';


class Root extends Component{

  state={
    initialComments:[]
  }

componentWillMount(){
    getCommentById('8xf0y6ziyjabvozdd253nd')
      .then( initialComments => {
        console.log(initialComments.length)
        this.setState({initialComments:initialComments});
      })
  }

render(){
    console.log(this.state.initialComments);
  const outline ={
    //border:'solid 1px black',
    float:'right',
      transform: 'rotate(40deg)',
      fontZise:'10px',
      marginTop:'-15px'
    }

  const lines={
  margin:'auto'
  //,border:'solid 1px black'
  }

  const margin={
  margin:'auto',
  width:'90%'
  }
  //<FormDialog/>
   const { initialComments } = this.state;

return(
    <div>
    <RB.PageHeader>
        Readable <small>React-redux application</small>
        <div  style={outline}>
          <div>
              <h4 ><Book size={20}/>Readable</h4>
          </div>
        </div>
    </RB.PageHeader>

<Dialogs/>

    <Route exact path="/" render={() => (
      <div style={margin}>
          <RB.Row className="show-grid" >
            <RB.Col xs={6} md={4} style={lines}>
                <CategorySection/>
            </RB.Col>
            <RB.Col xs={6} md={4} style={lines}>
                <PostSection/>
          </RB.Col>
          <RB.Col xsHidden md={4} style={lines}>
              <CommentSection comments={initialComments}/>
          </RB.Col>
        </RB.Row>
      </div>
   )}/>

   <Route exact path="/comments/:commentId"  component={CommentDetail}/>
  </div>
   )
  }
}

export default withRouter(Root);
