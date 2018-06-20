import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { fetchCommentsById } from '../../actions';
import { connect } from 'react-redux';
import CommentControl from '../controllers/CommentControl';


export default class CommentCard extends Component {
render(){
  const {fixStyle, comments,commentId} = this.props
    return(
      <div>
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
                    <CommentControl/>
                  </div>
          </div>
      </div>
    )
  }
}
