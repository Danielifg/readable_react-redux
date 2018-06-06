import { getCommentById } from '../api/comments-RestClient'


export const FETCH_COMMENTS_ACTIVE = 'FETCH_COMMENTS_ACTIVE';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';


export const fetchCommentsById = id => dispatch =>{
  dispatch({
    type: 'FETCH_COMMENTS_ACTIVE',
    isFetching : true,
    error:null
  });

  return getCommentById(id)
  .then(comments => {
      dispatch({
        type:'FETCH_COMMENTS_SUCCESS',
        isFetching: false,
        payload:comments
      });
  })
  .catch(err => {
    dispatch({
      type:'FETCH_ACTIVE_PLAYER_FAILURE',
      isFetching: false,
      error: err
    });
    console.log('Failure: ', err);
  });
};
