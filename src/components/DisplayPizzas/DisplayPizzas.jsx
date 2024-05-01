import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './DisplayPizzas.css';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

function DisplayPizzas() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [pizzaList, setPizzaList] = useState([]);

    function getPizzas() {
        axios.get('/api/pizza')
            .then((response) => {
                setPizzaList(response.data);
            })
            .catch(error => {
                console.log(error);
                alert('Something went wrong!');
            });
    }

    useEffect(() => {
        getPizzas();
    }, []);

    const removePizza = (id) => {
        console.log(id);
        let action = { type: 'CLEAR_CART' }
        dispatch(action);
    }

    function addPizza(pizza) {
        let action = { type: 'SEND_PIZZA', payload: { id: pizza.id, name: pizza.name, price: pizza.price } }
        dispatch(action);
    }

    function checkout() {
        history.push('/info');
    }

    return (
        <>
            <div className="checkout-button">
                <Button onClick={checkout} variant="contained" color="primary" size="small">Click to Checkout</Button>
            </div>
            <div className='list'>
                {pizzaList.map(pizza => (
                    <Card key={pizza.id} className='pizza'>
                        <CardMedia
                            component="img"
                            height="200"
                            image={pizza.image_path}
                            alt={pizza.name}
                        />
                        <CardContent className="pizzaContent">
                            <Typography gutterBottom variant="h5" component="div">
                                {pizza.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {pizza.description}
                            </Typography>
                        </CardContent>
                        <CardActions className="actions">
                            <Button variant="contained" color="success" size="small" onClick={() => addPizza(pizza)}>Add to cart</Button>
                            <Button variant="contained" color="error" size="small" onClick={() => removePizza(pizza.id)}>Remove</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default DisplayPizzas;
