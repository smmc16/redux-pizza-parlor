import axios from 'axios';
import { useState, useEffect } from 'react';
import './DisplayPizzas.css';

function DisplayPizzas() {
    const [pizzaList, setPizzaList] = useState([]);

    function getPizzas() {
    axios.get('/api/pizza').then((response) => {
        setPizzaList(response.data);
    }).catch(error => {
        console.log(error);
        alert('Something went wrong!');
    });
    }

    useEffect(() => {
        getPizzas();
    }, [])

    return (
        <div className='list'>
        {pizzaList.map(pizza => (
            <div className='pizza'>
            <h3>{pizza.name + ' ' + pizza.price}</h3>
            <br />
            <img src={pizza.image_path} />
            <p>{pizza.description}</p>
            </div>
        ))}
        </div>
    )
}

export default DisplayPizzas;