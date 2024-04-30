import axios from 'axios';
import { useEffect, useState } from 'react';




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
          <td>{response.name}</td>
          <td>{response.time}</td>
          <td>{response.type}</td>
          <td>{response.total}</td>
          </tr></>
        ))}
      </tbody>
    </table>
  )
}

export default Admin;