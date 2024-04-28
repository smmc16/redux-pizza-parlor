import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Checkout() {
    const checkoutList = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const history = useHistory();
  
  
    const handleCheckout = () => {
      let action = { type: 'CHECKOUT' };
      dispatch(action); 
      history.push('/');
    }
  
    return (
      <div>
        <h2>Checkout</h2>
        <ul>
          {
            checkoutList.map((item) => 
              <li key={item.id}>{item.name} {item.price}</li>
              )}  
          </ul>
        <button onClick={handleCheckout}>Checkout</button>
      </div>
    );
  }
  
  export default Checkout;