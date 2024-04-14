import axios from 'axios';
import { useState, useEffect } from 'react';

function DisplayPizzas() {
    const [pizzaList, setPizzaList] = useState([]);

    axios.get('/api/pizza').then((response) => {
        setPizzaList(response.data);
    }).catch(error => {
        console.log(error);
        alert('Something went wrong!');
    })
}