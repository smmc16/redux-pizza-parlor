import axios from 'axios';
import { useEffect, useState } from 'react';
import './Admin.css';



function Admin() {
const[orders, setOrders] = useState([]);

  const fetchOrderHistory = () => {

  axios.get('/api/order').then(response => {
    
    console.log('/api/order GET response', response)
    setOrders(response.data);
  }).catch((error) => {
    console.log(error);
  })
}
useEffect(() => {
  fetchOrderHistory();
}, []);
  return (
//table of orders from Db

<table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Time</th>
          <th>Type</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {orders.map(order => (<>
        <tr key={order.id}>
          <td>{order.customer_name}</td>
          <td>{order.time}</td>
          <td>{order.type}</td>
          <td>{order.total}</td>
          </tr></>
        ))}
      </tbody>
    </table>
  )
}

export default Admin;