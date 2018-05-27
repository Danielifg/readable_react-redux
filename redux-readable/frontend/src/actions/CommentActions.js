import { getCommentById } from '../api/comments-RestClient'


export const FETCH_COMMENTS = 'FETCH_COMMENTS';

export const fetchCommentsById = (id) => dispatch =>(
    getCommentById(id)
    .then(comments => dispatch({
      type: FETCH_COMMENTS,
      id,
      comments
    }))
);
