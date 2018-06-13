import {
  FETCH_COMMENTS_ACTIVE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE,
  CREATE_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT
} from '../actions';

const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COMMENTS_ACTIVE':
        case 'FETCH_COMMENTS_FAILURE':
        return {
            ...state,
            isFetching: action.isFetching,
            error: action.error
          };

        case 'FETCH_COMMENTS_SUCCESS':
        return {
            ...state,
            comments: action.payload,
            isFetching: action.isFetching,
                 error: null
               };
         case 'CREATE_COMMENT':
          let existingComments = state[action.comment.parentId] || [];
          return {
               ...state,
              [action.comment.parentId]: existingComments.concat(action.comment)
              }
              case 'UP_VOTE_COMMENT':
              case 'DOWN_VOTE_COMMENT':
              case 'EDIT_COMMENT':
                  existingComments = state[action.comment.parentId] || [];
                  return {
                      ...state,
                      [action.comment.parentId]: existingComments
                          .filter(comment => comment.id !== action.comment.id)
                          .concat(action.comment)
                          .sort((a, b) => {
                              return a.timestamp - b.timestamp;
                          })
                  }
              case 'DELETE_COMMENT':
                  existingComments = state[action.postId] || []
                  return {
                      ...state,
                      [action.postId]: existingComments
                    }
                    default:
                        return state;
          };
}
const initialState = {
    comments:null,
    isFetching:false,
    error:null
  };

export default comments;
