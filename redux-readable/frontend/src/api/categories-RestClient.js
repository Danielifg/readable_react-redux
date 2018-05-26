import * as request from './http-header'
const headers = request.headers;

export const getAllCategories = () =>
  fetch(`${request.api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
