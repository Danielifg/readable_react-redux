import React from 'react';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from 'material-ui/transitions/Slide';
import YesIcon from 'material-ui-icons/CheckCircle';
import CancelIcon from 'material-ui-icons/Cancel';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';


import {
        handleCommentDialogChange,
        createNewComment,
        editExistingComment
} from '../../actions'

 class CommentDialog extends React.Component {
   render() {
       const {
           open, onRequestClose, isYesAcive = false,
           body, author, parentId, id,
           isEdit,
           handleCommentDialogChange,
           createNewComment,
           editExistingComment
       } = this.props;
       const yesButtonColor = isYesAcive? "primary": "default";
       const title = isEdit? "Edit Comment": "Add Comment";
       return (
           <Dialog
               open={open}
               onRequestClose={onRequestClose}
               transition={Slide}>
               <DialogTitle>{title}</DialogTitle>
               <DialogContent>
                   <TextField
                       required autoFocus fullWidth multiline
                       rowsMax="3"
                       label="Comment"
                       defaultValue={body}
                       margin="normal"
                       onChange={(event) =>
                           handleCommentDialogChange("body", event.target.value)}
                       style={{minWidth: 320}}/>
                   <TextField
                       required disabled={isEdit}
                       label="Owner"
                       defaultValue={author}
                       onChange={(event) =>
                           handleCommentDialogChange("author", event.target.value)}
                       margin="normal"/>
               </DialogContent>
               <DialogActions>
                   <IconButton onClick={onRequestClose}
                       color="default">
                       <CancelIcon />
                   </IconButton>
                   <IconButton
                       disabled={!isYesAcive}
                       color={yesButtonColor}
                       onClick={() => isEdit?
                           editExistingComment(id, body):
                           createNewComment({body, author, parentId})}>
                       <YesIcon />
                   </IconButton>
               </DialogActions>
           </Dialog>
       );
   }
}


function mapStateToProps ({commentDialog: {id, body, author, isEdit}, postDetail: { post }}) {
    return {
        isEdit,
        id, body, author, parentId: post? post.id: null,
        isYesAcive: !!body && !!author
    }
}

function mapDispatchToProps (dispatch) {
    return {
        handleCommentDialogChange: (source, value) => dispatch(handleCommentDialogChange({source, value})),
        createNewComment: (comment) => dispatch(createNewComment(comment)),
        editExistingComment: (id, body) => dispatch(editExistingComment(id, body))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentDialog);
