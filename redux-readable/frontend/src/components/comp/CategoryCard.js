import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Link } from "react-router-dom";
import FaComment from 'react-icons/lib/md/comment';
import FaFullScreen from 'react-icons/lib/ti/arrow-maximise-outline';
import { fetchPostsByCategory } from '../../actions';
import { connect } from 'react-redux';
import AddPost from 'react-icons/lib/md/control-point-duplicate';



class CategoryCard extends Component {


  render(){
      const { categories , fetchPostsByCategory} = this.props;
      const capitalizeFirst = (String) =>{
          return String.charAt(0).toUpperCase()+String.slice(1);
      }
      const categoryStyle ={
        cursor:'pointer',
          margin:'0px auto'
      }
    return(

          <div>
              {categories.map(((category, i)=>(
              <div style={categoryStyle} key={i}
                   onClick={() => fetchPostsByCategory(category.name)}
                   className="ui card">
                          <div className="content">
                              <div>{capitalizeFirst(category.name)}</div>
                        </div>
                          <div className="extra content">
                            {category.path}
                              <span className="right floated">
                                  <AddPost
                                   size={24} onClick={this.handleClickOpen} />
                              </span>
                        </div>
                    </div>
                  )))}
                  <div>

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
