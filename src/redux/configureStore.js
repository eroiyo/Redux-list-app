import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import shop from './reducers/shop';
import products from './reducers/products';

const reducer = combineReducers({
  shop,
  products,
});

const store = createStore(
  reducer,
  // applyMiddleware(logger),
  applyMiddleware(thunk),
);
export default store;
