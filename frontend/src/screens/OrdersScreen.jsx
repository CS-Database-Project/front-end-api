import { useSelector } from 'react-redux';
import OrdersTable from './../components/OrdersTable';
import { getAllOrders } from './../store/entities/orders';


const OrdersScreen = () => {
    const orders = useSelector(getAllOrders)

    return (
        <>
            <h1 className='heading'>Orders</h1>
            <OrdersTable orderData = {orders}></OrdersTable>
        </>
    );
}
 
export default OrdersScreen;