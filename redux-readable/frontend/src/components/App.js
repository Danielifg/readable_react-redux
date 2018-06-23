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
import PostDetail from './comp/PostDetail';
import PostSort from './comp/PostSort';



class App extends Component {
    render() {

      const outline ={
        //border:'solid 1px black',
        float:'right',
          transform: 'rotate(40deg)',
          fontZise:'10px',
          marginTop:'-15px'
        }

      const lines={
      margin:'auto'
      }

      const margin={
      margin:'auto',
      width:'90%'
      }
return (
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

                      <CategorySection style={lines}/>

                 <RB.Col xs={6} md={4} style={lines}>
                        <PostSort/>
                  </RB.Col>
                  <RB.Col xs={6} md={4} style={lines}>
                      <PostSection/>
                </RB.Col>
              </RB.Row>
            </div>
         )}/>
                <Route exact path="/:category/:post_id" component={PostDetail}/>
        </div>
        );
    }
}

export default withRouter(App);
