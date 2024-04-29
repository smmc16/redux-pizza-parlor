import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const sendOrderInfo = (state = [], action) => {
  if (action.type === 'SEND_PIZZA') {
    return [action.payload];
  } else if (action.type === 'CLEAR_CART') {
    return [];
  }
  return state;
}

const cart = (state = [], action) => {
  if (action.type === 'CHECKOUT') {
    return [];
  }
  return state;
}

const store = createStore(
  combineReducers({
    sendOrderInfo,
    cart, // 👈 Be sure to replace this, too!
  }),
  applyMiddleware(logger),
);


export default store;
