import { Carousel } from "bootstrap";
import CarouselContainer from "./carouselContainer/CarouselContainer";
import { Card } from "react-bootstrap";
import './Home.css'

import friut from './../../assets/category/friut.png';
import vegatable from './../../assets/category/veg.png';
import tol from './../../assets/category/tol.png';

const Home = () => {
    return (
        <div>
            <CarouselContainer />
            <div className="category">
                <Card className="cart">
                    <Card.Img variant="top" src={friut}/>
                    <Card.Body>
                        <Card.Title>friut</Card.Title>
                        
                    </Card.Body>
                </Card>
                <Card className="cart" >
                    <Card.Img className="img" variant="top" src={vegatable}/>
                    <Card.Body>
                        <Card.Title>vegatable</Card.Title>
                        
                    </Card.Body>
                </Card>
                <Card className="cart">
                    <Card.Img variant="top" src={tol}/>
                    <Card.Body>
                        <Card.Title>toiletries</Card.Title>
                        
                    </Card.Body>
                </Card>
            </div>
            
        </div>

    )
}

export default Home;