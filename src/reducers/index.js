import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // Adds a key to the global application state called "books", where the key is "books" and the value is whatever gets returned from the BooksReducer
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
