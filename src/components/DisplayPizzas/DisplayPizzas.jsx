import axios from 'axios';
import { useState, useEffect } from 'react';

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
        <></>
    )
}