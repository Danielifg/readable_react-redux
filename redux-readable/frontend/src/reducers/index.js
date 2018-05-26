import { combineReducers } from 'redux';
import categories from './CategoryReducer'
import posts from './PostsReducer'

  export default combineReducers({
    categories,
  posts
});
