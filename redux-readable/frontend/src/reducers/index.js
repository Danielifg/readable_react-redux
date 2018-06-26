import { combineReducers } from 'redux';
import categories from './CategoryReducer'
import posts from './PostsReducer'
import comments from './CommentReducers'
import postDialog from './PostDialogReducer'
import postDetail from './PostDetailReducer'
import commentDialog from './CommentDialogReducer'


  export default combineReducers({
    categories,
    posts,
    comments,
    postDialog,
    postDetail,
    commentDialog
});
