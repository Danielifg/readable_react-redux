import React, {Component} from 'react';
import { connect } from 'react-redux';
import PostDialog from './PostDialog';
import CommentDialog from './CommentDialog';
//import ToastMessage from './ToastMessage';

import {
    closePostDialog,
    closeCommentDialog,
    closeSnackbar
} from '../../actions';

// <ToastMessage
//     open={isSnackbarOpen}
//     onRequestClose={closeSnackbar}/>
class Dialogs extends Component {
    render() {
        const {
            isPostDialogOpen, isCommentDialogOpen, isSnackbarOpen,
            closePostDialog, closeCommentDialog, closeSnackbar
        } = this.props;
        return (
            <div>
                <PostDialog
                    open={isPostDialogOpen}
                    onRequestClose={closePostDialog}/>
                <CommentDialog
                    open={isCommentDialogOpen}
                    onRequestClose={closeCommentDialog}/>

            </div>
        );
    }
}

function mapStateToProps ({
    postDialog: { openPostDialog: isPostDialogOpen },
    commentDialog: { isOpen: isCommentDialogOpen },
    snackbar: { isOpen: isSnackbarOpen}
    }) {
    return {
        isPostDialogOpen,
        isCommentDialogOpen,
        isSnackbarOpen
    }
}

function mapDispatchToProps (dispatch) {
    return {
        closePostDialog: () => dispatch(closePostDialog()),
        closeCommentDialog: () => dispatch(closeCommentDialog()),
        closeSnackbar: () => dispatch(closeSnackbar())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);
