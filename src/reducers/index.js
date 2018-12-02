"use reducer"
import { combineReducers } from 'redux';

import { booksReducers } from './booksReducers';
import { cartReducers } from "./cartReducers";
import sampleData  from "./sampleDataReducer";


export default combineReducers({
    books: booksReducers,
    cart: cartReducers,
    sampleBook: sampleData
})