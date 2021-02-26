import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSpinner from './../components/common/ButttonSpinner';
import CommonListGroup from './../components/common/CommonListGroup';
import Pagination from '../components/common/Pagination';
import { loadProducts, getAllProducts, getProductLoadingStatus } from './../store/entities/products';
import { loadCategories, getCategoriesLoadingStatus, getAllCategories } from './../store/entities/categories';
import { paginate } from './../utils/paginate';
import Product from '../components/SearchProduct';
import SearchError from '../components/common/SearchError';

const SearchResult = () => {

    const dispatch = useDispatch();
    const products = useSelector(getAllProducts);

    const URL = (window.location.href).split('/');
    const keyWord = URL[URL.length-1].split('+');


  
  const updatedSearched = SearchProducts(products, keyWord );
  const productsLoading = useSelector(getProductLoadingStatus);
  const categories = useSelector(getAllCategories);
  const categoriesLoading = useSelector(getCategoriesLoadingStatus);

  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filtered, setFiltered] = useState(products);

  const pageSize = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [paginated, setPaginated] = useState([]);

  useEffect(() => {
      dispatch(loadProducts());
      dispatch(loadCategories());
      const updatedFiltered = getFilteredProducts(updatedSearched, categories, selectedCategory);
      setFiltered(updatedFiltered);
      setPaginated(paginate(updatedFiltered, currentPage, pageSize));
  }, [ products, categories, dispatch]);

  let hidden = false;

  return (

      <div className = 'mb-4'>
          <h1 className = 'my-3'>Searched Results ({filtered.length} Results)</h1>
          {productsLoading && <ButtonSpinner message = "Loading Products..." />}
          {!categoriesLoading &&
              <CommonListGroup 
                  onSelect = {(category) => {
                      setSelectedCategory(category);
                      const updatedFiltered = getFilteredProducts(updatedSearched, categories, category);
                      setFiltered(updatedFiltered);
                      setPaginated(paginate(updatedFiltered, 1, pageSize));
                  }} 
                  defaultSelected = {"All"} selected={selectedCategory} 
                  list={categories.map(c => c.category.name)}
              />}
          <Row>
              {filtered.length !== 0 ? hidden=true : hidden = false}
              <SearchError hidden={hidden} ></SearchError>
          </Row>
          <Row>
              {paginated.map( product => 
            <Row key = {product.productId + product.variantName}>
                 <Product product = {product}></Product>
            </Row>)} 
          </Row>

          <Pagination
              itemsCount = {filtered.length} 
              pageSize = {pageSize} 
              currentPage = {currentPage}
              onPageChange = {(page) => {
                  setCurrentPage(page);
                  setPaginated(paginate(filtered, page, pageSize));
              }}
          />
      </div>
  )

}


function getFilteredProducts(products, categories, filter){
  if(filter === "All") return products;
  const category = categories.find(c => c.category.name === filter);
  const selectedCategoryId = category.category.categoryId;
  return products.filter(p => p.categories.includes(selectedCategoryId));
}

export function SearchProducts(products, setKeyWord){
    const searchProduct =[];
    for (let i=0; i<products.length; i++){
        const product = products[i];
        for(let j=0; j<setKeyWord.length; j++){
            if(product.title.toLowerCase().includes(setKeyWord[j].toLowerCase())){
                searchProduct.push(product);
                break
            }
        }
    }
    if(searchProduct.length == 0 ){
        return [];
    }
    return searchProduct;
}


export default SearchResult;