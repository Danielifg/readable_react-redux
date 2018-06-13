import {
  getPostsByCategory,
  deletePost,
  getAllPosts,
  editPost,
  getPost,
  votePost,
  createPost
} from '../api/posts-RestClient';


export const LOAD_POSTS = 'LOAD_POSTS';
export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const DELETE_POST ='DELETE_POST';
export const GET_POST ='GET_POST';
export const VOTE_POST ='VOTE_POST';
export const CREATE_POST ='CREATE_POST';
export const EDIT_POST ='EDIT_POST';
export const SORT_POSTS_BY_UP_VOTES='SORT_POSTS_BY_UP_VOTES';
export const SORT_POSTS_BY_DOWN_VOTES = 'SORT_POSTS_BY_DOWN_VOTES';
export const SORT_POSTS_BY_TIME = 'SORT_POSTS_BY_TIME';
export const SELECT_POST = 'SELECT_POST';



export const fetchPosts = () => dispatch => (
    getAllPosts()
        .then(posts => dispatch({
            type: LOAD_POSTS,
            posts
        })
    )
)

export const fetchPostsByCategory = (category) => dispatch => (
    getPostsByCategory(category)
        .then(posts => dispatch({
            type: SELECT_CATEGORY,
            category,
            posts
        }))
);

export const deleteExistingPost = ( id ) => dispatch => {
  deletePost(id)
  .then(()=> dispatch({
    type:DELETE_POST,
    id
  }))
}

//create
export const createNewPost = (post) => dispatch => (
    createPost(post)
        .then(newPost => dispatch({
            type: CREATE_POST,
            newPost
        }))
);

//update
export const editExistingPost = ({id, title, body}) => dispatch => (
    editPost({id, title, body})
        .then(post => dispatch({
            type: EDIT_POST,
            post
        }))
);

export const fetchPostDetails = (postId, category) => dispatch => (
    getPost(postId)
        .then(post => dispatch({
            type: SELECT_POST,
            post,
            category
        }))
);

export const sortPostByUpVotes = () => ({
    type: SORT_POSTS_BY_UP_VOTES
});

export const sortPostByDownVotes = () => ({
  type: SORT_POSTS_BY_DOWN_VOTES
});
export const sortPostsByTime = () => ({
    type: SORT_POSTS_BY_TIME
});
