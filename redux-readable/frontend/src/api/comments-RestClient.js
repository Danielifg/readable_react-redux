import * as Request from './http-header.js'
import uuid from 'uuid';

const headers = Request.headers;

/**
 * Retrieve comments of single
 * "comments.js/get"
 */
 export const getCommentsByPostId = (id) =>
   fetch(`${Request.api}/posts/${id}/comments`, {headers})
   .then(res => res.json())
   .then(function(response){
     console.log(response.status)
     if(response.status != 200){
       console.log(response.status);
       return;
     }
     response => response.json()
   })


export const getCommentByCommentId = (id) =>
    fetch(`${Request.api}/comments/${id}`, {headers})
    .then(res => res.json())


/**
 *  Retrive comment by Parent Id
 *   "comments.js/getByParent"
 */
export const getCommentByParent = (parentId) =>
  fetch(`${Request.api}/parentId`, {
    method: 'POST',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      parentId
    })
  }).then(res => res.json())

/**
 * Add comment to db[]
 * "comments.js/add"
 */

   export const createComment = (comment) =>
       fetch(`${Request.api}/comments`, {
           method: 'POST',
           headers: {
               ...headers,
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({
               ...comment,
               id: uuid(),
               timestamp: Date.now()
           })
       }).then(res => res.json())

/**
 * Add comment to db[]
 * "comments.js/vote"
 */
export const voteComment = (id, option) =>
  fetch(`${Request.api}/comments/${id}`, {
    method: 'POST',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option
    })
  }).then(res => res.json())



/**
 * Disable comment if parent "Post" has been deleted
 * "comments.js/disableByParent"
 */
export const disableByParent = (post) =>
  fetch(`${Request.api}/${post}`, {
    method: 'PUT',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      post
    })
  }).then(res => res.json())

  export const editComment = (id, body) =>
      fetch(`${Request.api}/comments/${id}`, {
          method: 'PUT',
          headers: {
              ...headers,
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              body,
              timestamp: Date.now()
          })
      }).then(res => res.json())

  export const deleteComment = (id) =>
      fetch(`${Request.api}/comments/${id}`, {
          method: 'DELETE',
          headers
      })
