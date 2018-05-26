import { getAllPosts } from '../api/posts-RestClient';
import { getPostsByCategory } from '../api/posts-RestClient';

export const LOAD_POSTS = 'LOAD_POSTS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';


export const fetchPosts = () => dispatch => (
    getAllPosts()
        .then(posts => dispatch({
            type: LOAD_POSTS,
            posts
        }))
);

export const fetchPostsByCategory = (category) => dispatch => (
    getPostsByCategory()
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            category,
            posts
        }))
);
