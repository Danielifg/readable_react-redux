import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { fetchCommentsById } from '../../actions';
import { connect } from 'react-redux';

class CommentCard extends Component {
constructor(props){
  super(props);

}

  render(){
    console.log(this.props)
    const fixComment ={
      padding:'8px'
    }

    if(this.props.comments != null){
      return(
      <div>
      {this.props.comments.map(i=>{
          return(
            <div key={i.id} class="ui card">
              <div class="content">
                <div>{i.author}</div>
                <div class="right floated meta">{i.timestamp}</div>
              </div>
              <div class="image">
                <p style={fixComment}>{i.body}</p>
              </div>
              <div class="content">
                <span class="right floated">
                  <i class="heart outline like icon"></i>
                  {i.voteScore}
                </span>
              </div>
              <div class="extra content">
                <div class="ui large transparent left icon input">
                  <i class="heart outline icon"></i>
                  <input type="text" placeholder="Add Comment..."></input>
                </div>
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
//export default CommentCard;

function mapStateToProps({comments}) {
    return {
      isFetching: comments.isFetching,
      comments: comments.comments,
      error: comments.error
      }
}

export default connect(mapStateToProps)(CommentCard);
