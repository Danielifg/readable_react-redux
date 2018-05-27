import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import { connect } from 'react-redux';
import CommentCard from '../comp/CommentCard';
import { fetchCommentsById } from '../../actions';


class CommentSection extends Component {
  componentDidMount(){
    // this idForInitComments its not getting the value as from concole.log() on line 32
    // I want to show in the first view the comments of first post in the posts Array
    this.props.fetchCommentsById(this.props.idForInitComments);
}

render(){

  const { comments } = this.props;
  console.log(this.props)

    return(
       <RB.Col xsHidden md={4}>

      </RB.Col>
    )
 }
}

function mapStateToProps({ comments , posts}) {

 console.log(comments)
 console.log(posts)
 console.log(posts.idForInitComments)
return {

        idForInitComments: posts.idForInitComments,
        comments: comments
      }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchCommentsById: () => dispatch(fetchCommentsById())
    }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (CommentSection);

//export default CommentSection;
//import { CardHeader} from 'material-ui/ CardActions, CardHeader, CardText ';
