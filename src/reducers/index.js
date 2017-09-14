import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  // Adds a key to the global application state called "books", where the key is "books" and the value is whatever gets returned from the BooksReducer
  books: BooksReducer
});

export default rootReducer;
