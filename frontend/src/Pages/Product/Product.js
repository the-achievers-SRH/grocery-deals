import React from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Image,
  ListGroup,
  Card,
  Button,
  ListGroupItem,
} from "react-bootstrap";
import Rating from "../../Components/Rating/Rating";
import { products } from "../../Constants/Constants";

const Product = (props) => {
  const product = products.find((p) => p._id === props.match.params.id);
  // console.log(product);
  return (
    // <div>
    //   {product.name}
    // </div>

    <>
      {/* go back button */}
      <Link className="btn btn-secondary my-3" to="/products">
        Go Back
      </Link>

      <Row>
        {/* image */}
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>

        {/* product details */}
        <Col md={3}>
          <ListGroup variant="flush">
            {/* title */}
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            {/* store */}
            <ListGroup.Item>
              <h5>Store: {product.store}</h5>
            </ListGroup.Item>
            {/* ratings */}
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.reviewsNum} reviews`}
              />
            </ListGroup.Item>
            {/* price */}
            <ListGroup.Item>Price: € {product.price}</ListGroup.Item>
            {/* description */}
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>

        {/* cart detail */}
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              {/* price */}
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* status */}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
                  </Col>
                </Row>
              </ListGroup.Item>
              {/* add to cart button */}
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  disabled={product.countInStock === 0}
                >
                  Add To Cart
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Product;
