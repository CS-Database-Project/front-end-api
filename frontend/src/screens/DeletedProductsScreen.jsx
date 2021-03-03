import { useEffect } from 'react';
import { Button, Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { loadProducts, getDeletedProducts } from './../store/entities/products';



const DeletedProductsScreen = () => {
    const deletedProducts = useSelector(getDeletedProducts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadProducts())
    })

    return ( 
         <>
            <h1 className='heading'>Deleted Products</h1>
            <Table striped bordered hover variant="light">
            <thead>
                <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Weight (g)</th>
                <th>SKU</th>
                </tr>
            </thead>
            <tbody>
                {deletedProducts.map(p => 
                    <tr>
                
                        <td>{p.productId}</td>
                        <td>{p.title}</td>
                        <td>{p.description}</td>
                        <td>{p.weight}</td>
                        <td>{p.sku}</td>
                    </tr>
                )}
            </tbody>
        </Table>
        </>
     );
}
 
export default DeletedProductsScreen;