import * as Request from './http-header.js'
import uuid from 'uuid';


const headers = Request.headers;

export const getAllPosts = () =>
  fetch(`${Request.api}/posts`, { headers })
    .then(res => res.json())
    .then(posts =>  posts.filter(post => !post.deleted))


export const getPostsByCategory = (category) =>
    fetch(`${Request.api}/${category}/posts`, { headers })
      .then(res => res.json())

export const createPost = (post) =>
    fetch(`${Request.api}/posts`, {
        method: 'POST',
              headers: {
                ...headers,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  ...post,
                  id: uuid(),
                  timestamp: Date.now()
              })
          }).then(res => res.json())

export const editPost = ({id, title, body}) =>
  fetch(`${Request.api}/posts/${id}`, {
      method: 'PUT',
        headers: {
          ...headers,
          'Content-Type': 'application/json'
          },
        body: JSON.stringify({
            title,
            body,
            timestamp: Date.now()
          })
   }).then(res => res.json())

export const deletePost = (id) =>
  fetch(`${Request.api}/posts/${id}`, {
      method: 'DELETE',
      headers
  })

export const getPost = (id) =>
          fetch(`${Request.api}/posts/${id}`, { headers })
              .then(res => res.json())

export const votePost = (id, option) =>
          fetch(`${Request.api}/posts/${id}`, {
              method: 'POST',
              headers: {
                  ...headers,
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  option
              })
          }).then(res => res.json())
