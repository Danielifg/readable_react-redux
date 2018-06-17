 import React, { Component } from 'react';
import * as RB from 'react-bootstrap';
import { connect } from 'react-redux';
import CommentCard from '../comp/CommentCard';
import { fetchCommentsById } from '../../actions';


class CommentSection extends Component {
render(){
          const fixComment = {
              padding:'8px',
              margin:'0px auto'
            }
         const { comments } = this.props
         comments.map(i =>{ console.log(i)})
  return(
        <div>
            <CommentCard
                fixStyle={fixComment}
                comments={comments} />
       </div>
    )
  }
}
export default CommentSection

// function mapStateToProps(state) {
//     return {
//         idForInitComments: state.posts.idForInitComments,
//         isFetching: state.isFetching,
//         data: state.data,
//         error: state.error
//       }
//   }
//
// function mapDispatchToProps (dispatch) {
//     return {
//         fetchCommentsById: (id) => dispatch(fetchCommentsById(id))
//     }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps)
//   (CommentSection);
