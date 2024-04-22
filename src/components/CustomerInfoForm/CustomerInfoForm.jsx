import { useState } from 'react';

function CustomerInfoForm () {
    let [name, setName] = useState('');
    let [address, setAddress] = useState('');
    let [city, setCity] = useState('');
    let [zipcode, setZipcode] = useState('');

    function handleSubmit (e) {
        e.preventDefault();

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                <input placeholder="Street Address" value={address} onChange={(e) => setAddress(e.target.value)}/>
                <input placeholder="City" value={city} onChange={(e) => setCity(e.target.value)}/>
                <input placeholder="Zipcode" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                <input type="radio" id="pickup" name="method" value="pickup"/>
                <label for="pickup">Pick up</label>
                <input type="radio" id="delivery" name="method" value="delivery"/>
                <label for="delivery">Delivery</label>
                <input type="submit" />
            </form> 
        </>
    )
}

export default CustomerInfoForm;