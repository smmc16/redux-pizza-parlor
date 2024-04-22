import React from 'react';
import axios from 'axios';
import './App.css';
import DisplayPizzas from '../DisplayPizzas/DisplayPizzas.jsx';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm.jsx';
import { HashRouter as Router, Route, Link } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>

      
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
