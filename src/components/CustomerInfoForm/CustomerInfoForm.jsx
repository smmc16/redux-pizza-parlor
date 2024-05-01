import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel } from '@mui/material';
import './CustomerInfoForm.css';

function CustomerInfoForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const pizza = useSelector(store => store.sendOrderInfo);
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [method, setMethod] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const total = Number(pizza.price);
        const pizzas = [{ id: pizza.id, name: pizza.name, quantity: 1 }];
        const action = {
            type: 'SEND_INFO',
            payload: {
                customer_name: name,
                street_address: address,
                city,
                zip: zipcode,
                type: method,
                total,
                pizzas
            }
        };
        dispatch(action);
        history.push('/checkout');
    }

    return (
        <form className="customer-info-form" onSubmit={handleSubmit}>
            <TextField
                label="Name"
                variant="outlined"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                required
            />
            <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Delivery Method</FormLabel>
                <RadioGroup
                    aria-label="method"
                    name="method"
                    value={method}
                    onChange={(e) => setMethod(e.target.value)}
                    row
                >
                    <FormControlLabel value="pickup" control={<Radio />} label="Pickup" />
                    <FormControlLabel value="delivery" control={<Radio />} label="Delivery" />
                </RadioGroup>
            </FormControl>
            <TextField
                label="Street Address"
                variant="outlined"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                fullWidth
                required
            />
            <TextField
                label="City"
                variant="outlined"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                fullWidth
                required
            />
            <TextField
                label="Zipcode"
                variant="outlined"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
                fullWidth
                required
            />
            <Button type="submit" variant="contained" color="primary" fullWidth>
                Submit
            </Button>
        </form>
    )
}

export default CustomerInfoForm;
