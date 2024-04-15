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

    const removePizza = (id) => {
        console.log(id);
        axios.delete(`/api/order/${id}`).then((response) => {
            getPizzas();
        }).catch((error) => {
            console.log('Error in Delete', error);
            alert('Something went wrong');
        })
    }

    return (
        <div className='list'>
        {pizzaList.map(pizza => (
            <div className='pizza' key={pizza.id}>
            <h3>{pizza.name + ' ' + pizza.price}</h3>
            <br />
            <img src={pizza.image_path} />
            <p>{pizza.description}</p>
            <button onClick={() => removePizza(pizza.id)}>Remove</button>
            </div>
        ))}
        </div>
    )
}

export default DisplayPizzas;