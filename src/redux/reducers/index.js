import {combineReducers} from 'redux';
import { productReducer,selectePproductReducer,cartItemReducer } from './productReducer';


const reducers=combineReducers({
    allProducts:productReducer,
    product:selectePproductReducer,
    cartItem:cartItemReducer
});

export default reducers;