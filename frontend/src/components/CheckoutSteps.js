// import React from 'react'
// import {Nav} from 'react-bootstrap'
// import {LinkContainer} from 'react-router-bootstrap'

// const CheckoutSteps = ({step1, step2, step3, step4})=>{
//     return(
//         <Nav className='justify-content-center mb-4'>

//             <Nav.Item>
//                 {
//                     step1 ? (
//                         <LinkContainer to='/login'>
//                             <Nav.Link>Sign In</Nav.Link>
//                         </LinkContainer>
//                     ) : (
//                         <Nav.Link disabled>Sign In</Nav.Link>
//                     )
//                 }
//             </Nav.Item>

//             <Nav.Item>
//                 {
//                     step2 ? (
//                         <LinkContainer to='/shipping'>
//                             <Nav.link>Shipping</Nav.link>
//                         </LinkContainer>
//                     ) : (
//                         <Nav.link disabled>Sign In</Nav.link>
//                     )
//                 }
//             </Nav.Item>

//             <Nav.Item>
//                 {
//                     step3 ? (
//                         <LinkContainer to='/payment'>
//                             <Nav.link>Payment</Nav.link>
//                         </LinkContainer>
//                     ) : (
//                         <Nav.link disabled>Sign In</Nav.link>
//                     )
//                 }
//             </Nav.Item>

//             <Nav.Item>
//                 {
//                     step4 ? (
//                         <LinkContainer to='/placeorder'>
//                             <Nav.link>Place Order</Nav.link>
//                         </LinkContainer>
//                     ) : (
//                         <Nav.link disabled>Sign In</Nav.link>
//                     )
//                 }
//             </Nav.Item>

//         </Nav>
//     )
// }

// export default CheckoutSteps;