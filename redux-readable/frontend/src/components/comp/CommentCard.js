import React, {Component} from 'react';
import 'semantic-ui-css/semantic.min.css';
import { fetchCommentsById } from '../../actions';
import { connect } from 'react-redux';

class CommentCard extends Component {
constructor(props){
  super(props);

}

componentWillMount(){
console.log(this.props.data)
}

componentWillUpdate(){
console.log(this.props.data)
}

componentWillReceiveProps(nextProps){
    console.log(nextProps)
}

componentDidUpdate(){
  console.log(this.props.data)
}
componentDidUpdate(){

    console.log(this.props.data)
}

  render(){
    console.log(this.props.data)
    const fixComment ={
      padding:'8px'
    }

    return(

    <div>

      Works!
    </div>
    )
  }
}
//export default CommentCard;

function mapStateToProps(state) {
    return {
      isFetching: state.isFetching,
      data: state.payload,
      error: state.error
      }
}


export default connect(
  mapStateToProps,
  null)
  (CommentCard);
