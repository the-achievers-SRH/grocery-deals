import React from 'react';
import { Carousel } from 'react-bootstrap';
import './carousel.css'

import image1 from './../../../assets/homePageImage/1.jpg';
import image2 from './../../../assets/homePageImage/2.jpg';
import image3 from './../../../assets/homePageImage/3.jpg';

const CarouselContainer = () => {
    return (
        <Carousel fade={true} pause={false}>
            <Carousel.Item interval={2000}>
                <img className="d-block w-100"
                src={image1}
                alt="First slide"
                />
            <Carousel.Caption>
                <h3>First slide label</h3>
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
                <h3>Second slide label</h3>
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
                <h3>Third slide label</h3>
                <p></p>
            </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default CarouselContainer;