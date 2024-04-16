import { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import {useParams} from 'react-router-dom';

export default function ProductDetail(){
    const {id} = useParams();
    const [product, setProduct] = useState({});
    
    useEffect(()=>{
        fetch(`http://localhost:9999/products/${id}`)
            .then(res => res.json())
            .then(result => setProduct(result));
    }, []);

    return(
        <Container fluid>
            <Row>
                <Col>
                    <div>Product Id: {product?.id}</div>
                    <div>Product name: {product?.name}</div>
                    <div>Price: {product?.price}</div>
                    <div>Quantity: {product?.quantity}</div>
                    <div>Status: {product?.status==true?'In stock': 'Out stock'}</div>
                </Col>
            </Row>
        </Container>
    );
}