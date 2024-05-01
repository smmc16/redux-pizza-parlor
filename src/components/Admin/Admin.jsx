import axios from 'axios';
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './Admin.css';

function Admin() {
    const [orders, setOrders] = useState([]);

    const fetchOrderHistory = () => {
        axios.get('/api/order')
            .then(response => {
                console.log('/api/order GET response', response);
                setOrders(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        fetchOrderHistory();
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Time</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Total</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders.map(order => (
                        <TableRow key={order.id}>
                            <TableCell>{order.customer_name}</TableCell>
                            <TableCell>{order.time}</TableCell>
                            <TableCell>{order.type}</TableCell>
                            <TableCell>{order.total}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default Admin;
