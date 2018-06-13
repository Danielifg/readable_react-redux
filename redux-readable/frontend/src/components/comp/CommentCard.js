import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { fetchCommentsById } from '../../actions';
import { connect } from 'react-redux';
import CommentControl from '../controllers/CommentControl';

class CommentCard extends Component {

  render(){
    const fixComment ={
      padding:'8px',
      margin:'0px auto'
    }

    if(this.props.comments != null){
      return(
      <div>
      {this.props.comments.map(i=>{
          return(
            <div key={i.id} className="ui card" style={fixComment}>
              <div className="content">
                <div>{i.author}</div>
                <div className="right floated meta">{i.timestamp}</div>
              </div>
              <div className="image">
                <p style={fixComment}>{i.body}</p>
              </div>
              <div className="content">
                <span className="right floated">
                  <i className="heart outline like icon"></i>
                  {i.voteScore}
                </span>
              </div>
              <div className="extra content">
                  <CommentControl  commentId={i.id} comment={i}/>
              </div>
            </div>
          )
        })}
      </div>
      )
    }else{
      return null
    }
  }
}

function mapStateToProps({comments}) {
    return {
      isFetching: comments.isFetching,
      error: comments.error,
      comments:comments.comments
      }
}

export default connect(
  mapStateToProps,
  null
)(CommentCard);
