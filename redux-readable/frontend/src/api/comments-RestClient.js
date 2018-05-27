import * as Request from './http-header.js'

const headers = Request.headers;

/**
 * Retrieve comment by Id
 * "comments.js/get"
 */
export const getCommentById = (id) =>
  fetch(`${Request.api}/posts/${id}/comments`, {headers})
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
export const addComment = (comment) =>
  fetch(`${Request.api}/comment`, {
    method: 'POSTT',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      comment
    })
  }).then(res => res.json())
  .then(data => data.comments)

/**
 * Add comment to db[]
 * "comments.js/vote"
 */
export const vote = (id, option) =>
  fetch(`${Request.api}/${id}/${option}`, {
    method: 'POST',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      option
    })
  }).then(res => res.json())
  .then(data => data.comments)


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


/**
 * Disable comment directly
 * "comments.js/disable"
 */
export const disable = (id) =>
  fetch(`${Request.api}/${id}`, {
    method: 'PUT',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  }).then(res => res.json())



/**
 * Disable comment directly
 * "comments.js/edit"
 */
export const edit = (id) =>
  fetch(`${Request.api}/${id}`, {
    method: 'POST',
    headers: {
      ...Request.headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      id
    })
  }).then(res => res.json())
