import {
  FETCH_COMMENTS,
  fetchCommentsById
} from '../actions';

function comments (state = initialCommentsState, action){
  switch(action.type){
    case FETCH_COMMENTS:
      return{
        ...state,
        initComments: action.comments
      };
    default:
    return state;
  }
}

const initialCommentsState = {
  comments:[]
}
