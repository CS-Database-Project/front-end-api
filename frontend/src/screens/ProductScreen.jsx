import React, { useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { getProductById, loadProducts } from '../store/entities/products';
import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'react-bootstrap';
// import { addToCart, removeFromCart, emptyCart, updateItemCount } from './../store/cart';
// import { invokeToast } from '../store/toastAction';

const ProductScreen = ({match}) => {
    const dispatch = useDispatch();
    const product = useSelector(getProductById(match.params.productId));

    useEffect(() => {
        dispatch(loadProducts())
    });

    return (
        <>
            <div>{product.title}</div>
            /**
                Just Examples
             */
            {/* <Button onClick ={ () => dispatch(addToCart(product))}>
                Add To Cart
            </Button>
            <Button onClick ={ () => dispatch(removeFromCart(product.productId))}>
                Remove From Cart
            </Button>
            <Button onClick ={ () => {
                dispatch(emptyCart());
                dispatch(invokeToast("Emptied Cart", "info"));
            }}>
                Empty Cart
            </Button>

            <Button onClick ={ () => dispatch(updateItemCount(product.productId, 7))}>
                Update Count Cart
            </Button> */}
        </>
    )
}

export default ProductScreen;