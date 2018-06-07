import { combineReducers } from 'redux';
import categories from './CategoryReducer'
import posts from './PostsReducer'
import comments from './CommentReducers'

  export default combineReducers({
    categories,
    posts,
    comments
});
