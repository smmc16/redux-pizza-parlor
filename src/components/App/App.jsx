import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayPizzas from '../DisplayPizzas/DisplayPizzas.jsx';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm.jsx';
import { HashRouter as Router, Route, Link, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
const pizza = useSelector(store => store.sendOrderInfo);
const history = useHistory();

function checkout () {
    history.push('/info');
}

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <br />
        <p>Order total:{pizza.price}</p>
        <button onClick={checkout}>Checkout</button>

      
      <Router>
        <Route exact path="/">
          <DisplayPizzas />
        </Route>
        <Route path="/info">
          <CustomerInfoForm />
        </Route>
      </Router>
    </div>
  );
}

export default App;
