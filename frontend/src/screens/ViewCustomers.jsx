import React, { useEffect } from 'react'
import {loadCustomers,  getAllCustomers, deactivateCustomer} from '../store/entities/customers';
import { useDispatch, useSelector } from 'react-redux';
import {Table, Button} from 'react-bootstrap';

const ViewCustomers = ({match, history}) => {
    const dispatch = useDispatch();
    const customers = useSelector(getAllCustomers);

    useEffect(() => {
        dispatch(loadCustomers());
        console.log(customers);
    }, [customers]);

    return(
        <div>
            <h1 className = 'heading'>Customers</h1>
            {customers.length > 0 ?
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Customer ID</th>
                        <th>Email</th>
                        <th>Active Status</th>
                        <th>Deactivate</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(c =>
                        <tr>
                            <td>{c.customerId}</td>
                            <td>{c.email}</td>
                            <td>{c.activeStatus.toString()}</td>
                            <td>
                                <Button  
                                    onClick={() => dispatch(deactivateCustomer(c.customerId))}
                                >Deactivate</Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
            :(<div>Empty Customers</div>)}
        </div>
    )
}
export default ViewCustomers;