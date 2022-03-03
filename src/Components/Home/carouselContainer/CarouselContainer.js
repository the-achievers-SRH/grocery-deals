import React from 'react';
import { Carousel } from 'react-bootstrap';
import './CarouselContainer.css'

import image1 from './../../../assets/images/1.jpg';
import image2 from './../../../assets/images/2.jpg';
import image3 from './../../../assets/images/3.jpg';

const CarouselContainer = () => {
    return (
    <Carousel fade={true} pause={false}>
        <Carousel.Item interval={2000}>
            <img
                className="d-block w-100"
                src={image1}
                alt="First slide"
        />
        <Carousel.Caption>
            <h3>First</h3>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={image2}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Second</h3>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
        <img
            className="d-block w-100"
            src={image3}
            alt="Third slide"
        />
        <Carousel.Caption>
            <h3>Third</h3>
            <p></p>
        </Carousel.Caption>
        </Carousel.Item>
    </Carousel>
    )
}

export default CarouselContainer;