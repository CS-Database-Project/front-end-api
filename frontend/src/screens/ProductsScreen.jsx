import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import ProductsTable from './../components/ProductsTable';
import { getAllProducts } from './../store/entities/products';


const ProductsScreen = ({ history }) => {
    const products = useSelector(getAllProducts);

    return (
        <>
            <h1 className='heading'>Products</h1>
                <Button className ='my-3 mx-3' onClick = { () => history.push('/product-register')}>Add Product</Button>
                <Button className ='my-3 mx-3' onClick = { () => history.push('/product-register')}>Add Main Category</Button>
                <Button className ='my-3 mx-3' onClick = { () => history.push('/product-register')}>Add Sub Category</Button>
                <Button className ='my-3 mx-3' onClick = { () => history.push('/product-register')}>Manage Stock</Button>
            <ProductsTable products={products}></ProductsTable>
        </>
    );
}
 
export default ProductsScreen;