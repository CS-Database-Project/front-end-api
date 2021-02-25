// import React, { Component } from 'react';
// import { Row, Col, Card } from 'react-bootstrap';
// import Pagination from '../components/Pagination';

// import Search from '../components/Search';
// import { Link } from 'react-router-dom'
// import Category from '../components/filters/Category';
// import PriceRange from '../components/filters/PriceRange';

// export class SearchResult extends Component {
//   state = {
//     product:[],
//     loading: false,
//     currentPage: 1,
//     productsPerPage: 5
//   };

//   componentDidMount() {
//     const getPosts = async () => {
//       this.setState({ loading: true });
//      // const results = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     // const results = await axios.get('products');
//       // const results = products;
//       // this.setState({ product: results});
//       this.setState({ loading: false });
//     };

//     getPosts();

//   }

//   render() {
//     const { currentPage, productsPerPage,product, loading } = this.state;

//     const indexOfLastProduct = currentPage * productsPerPage;
//     const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
//     const currentProducts = product.slice(indexOfFirstProduct, indexOfLastProduct);


//     const paginate = pageNum => this.setState({ currentPage: pageNum });

//     const nextPage = () => this.setState({ currentPage: currentPage + 1 });

//     const prevPage = () => this.setState({ currentPage: currentPage - 1 });

//     return (
//       <div className="container">
//         <h1 className="my-5 text-primary text-center">Search Results</h1>
    
//             <Col style={{display:'flex'}}>
//                 <div style={{marginRight:'50px'}}>
//                   <Category></Category>
//                   <PriceRange></PriceRange>
//                 </div>
//                 <div>
//                   <Search product = {currentProducts} loading={loading}></Search>
//                 </div>
//             </Col>
    
//             <div style={{justifyContent:'center', width:'100%'}}>
//                   <Pagination postsPerPage={productsPerPage} totalPosts={product.length} paginate={paginate} nextPage={nextPage} prevPage={prevPage} />
//             </div>

//       </div>
//     )
//   }
// }

// export default SearchResult