import { useSelector } from 'react-redux';
import ProductsTable from './../components/ProductsTable';
import { getAllProducts } from './../store/entities/products';


const ProductsScreen = () => {
    const products = useSelector(getAllProducts);

    return (
        <>
            <h1 className='heading'>Products</h1>
            <ProductsTable products={products}></ProductsTable>
        
      
        </>
    );
}
 
export default ProductsScreen;