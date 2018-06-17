import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { fetchCommentsById } from '../../actions';
import { connect } from 'react-redux';
import CommentControl from '../controllers/CommentControl';
import { Link } from 'react-router-dom';
import Launch from 'react-icons/lib/md/launch';

export default class CommentCard extends Component {
render(){
  const {fixStyle, comments,commentId} = this.props



function CardControl(props){
    const id = props.id
    if(props.commentId){
      return(
        <CommentControl/>
      )
    }else{
      return(
        <Link to={`/comments/${id}`}>
            <Launch  size={24} />
        </Link>
      )
    }
  }

function Card(props){
  const comments = props.comments
  const fixStyle = props.fixStyle
  return(
        <div key={comments.id} className="ui card" style={fixStyle}>
            <div className="content">
                <div>{comments.author}</div>
                    <div className="right floated meta">{comments.timestamp}</div>
                      </div>Zz
                        <div className="image">
                          <p style={fixStyle}>{comments.body}</p>
                        </div>
                        <div className="content">
                                <span className="right floated">
                                  <i className="heart outline like icon"></i>
                                  {comments.voteScore}
                                </span>
                        </div>
                  <div className="extra content">
                  {<CardControl commentId={commentId} id={comments.id}/>}
                  </div>
          </div>)
}


function Content(props){
  const comments = props.comments
  const fixStyle = props.fixStyle
  if(comments.length > 1){
    return(
      <div>
      {comments.map(comments => (
        <Card fixStyle={fixStyle} comments={comments}/>
      ))}
      </div>
    )
  }else {
    return(<Card fixStyle={fixStyle} comments={comments}/>)
  }
}


return(<Content  fixStyle={fixStyle} comments={comments}/>)

  }
}
