import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';

class PostCard extends Component {
  render(){
    const { posts } = this.props;
    return(
      <div>
      {posts.map(i => {
        return(
          <div key={i.id}>
            <div className="ui raised segment">
              <h4>{i.title}</h4><p className='post_inline-fix'>Score {i.voteScore}</p>
                <p><b>{i.author}</b></p>
                <p>{i.body}</p>
                <div className='post-footer'>
                <button > Vote!  </button>
                </div>
            </div>
          </div>
        );
      })}
      </div>
    )
  }
}

export default PostCard;
