import React, { useState, useEffect } from 'react'
import {Row, Col} from 'react-bootstrap'
// import { products } from '../../Constants/Constants';
import Product from '../../Components/Product/Product'
import axios from 'axios'

const Products = () => {

  // useState is to use states in functional components
  // we set a bracket to useStare and we pass two things:
    // 1. what we want to call this piece of state, which is products
    // 2. what we want to call the function to manipulate or change the state, which is setProducts
  // and default for products are passed in the empty array [] in useState()
  const [products, setProducts] = useState([])

  // useEffect to make req to our backend
  // it takes an arrow function which runs as soon as the component runs
  useEffect(() => {
    // console.log('hi');
    // here we will make our axios req
    // this method will return a promise and we can use .then() and pass in our response
    // axios.get('/api/products').then(res)

    // using sync await instead
    // making another function in here as we can'nt make useEffect function async
    // await axios.get('/api/products')
    const fetchProducts = async () => {
      const res = await axios.get('/api/products')
      // we have a data object assign to this res
      // console.log(res.data);
      // setting this res.data to that empty default array passed into useState([])
      setProducts(res.data)
    }
    // have to call this function as well
    fetchProducts()
  }, []) //second argument in useEffect is an array of dependencies
  // we pass a variable and if that variable changes, it fire off the useEffect
  
  return (
    <>
        <h1>Products</h1>
        <Row>
            {/* looping through db */}
            {products.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                    {/* <h3>{product.name}</h3> */}
                    <Product product={product}/>
                </Col>
            ))}
        </Row>
    </>
  )
}

export default Products