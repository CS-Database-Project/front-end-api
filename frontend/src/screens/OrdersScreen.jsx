import { useSelector } from 'react-redux';
import { Container, Row, Col} from 'react-bootstrap';
import OrdersTable from './../components/OrdersTable';
import { getAllOrders } from './../store/entities/orders';


const OrdersScreen = () => {
    const orders = useSelector(getAllOrders)

    return (
        <>
            <h1 className='heading'>Orders</h1>
            {orders.length > 0 ? 
                <OrdersTable orderData = {orders}></OrdersTable>:
                <Container className ='empty-cart-message' fluid><Row><Col><h5 className ='py-3'>No Orders To Display...</h5></Col></Row></Container>    
            }
        </>
    );
}
 
export default OrdersScreen;