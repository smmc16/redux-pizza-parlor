import { useState } from 'react';
import { useDispatch } from 'react-redux';
import './CustomerInfoForm.css'

function CustomerInfoForm () {
    let dispatch = useDispatch();

    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [zipcode, setZipcode] = useState('');
    let [method, setMethod] = useState();

    function handleSubmit (e) {
        e.preventDefault();

        let action = {type: 'SEND_INFO', payload: {name, address, city, zipcode, method}};
        dispatch(action);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input type="radio" id="pickup" name="method" value="Pickup" onChange={(e) => setMethod(e.target.value)}/>
                <label htmlFor="pickup">Pick up</label>
                <br />
                <input placeholder="Street Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input type="radio" id="delivery" name="method" value="Delivery" onChange={(e) => setMethod(e.target.value)}/>
                <label htmlFor="delivery">Delivery</label>
                <br />
                <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
                <br />
                <input placeholder="Zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                <br />
                
                <input type="submit" />
            </form> 
        </>
    )
}

export default CustomerInfoForm;