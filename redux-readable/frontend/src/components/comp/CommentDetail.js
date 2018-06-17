import { connect } from 'react-redux';
import React, {Component} from 'react';
import CommentCard from './CommentCard';
import {openCommentDialog,
        openEditCommentDialog } from '../../actions';
import Button from 'material-ui/Button';
import AddComment from 'react-icons/lib/md/control-point-duplicate';
import {getCommentByCommentId} from '../../api/comments-RestClient'

class CommentDetail extends Component{
  state = {
    comment:[]
  }
  componentWillMount(){
    const { match:{ params:{commentId} } } = this.props
    getCommentByCommentId(commentId)
      .then(comment => {
        console.log(comment);
        this.setState({ comment : comment })
      })
      console.log(this.state.comment)
  }
  render(){
    const { match:{ params:{commentId} }, openCommentDialog } = this.props
    const { comment } = this.state
      const fabStyle = {
          margin: 0,
          top: 'auto',
          right: 20,
          bottom: 20,
          left: 'auto',
          position: 'fixed',
      };
    return(
      <div>
          <CommentCard commentId={commentId} comments={ comment }/>
          <Button
              fab
              style={fabStyle}
              color="primary"
              aria-label="add"
              onClick={openCommentDialog}>
               <AddComment size={24} />
          </Button>
      </div>
    )
  }
}

function mapStateToProps ({ postDetail: { post }, categories: { categories },
        comments},{  match: { params: { post_id }} }) {
    return {
    comments:comments
  }
}

function mapDispatchToProps(dispatch){
  return{
    openCommentDialog:() => dispatch(openCommentDialog()),
    openEditCommentDialog:() => dispatch(openEditCommentDialog())
  }
}

 //export default CommentDetail
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentDetail);
