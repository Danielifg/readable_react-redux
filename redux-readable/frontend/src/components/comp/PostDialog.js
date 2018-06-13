import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from 'material-ui/transitions/Slide';
import YesIcon from 'material-ui-icons/CheckCircle';
import CancelIcon from 'material-ui-icons/Cancel';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { connect } from 'react-redux';
import {
    handlePostDialogChange,
    createNewPost,
    editExistingPost
} from '../../actions';

class PostDialog extends Component {
    setCurrentCategory() {
        const {
            currentCategory,
            handlePostDialogChange
        } = this.props;
        if (currentCategory) {
            handlePostDialogChange("category", currentCategory);
        }
    }

    render() {
        const {
            title, body, owner, category, id,
            onRequestClose, open,
            createNewPost, editExistingPost, handlePostDialogChange,
            currentCategory,
            isEdit, isYesAcive,
            isTitleError, isOwnerError, isBodyError, isCategoryError,
        } = this.props;
        const yesButtonColor = isYesAcive? "primary": "default";
        const dialogTitle = isEdit? "Edit Post": `Create New ${currentCategory||""} Post`;
        return (
            <Dialog
                open={open}
                onRequestClose={onRequestClose}
                transition={Slide}
                onEntered={() => this.setCurrentCategory()}>
                <DialogTitle>{dialogTitle}</DialogTitle>
                <DialogContent>
                    <TextField
                        required autoFocus fullWidth
                        error={isTitleError}
                        onChange={(event) =>
                            handlePostDialogChange("title", event.target.value)}
                        label="Title"
                        defaultValue={title}
                        margin="normal"/>
                    <TextField
                        required multiline fullWidth
                        error={isBodyError}
                        onChange={(event) =>
                            handlePostDialogChange("body", event.target.value)}
                        rowsMax="5"
                        label="Body"
                        defaultValue={body}
                        margin="normal"/>
                    <Grid container>
                        <Grid item>
                            <TextField
                                required disabled={isEdit}
                                error={isOwnerError}
                                onChange={(event) =>
                                    handlePostDialogChange("owner", event.target.value)}
                                label="Owner"
                                defaultValue={owner}
                                margin="normal"/>
                        </Grid>
                        <Grid item>
                            <TextField
                                required disabled={!!currentCategory || isEdit}
                                error={isCategoryError}
                                onChange={(event) =>
                                    handlePostDialogChange("category", event.target.value)}
                                label="Category"
                                defaultValue={category || currentCategory}
                                helperText="react, redux or udacity"
                                margin="normal"/>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <IconButton onClick={() => onRequestClose()}
                        color="default">
                        <CancelIcon />
                    </IconButton>
                    <IconButton
                        disabled={!isYesAcive}
                        onClick={() => {
                            isEdit ?
                            editExistingPost(id, title, body):
                            createNewPost({title, body, category, author: owner})
                        }}
                        color={yesButtonColor}>
                        <YesIcon />
                    </IconButton>
                </DialogActions>
            </Dialog>
        );
    }
}

const isError = (content) => (content === undefined? false: !!!content);

const isValidCategory = (categories, category, isStrict) => {
    if (category === undefined && !isStrict) {
        return true;
    }
    return categories.map((cat) => cat.name).includes(category);
}

function mapStateToProps ({
        categories: {categories, currentCategory},
        postDialog: {title, body, category, owner, isEdit, id}
    }) {
    return {
        isEdit,
        title, body, category, owner, id,
        currentCategory: currentCategory,
        isTitleError: isError(title),
        isBodyError: isError(body),
        isCategoryError: isError(category) || !isValidCategory(categories, category),
        isOwnerError: isError(owner),
        isYesAcive: !!title && !!owner &&!!body &&
            isValidCategory(categories, category, true)
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handlePostDialogChange: (source, value) => dispatch(handlePostDialogChange({source, value})),
        createNewPost: (post) => dispatch(createNewPost(post)),
        editExistingPost: (id, title, body) => dispatch(editExistingPost({id, title, body}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDialog);
