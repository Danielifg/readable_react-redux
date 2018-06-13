// import React from 'react';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import {
//         handleCommentDialogChange,
//         createNewComment,
//         editExistingComment
// } from '../../actions'
//
//  class FormDialog extends React.Component {
//
//
//   render() {
//     return (
//       <Dialog
//                 open={open}
//                 onRequestClose={onRequestClose}
//                 transition={Slide}
//                 onEntered={() => this.setCurrentCategory()}>
//                 <DialogTitle>{dialogTitle}</DialogTitle>
//                 <DialogContent>
//                     <TextField
//                         required autoFocus fullWidth
//                         error={isTitleError}
//                         onChange={(event) =>
//                             handlePostDialogChange("title", event.target.value)}
//                         label="Title"
//                         defaultValue={title}
//                         margin="normal"/>
//                     <TextField
//                         required multiline fullWidth
//                         error={isBodyError}
//                         onChange={(event) =>
//                             handlePostDialogChange("body", event.target.value)}
//                         rowsMax="5"
//                         label="Body"
//                         defaultValue={body}
//                         margin="normal"/>
//                     <Grid container>
//                         <Grid item>
//                             <TextField
//                                 required disabled={isEdit}
//                                 error={isOwnerError}
//                                 onChange={(event) =>
//                                     handlePostDialogChange("owner", event.target.value)}
//                                 label="Owner"
//                                 defaultValue={owner}
//                                 margin="normal"/>
//                         </Grid>
//                         <Grid item>
//                             <TextField
//                                 required disabled={!!currentCategory || isEdit}
//                                 error={isCategoryError}
//                                 onChange={(event) =>
//                                     handlePostDialogChange("category", event.target.value)}
//                                 label="Category"
//                                 defaultValue={category || currentCategory}
//                                 helperText="react, redux or udacity"
//                                 margin="normal"/>
//                         </Grid>
//                     </Grid>
//                 </DialogContent>
//                 <DialogActions>
//                     <IconButton onClick={() => onRequestClose()}
//                         color="default">
//                         <CancelIcon />
//                     </IconButton>
//                     <IconButton
//                         disabled={!isYesAcive}
//                         onClick={() => {
//                             isEdit ?
//                             editExistingPost(id, title, body):
//                             createNewPost({title, body, category, author: owner})
//                         }}
//                         color={yesButtonColor}>
//                         <YesIcon />
//                     </IconButton>
//                 </DialogActions>
//             </Dialog>
//     );
//   }
// }
// function mapStateToProps ({commentDialog: {id, body, author, isEdit}, postDetail: { post }}) {
//     return {
//         isEdit,
//         id, body, author, parentId: post? post.id: null,
//         isYesAcive: !!body && !!author
//     }
// }
//
// function mapDispatchToProps (dispatch) {
//     return {
//         handleCommentDialogChange: (source, value) => dispatch(handleCommentDialogChange({source, value})),
//         createNewComment: (comment) => dispatch(createNewComment(comment)),
//         editExistingComment: (id, body) => dispatch(editExistingComment(id, body))
//     }
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(CommentDialog);
