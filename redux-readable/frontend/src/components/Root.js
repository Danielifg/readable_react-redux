import FormDialog from './comp/FormDialog'


import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import * as RB from 'react-bootstrap';
import CategorySection from './sections/CategorySection';
import PostSection from './sections/PostSection';
import CommentSection from './sections/CommentSection';
import Book from 'react-icons/lib/fa/book'
import Paper from '@material-ui/core/Paper';
import 'semantic-ui-css/semantic.min.css';
import Dialogs from './comp/Dialogs';



class Root extends Component{
render(){

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
  //
return(
    <div>
    <RB.PageHeader>
        Example page header <small>Subtext for header</small>
          <FormDialog/>
        <div  style={outline}>
          <div>
              <h4 ><Book size={20}/>Readable</h4>
          </div>
        </div>
    </RB.PageHeader>

      <div style={margin}>
      <Dialogs/>
          <RB.Row className="show-grid" >
            <RB.Col xs={6} md={4} style={lines}>
                <CategorySection/>
            </RB.Col>
            <RB.Col xs={6} md={4} style={lines}>
                <PostSection/>
          </RB.Col>
          <RB.Col xsHidden md={4} style={lines}>
              <CommentSection/>
          </RB.Col>
        </RB.Row>
    </div>
  </div>
  )
  }
}

export default Root;
