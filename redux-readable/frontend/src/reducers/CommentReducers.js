import {
  FETCH_COMMENTS_ACTIVE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
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

        default:return state;
    }
};
const initialState = {
    comments:null,
    isFetching:false,
    error:null
  };
export default comments;
