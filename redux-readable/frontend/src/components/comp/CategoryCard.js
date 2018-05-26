import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Route, Link } from "react-router-dom";
import FaComment from 'react-icons/lib/md/comment';
import FaFullScreen from 'react-icons/lib/ti/arrow-maximise-outline';

class CategoryCard extends Component {

  render(){
      const { categories } = this.props;

      const capitalizeFirst = (String) =>{
          return String.charAt(0).toUpperCase()+String.slice(1);
      }

    return(
          <div>
              {categories.map(((category, i)=>(
              <div key={i}
                   className="ui card">
                          <div className="content">
                              <div>{capitalizeFirst(category.name)}</div>
                        </div>
                          <div className="extra content">
                            <FaComment size={30}  />
                            {category.path}
                              <span className="right floated">
                              <Link to={`/${category.path}` }>
                                    <FaFullScreen  cursor='pointer'size={30}/>
                              </Link>
                              </span>
                        </div>
                    </div>
                  )))}
          </div>
    )
  }

}
export default CategoryCard;
