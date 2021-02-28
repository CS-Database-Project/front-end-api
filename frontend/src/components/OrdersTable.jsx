import React from 'react';
import {Button, Table} from 'react-bootstrap';

function OrdersTable({orderData}) {
  console.log(orderData);
  

    return (
      <div>
          <h1 className = 'userheading'>MY ORDERS</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>ORDER DATE</th>
                <th>DISPATCHED DATE</th>
                <th>DELIVERY METHOD</th>
                <th>ORDER STATUS</th>
                <th>COMMENTS</th>
            
              </tr>
            </thead>
            <tbody>
            {orderData.map(o =>  {
            return (
              <tr>
                <td width="10%">{`${o.orderId}`}</td>
                <td width="40%">{`${o.orderDate}`}</td>
                <td width="25%">{`${o.dispatchedDate}`}</td>
                <td width="10%">{`${o.deliveryMethod}`}</td>
                <td width="10%">{`${o.orderStatusId}`}</td>
                <td width="5%">{`${o.comments}`}</td>
              </tr>
            );
          })}
            </tbody>
          </Table>
        </div>
    );
}export default OrdersTable;