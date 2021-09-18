import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import shop from './reducers/shop';
import products from './reducers/products';

const reducer = combineReducers({
  shop,
  products,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);
export default store;
