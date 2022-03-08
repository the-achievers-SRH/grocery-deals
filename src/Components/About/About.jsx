import React from 'react';
import './About.css'

import image from './../../assets/Aboutus1.jpg'
const About = () => {
return (
<div  className='full-page'>
    <div>
            <img src={image} className="image" />
        </div>
        <div className="text">
        
        <div className='aligment'>
            <div className="text-aling">
                <h1 className="header"> About Us:</h1>
                <p><div className="text-space"></div>
                    We provide online grocery deals information to the people living in the city of hiedelberg,
                    according to the varying grocery prices, from all the stores at one platform. 
                </p>
                <div className="text-space"></div>
                <p>
                Our main goal
                    is to provide customer the information about the affordable grocery product available in the
                    stores in their vicinity, so that they can benefit and save their money.
                </p>
            </div>
        </div>
        <div className='aligment'>
            <div>
                <h1 className="header"> Our Partners:</h1>
                <div className="text-space"></div>
                <ul>
                    <li>
                        Netto
                    </li>
                    <li>
                        Aldi
                    </li>
                    <li>
                        Kaufland

                    </li>
                    <li>
                        Rewe
                    </li>
                    <li>
                        Lidl
                    </li>
                </ul>
            </div>
        </div>
        <div className='aligment'>
            <div>
                <h1 className="header"> Useful Links:</h1>
                <div className="text-space"></div>
                <ul>
                    <li>
                        <a href='#'>Contact Us</a>
                    </li>
                    <li>
                        <a href='#'>Privacy Policy</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
)
}

export default About;