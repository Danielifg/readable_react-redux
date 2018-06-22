import React, {Component} from 'react';
import { connect } from 'react-redux';
import {
    sortPostByUpVotes,
    sortPostByDownVotes,
    sortPostsByTime
} from '../../actions';
import SortIcon from 'material-ui-icons/Sort';
import * as RB from 'react-bootstrap';
import ThumbDownIcon from 'material-ui-icons/ThumbDown';
import TimeIcon from 'material-ui-icons/AccessTime';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';

import ThumbsUp from 'react-icons/lib/fa/thumbs-o-up';
import ThumbsDown from 'react-icons/lib/fa/thumbs-o-down';
import Time from 'react-icons/lib/md/today';





import {GridList, GridTile} from 'material-ui/GridList';


class PostSort extends Component {



    render() {

      const styles = {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        },
        gridList: {
          width: 500,
          height: 450,
          overflowY: 'auto',
        },
      };


        let {
            isSortByUp,
            isSortByDown,
            isSortByLatest,
            sortByUp,
            sortByDown,
            sortByLatest
         } = this.props;
  const margin ={
    margin:'0px, auto'
  }
    return (
      <div style={margin}>
            <RB.Grid>
                <RB.Row className="show-grid">
                  <RB.Col xs={8} md={8}>
                  <IconButton
                      color={isSortByUp}
                      onClick={() => sortByUp()}
                      aria-label="sort by up">

                      <ThumbsUp size={80} />
                  </IconButton>
                  </RB.Col>
                </RB.Row>
                <RB.Row className="show-grid">
                  <RB.Col xs={8} md={8}>
                  <IconButton
                      color={isSortByDown}
                      aria-label="sort by down"
                      onClick={() => sortByDown()}>
                      <ThumbsDown size={80} />
                  </IconButton>
                  </RB.Col>
                </RB.Row>
                <RB.Row className="show-grid">
                  <RB.Col xs={8} md={8}>
                  <IconButton
                      color={isSortByLatest}
                      aria-label="sort by latest"
                      onClick={() => sortByLatest()}>
                      <Time size={80} />
                  </IconButton>
                  </RB.Col>
                </RB.Row>
            </RB.Grid>
          </div>
        );
    }
}

const SORT_BY_UP = 'upVotes';
const SORT_BY_DOWN = 'downVotes';
const SORT_BY_LATEST = 'latest';

function mapStateToProps ({posts}) {
    return {
        isSortByUp: posts.sortBy === SORT_BY_UP ? 'primary': 'default',
        isSortByDown: posts.sortBy === SORT_BY_DOWN ? 'primary': 'default',
        isSortByLatest: posts.sortBy === SORT_BY_LATEST ? 'primary': 'default'
    }
}

function mapDispatchToProps (dispatch) {
    return {
        sortByUp: () => dispatch(sortPostByUpVotes()),
        sortByDown: () => dispatch(sortPostByDownVotes()),
        sortByLatest: () => dispatch(sortPostsByTime())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostSort);
