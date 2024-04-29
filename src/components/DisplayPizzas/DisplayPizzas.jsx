import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DisplayPizzas.css';

function DisplayPizzas() {
    
    const dispatch = useDispatch();
    const history = useHistory();

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
        let action = {type: 'CLEAR_CART'}
        dispatch(action);
    }


    function addPizza (pizza) {
        let action = {type: 'SEND_PIZZA', payload: {name: pizza.name, price: pizza.price}}
        dispatch(action);
    }

    function checkout () {
        history.push('/info');
    }

    return (
        <>
        <button onClick={checkout}>Checkout</button>
        <div className='list'>
        {pizzaList.map(pizza => (
            <div className='pizza' key={pizza.id}>
            <h3>{pizza.name + ' ' + pizza.price}</h3>
            <br />
            <img src={pizza.image_path} />
            <p>{pizza.description}</p>
            <button onClick={() => addPizza(pizza)}>Add to cart</button> 
            <button onClick={() => removePizza(pizza.id)}>Remove</button>
            
            </div>
        ))}
        </div>
        </>
    )
}

export default DisplayPizzas;