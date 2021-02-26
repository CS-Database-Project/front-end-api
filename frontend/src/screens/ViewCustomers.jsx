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
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c =>
                        <tr>
                            <td>{c.customer_id}</td>
                            <td>{c.first_name}</td>
                            <td>{c.last_name}</td>
                            <td>{c.email}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </div>
    )
}
export default ViewCustomers;