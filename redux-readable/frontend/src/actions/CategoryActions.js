import { getAllCategories } from '../api/categories-RestClient';


export const LOAD_CATEGORIES = 'LOAD_CATEGORIES';

export const fetchCategories = (category) => dispatch =>(
    getAllCategories()
    .then(categories => dispatch({
      type: LOAD_CATEGORIES,
      categories
    }))
);
