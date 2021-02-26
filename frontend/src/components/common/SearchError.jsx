import React, {useState, useEffect} from 'react'
import { Card, Col } from 'react-bootstrap'
//import { Link } from 'react-router-dom'
//import Rating from './Rating'

function SearchError({ hidden }) {

   // const [rating, setRating ] = useState(0);
  // const { hidden} = this.props;

    // useEffect(() => {
    //     setRating(calculateRating(product.reviews));
    // }, [product.reviews]);

    return (
        <>
            
            <Card 
                hidden={hidden}
                style={{
                    width:'800px',
                    marginLeft:'150px', 
                    marginTop:'50px', 
                    marginBottom:'10px', 
                    padding:'15px',
                // height:'50px',
                    textAlign:'center',
                    justifyContent:'center',
                    fontSize:'15px'
                }}>
                <Col><i className="bi bi-x-circle"></i></Col>
                <Col
                    /*hidden={hidden}
                    style={{
                        width:'800px',
                        marginLeft:'150px', 
                        marginTop:'10px', 
                        marginBottom:'10px', 
                        padding:'15px',
                    // height:'50px',
                        textAlign:'center',
                        justifyContent:'center',
                        fontSize:'15px'
                    }}*/>Sorry, your search did not match this category. Please try again.</Col>
                
                </Card>
        </>
    );
}

export default SearchError;