import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Link } from "react-router-dom";
import FaComment from 'react-icons/lib/md/comment';
import FaFullScreen from 'react-icons/lib/ti/arrow-maximise-outline';
import { fetchPostsByCategory } from '../../actions';
import { connect } from 'react-redux';
import AddPost from 'react-icons/lib/md/control-point-duplicate';
import OpenIcon from 'material-ui-icons/OpenInNew';



class CategoryCard extends Component {


  render(){
      const { category , key} = this.props;
      const { path } = this.props.category;
      const capitalizeFirst = (String) =>{
          return String.charAt(0).toUpperCase()+String.slice(1);
      }
      const categoryStyle ={
        cursor:'pointer',
          margin:'0px auto'
      }
    return(
            <div style={categoryStyle} key={key}
                   onClick={() => fetchPostsByCategory(category.name)}
                   className="ui card">
                      <div className="content">
                              <div>{capitalizeFirst(category.name)}</div>
                      </div>
                          <div className="extra content">
                            {category.path}
                          <span className="right floated">
                          <Link to={`/${path}`}>
                                <OpenIcon />
                            </Link>
                          </span>
                      </div>
              </div>
    )
  }

}

function mapStateToProps({posts}){
  return{
    posts:posts.posts
  }
}

function mapDispatchToProps(dispatch) {
  return{
    fetchPostsByCategory: (name) => dispatch(fetchPostsByCategory(name))
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategoryCard);
