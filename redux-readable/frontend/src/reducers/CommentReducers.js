import {
  FETCH_COMMENTS_ACTIVE,
  FETCH_COMMENTS_SUCCESS,
  FETCH_COMMENTS_FAILURE
} from '../actions';

export const comments = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_COMMENTS_ACTIVE':
        case 'FETCH_COMMENTS_FAILURE':
        return { ...state, isFetching: action.isFetching, error: action.error };

        case 'FETCH_COMMENTS_SUCCESS':
        return { ...state, data: action.payload, isFetching: action.isFetching,
                 error: null };
        default:return state;
    }
};
const initialState = {
    data:null,
    isFetching:false,
    error:null
  };
