import {
    fetchPostDetails,
    fetchCategories,
    openCommentDialog
} from '../../actions';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PostCard from './PostCard';
import CommentCard from './CommentCard';
import Button from 'material-ui/Button';
import CommentIcon from 'material-ui-icons/Comment';

class PostDetail extends Component {

    componentDidMount() {
        const {
            match: { params: { category, post_id }},
            fetchPostDetails,
            fetchCategories
        } = this.props;
        fetchCategories();
        fetchPostDetails(post_id, category);
    }

    render() {
        const {
            post, categories, comments=[],
            openCommentDialog
        } = this.props;
        console.log(comments)
        const postDetailMarginFix={
          margin:'20px'
        }
        const postCommentsMarginFix ={
          margin:'0px auto'
        }
        const {match: { params: { category, post_id }}} = this.props;
        const Content = categories.includes(category) &&
            post && post.id && post.id === post_id?(
                    <div style={{postDetailMarginFix}}>
                        <PostCard
                            post={post}
                            hideOpen={true}/>
                        <br />
                        <div style={{postCommentsMarginFix}}>
                        {comments.map((comment, idx) => (
                            <CommentCard key={idx} comments={comment}/>
                        ))}
                        </div>
                        <Button
                            fab
                            style={fabStyle}
                            color="primary"
                            aria-label="add"
                            onClick={openCommentDialog}>
                            <CommentIcon />
                        </Button>
                    </div>
                  ) : null;
        return ( <div> {Content} </div>);
    }
  }

const fabStyle = {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
};

function mapStateToProps ({ postDetail: { post }, categories: { categories },
        comments},{  match: { params: { post_id }} }) {
    return {
        post,
        categories: categories.map(category => category.name),
        comments: comments[post_id]
    }
}

function mapDispatchToProps (dispatch) {
    return {
        fetchPostDetails: (id, category) => dispatch(fetchPostDetails(id, category)),
        fetchCategories: () => dispatch(fetchCategories()),
        openCommentDialog: () => dispatch(openCommentDialog())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
