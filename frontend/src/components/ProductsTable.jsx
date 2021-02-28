import { Table, Image } from 'react-bootstrap';

const ProductsTable = ({ products }) => {

    return ( 
        <Table striped bordered hover variant="light">
            <thead>
                <tr>
                <th></th>
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Weight (g)</th>
                <th>SKU</th>
                </tr>
            </thead>
            <tbody>
                {products.map(p => 
                    <tr>
                        <td>{<Image className = 'cart-image' src={`/images/${p.productId}.jpg`}/>}</td>
                        <td>{p.productId}</td>
                        <td>{p.title}</td>
                        <td>{p.description}</td>
                        <td>{p.weight}</td>
                        <td>{p.sku}</td>
                    </tr>
                )}
            </tbody>
        </Table>
    );
}
 
export default ProductsTable;