import React from 'react';
import {Table} from 'react-bootstrap';

function OrdersTable(props) {

  const orders = [
    [ 1, "2021-01-25","560.45", "Yes" ,"No"],
    [ 2, "2021-02-01","100.00", "No" ,"No"],
    [ 3, "2021-01-14","1025.56", "Yes" ,"Yes"]
  ];

    return (
      <div>
          <h1 className = 'userheading'>MY ORDERS</h1>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>DATE</th>
                <th>TOTAL</th>
                <th>PAID</th>
                <th>DELIVERED</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {orders.map((item, index) => {
            return (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>{item[4]}</td>
              </tr>
            );
          })}
            </tbody>
          </Table>
        </div>
    );
}export default OrdersTable;