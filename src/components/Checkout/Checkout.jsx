import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { Typography, Button, ListItemText, Stack } from '@mui/material';
import './Checkout.css';

function Checkout() {
    const checkoutList = useSelector(store => store.cart);
    const order = useSelector(store => store.sendOrderInfo);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleCheckout = () => {
        console.log(checkoutList);
        axios.post('/api/order', checkoutList)
            .then(response => {
                dispatch({ type: 'CLEAR_CART' });
                completeCheckout();
            })
            .catch(error => {
                console.log(error);
            })
    };

    const completeCheckout = () => {
        let action = { type: 'CHECKOUT' };
        dispatch(action);
        history.push('/');
    }

    return (
        <div className="checkout-container">
            <Stack spacing={2}>
                <Typography variant="h4">Order Details</Typography>
                <Stack spacing={2}>
                    <Typography variant="body1" className="checkout-item">Customer Name: {checkoutList.customer_name}</Typography>
                    <Typography variant="body1" className="checkout-item">Street: {checkoutList.street_address}</Typography>
                    <Typography variant="body1" className="checkout-item">City: {checkoutList.city}</Typography>
                    <Typography variant="body1" className="checkout-item">Zip Code: {checkoutList.zip}</Typography>
                    <Typography variant="body1" className="checkout-item">For {checkoutList.type}</Typography>
                    <ListItemText className='checkout-item' primary={`${order.name} - ${order.price}`} /> 
                </Stack>         
            </Stack>
            <Button className='checkout-button' onClick={handleCheckout} variant="contained" color="primary">Checkout</Button>
        </div>
    );
}

export default Checkout;
