import React, {Component} from 'react';
import Snackbar from 'material-ui/Snackbar';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import { connect } from 'react-redux';

class SnackBar extends Component {
    render() {
        const { open, onRequestClose, content } = this.props;
        return (
            <Snackbar
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left'
                }}
                open={open}
                autoHideDuration={1e3}
                onRequestClose={onRequestClose}
                SnackbarContentProps={{
                    'aria-describedby': 'message-id',
                }}
                message={
                    <span id="message-id">{content}</span>
                }
                action={[
                    <IconButton
                      key="close"
                      aria-label="Close"
                      color="inherit"
                      onClick={onRequestClose}>
                        <CloseIcon />
                    </IconButton>,
                ]}
            />
        );
    }
}

function mapStateToProps ({snackbar: {content}}) {
    return {
        content
    }
}

export default connect(mapStateToProps)(SnackBar);
