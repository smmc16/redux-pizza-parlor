import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
    const checkoutList = useSelector(store => store.cart);
    const order = useSelector(store => store.sendOrderInfo);
    const dispatch = useDispatch();
    const history = useHistory();

    
  
    const handleCheckout = () => {
        console.log(checkoutList);
        axios.post('/api/order', checkoutList).then(response => {
          dispatch({ type: 'CLEAR_CART'});
          completeCheckout();
        }).catch(error => {
          console.log(error);
        })
      };
  
    const completeCheckout = () => {
      let action = { type: 'CHECKOUT' };
      dispatch(action); 
      history.push('/');
    }
  
    return (
      <div>
        <h2>Checkout</h2>
        <p>{checkoutList.customer_name}</p>
        <br />
        <p>{checkoutList.street_address}</p>
        <br />
        <p>{checkoutList.city}</p>
        <br />
        <p>{checkoutList.zip}</p>
        
        <ul>
          
            <li>{order.name} - {order.price}</li>
          
          </ul>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    );
  }
  
  export default Checkout;