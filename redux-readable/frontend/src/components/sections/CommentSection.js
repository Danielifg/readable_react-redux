import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import { connect } from 'react-redux';
import CommentCard from '../comp/CommentCard';
import { fetchCommentsById } from '../../actions';


class CommentSection extends Component {
  state ={
      initComments:[]
  }

  componentDidMount(){
    console.log(this.props.idForInitComments)
}

render(){

  const { posts } = this.props;
  const { initComments } = this.state;
  //console.log(initComments)
    return(
       <RB.Col xsHidden md={4}>
        <CommentCard comments={ initComments }/>
      </RB.Col>
    )
 }
}
function mapStateToProps(state) {

    return {
        idForInitComments: state.posts.idForInitComments,
        initComments: state.comments
      }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchCommentsById: (id) => dispatch(fetchCommentsById(id))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(CommentSection);

//export default CommentSection;
//import { CardHeader} from 'material-ui/ CardActions, CardHeader, CardText ';
