import {
    CLOSE_SNACKBAR,
    UP_VOTE_POST,
    DOWN_VOTE_POST,
    CREATE_POST,
    EDIT_POST,
    DELETE_POST,
    CREATE_COMMENT,
    UP_VOTE_COMMENT,
    DOWN_VOTE_COMMENT,
    DELETE_COMMENT,
    EDIT_COMMENT
 } from '../actions';

function snackbar(state = initialSnackbarState, action) {
    switch (action.type) {
        case CLOSE_SNACKBAR:
            return initialSnackbarState;
        case UP_VOTE_POST:
        case UP_VOTE_COMMENT:
            return {
                isOpen: true,
                content: "Up Vote Casted!"
            }
        case DOWN_VOTE_POST:
        case DOWN_VOTE_COMMENT:
            return {
                isOpen: true,
                content: "Down Vote Casted!"
            }
        case CREATE_POST:
            return {
                isOpen: true,
                content: "Post Created!"
            }
        case EDIT_POST:
            return {
                isOpen: true,
                content: "Post Edited!"
            }
        case DELETE_POST:
            return {
                isOpen: true,
                content: "Post Deleted!"
            }
        case DELETE_COMMENT:
            return {
                isOpen: true,
                content: "Comment Deleted!"
            }
        case CREATE_COMMENT:
            return {
                isOpen: true,
                content: "Comment Created!"
            }
        case EDIT_COMMENT:
            return {
                isOpen: true,
                content: "Comment Edited!"
            }
        default:
            return state;
    }
}

const initialSnackbarState = {
    isOpen: false,
    conent: null
}
export default snackbar;
