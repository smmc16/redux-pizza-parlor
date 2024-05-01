import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import DisplayPizzas from '../DisplayPizzas/DisplayPizzas.jsx';
import CustomerInfoForm from '../CustomerInfoForm/CustomerInfoForm.jsx';
import Checkout from '../Checkout/Checkout.jsx';
import Admin from '../Admin/Admin.jsx';
import { useSelector } from 'react-redux';

function App() {
  const pizza = useSelector(store => store.sendOrderInfo);
  let total = pizza.price;

  return (
    <Router>
      <div>
        <div className='navbar'>
          <div className='nav-left'>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
            {/* <NavLink to="/info" activeClassName="active">
              Customer Info
            </NavLink>
            <NavLink to="/checkout" activeClassName="active">
              Checkout
            </NavLink> */}
            <NavLink to="/admin" activeClassName="active">
              Admin
            </NavLink>
          </div>
          <div className="nav-right">
            <div className="total">
              <p>Order Total: {total}</p>
            </div>
          </div>
        </div>
        <div className='content-bar'>
          <div className='content'>
            <header className='App-header'>
              <h1 className='App-title'>Prime Pizza</h1>
            </header>
            <p className='App-para'>Pizza is great.</p>
            <Route exact path="/" component={DisplayPizzas} />
            <Route path="/info" component={CustomerInfoForm} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/admin" component={Admin} />
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
