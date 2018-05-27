import {
  FETCH_COMMENTS,
} from '../actions';

function comments (state = initialCommentsState, action){
  switch(action.type){
    case FETCH_COMMENTS:
        return {
          ...state,
          comments: action.comments
            }
    default:
        return state;
  }
}

const initialCommentsState = {
  comments:[]
}
