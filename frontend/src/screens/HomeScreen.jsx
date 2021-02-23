import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Product from '../components/Product';
import ButtonSpinner from './../components/common/ButttonSpinner';
import CommonListGroup from './../components/common/CommonListGroup';
import { loadProducts, getAllProducts, getProductLoadingStatus } from './../store/entities/products';
import { loadCategories, getCategoriesLoadingStatus, getAllCategories } from './../store/entities/categories';


const HomeScreen = ({ match }) => {
    const dispatch = useDispatch();
    const products = useSelector(getAllProducts);
    const productsLoading = useSelector(getProductLoadingStatus);
    const categories = useSelector(getAllCategories);
    const categoriesLoading = useSelector(getCategoriesLoadingStatus);
    const [filtered, setFiltered] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');
  
    useEffect(() => {
        dispatch(loadProducts());
        dispatch(loadCategories());
        setFiltered(getFilteredProducts(products, categories, selectedCategory));
        console.log("Loading Products", products);
        console.log("Loading Categories", categories);
    }, [products, categories, dispatch, selectedCategory]);

    return (
        <div className = 'mb-4'>
            <h1 className = 'my-3'>Latest Products</h1>
            {productsLoading && <ButtonSpinner message = "Loading Products..." />}
            {!categoriesLoading &&
                <CommonListGroup 
                    onSelect = {(category) => {setSelectedCategory(category);}} 
                    defaultSelected = {"All"} selected={selectedCategory} 
                    list={categories.map(c => c.category.name)}
                />}
            <Row>
                {filtered.map( product => 
                <Col key = {product.productId + product.variantName} sm = {1} md = {2} lg = {3} xl = {4}>
                    <Product product= {product}></Product>
                </Col>)} 
            </Row>
        </div>
    );
}


function getFilteredProducts(products, categories, filter){
    if(filter === "All") return products;
    const category = categories.find(c => c.category.name === filter);
    const selectedCategoryId = category.category.categoryId;
    return products.filter(p => p.categories.includes(selectedCategoryId));
}
export default HomeScreen;

