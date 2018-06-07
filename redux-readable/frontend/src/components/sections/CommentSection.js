import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import { connect } from 'react-redux';
import CommentCard from '../comp/CommentCard';
import { fetchCommentsById } from '../../actions';


class CommentSection extends Component {


componentDidUpdate(){
  this.props.fetchCommentsById(this.props.idForInitComments);
}

render(){

  return(
        <div>
        <RB.Col xsHidden md={4}>
                <CommentCard />
          </RB.Col>
       </div>
  )  }
}

function mapStateToProps(state) {
    return {
        idForInitComments: state.posts.idForInitComments,
        isFetching: state.isFetching,
        data: state.data,
        error: state.error
      }
  }

function mapDispatchToProps (dispatch) {
    return {
        fetchCommentsById: (id) => dispatch(fetchCommentsById(id))
    }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (CommentSection);
