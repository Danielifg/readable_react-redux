import {
  getCommentsByPostId,
  getCommentByParent,
  createComment,
  disableByParent,
  editComment,
  deleteComment
} from '../api/comments-RestClient'


export const FETCH_COMMENTS_ACTIVE = 'FETCH_COMMENTS_ACTIVE';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAILURE = 'FETCH_COMMENTS_FAILURE';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const DELETE_COMMENT ='DELETE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';


export const fetchCommentsByPostId = (id) => dispatch => (
 getCommentsByPostId(id)
      .then((comments) => dispatch({
         type:FETCH_COMMENTS_SUCCESS,
         isFetching: false,
         payload:comments
     }))
);





export const createNewComment = (comment) => dispatch => (
    createComment(comment)
        .then(newComment => dispatch({
            type: CREATE_COMMENT,
            comment: newComment
        }))
);
export const deleteExistingComment = (id, postId) => dispatch => (
    deleteComment(id)
        .then(() => dispatch({
            type: DELETE_COMMENT,
            id,
            postId
        }))
);
export const editExistingComment = (id, body) => dispatch => (
    editComment(id, body)
        .then(comment => dispatch({
            type: EDIT_COMMENT,
            comment
        }))
);
