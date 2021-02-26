import React, { useEffect } from 'react'
import {loadCustomers,  getAllCustomers} from '../store/entities/customers';
import { useDispatch, useSelector } from 'react-redux';
import {Table} from 'react-bootstrap';

const ViewCustomers = ({match, history}) => {
    const dispatch = useDispatch();
    const customers = useSelector(getAllCustomers);

    useEffect(() => {
        dispatch(loadCustomers());
    }, [customers, dispatch]);

    return(
        <div>
            <h1 className = 'heading'>Customers</h1>
            {customers.length >0 ?
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Email</th>
                        <th>Active Status</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c =>
                        <tr>
                            <td>{c.customerId}</td>
                            <td>{c.email}</td>
                            <td>{c.activeStatus}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
            :(<div>Empty Customers</div>)}
        </div>
    )
}
export default ViewCustomers;