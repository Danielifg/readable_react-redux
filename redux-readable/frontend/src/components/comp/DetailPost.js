import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';
import { fetchPostsByCategory } from '../../actions'



class DetailPost extends Component{

  componentDidMount(){
    const { fetchPostsByCategory } = this.props
    const routeCategory = this.getCurrentCategoryRoute();
    if (routeCategory){
      fetchPostsByCategory(routeCategory)
    }else{
      console.log(" WORKS NOW!")
    }
  }

  getCurrentCategoryRoute() {
      const { match } = this.props;
      if (match && match.params && match.params.category ) {
          return match.params.category;
      }

      return null;
  }


 render(){

   const { currentCategory } = this.props
   return(
        <div>WORKS!!! always works</div>
   )
 }
}


function mapStateToProps ({categories}) {
    return {
       currentCategory: categories.currentCategory
    }
}

function mapDispatchToProps (dispatch) {
    return{
        fetchPostsByCategory: (category) => dispatch(fetchPostsByCategory(category))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(DetailPost);
