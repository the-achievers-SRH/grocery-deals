import React from 'react'
import {Row, Col} from 'react-bootstrap'
import { products } from '../../Constants/Constants';
import Product from '../../Components/Product/Product'

const Products = () => {
  return (
    <>
        <h1>Products</h1>
        <Row>
            {/* looping through db */}
            {products.map((product) => (
                <Col sm={12} md={6} lg={4} xl={3}>
                    {/* <h3>{product.name}</h3> */}
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Products