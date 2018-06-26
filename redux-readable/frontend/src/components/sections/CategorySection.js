import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import 'semantic-ui-css/semantic.min.css';
import { fetchCategories } from '../../actions'
import CategoryCard from '../comp/CategoryCard'
import * as RB from 'react-bootstrap';

import { connect } from 'react-redux';


 class CategorySection  extends Component {

   componentDidMount(){
        this.props.fetchCategories();
    }

render(){
   const { selectPost, style } = this.props
   const categories = this.props.categories || [];
   return(
              <RB.Col xs={6} md={4} style={style}>
                    {categories.map((category, i) => (
                        <CategoryCard key={i} category={category} />
                    ))}
                </RB.Col>
    )
  }
}


function mapStateToProps (state){
      return{
            categories: state.categories.categories
      }
}

function mapDispatchToProps (dispatch) {
    return{
      fetchCategories: () => dispatch(fetchCategories())
    }
}
//const StyledCategories = withStyles(styles)();
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CategorySection);
