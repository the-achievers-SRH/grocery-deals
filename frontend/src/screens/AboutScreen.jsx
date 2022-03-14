import React from 'react'
import './AboutScreen.css'

import image from './../AboutImage.jpg'

const AboutScreen = () => {
    return (
        <div>
            <div>
                <img src={image} className="img"/>
            </div>
            <section>
                <br/>
                <h2 className='AboutHeader'>About</h2>
                <p className='Abouttext'>We provide online grocery deals information to the people living in the city of hiedelberg,
                    according to the varying grocery prices, from all the stores at one platform.Our main goal
                    is to provide customer the information about the affordable grocery product available in the
                    stores in their vicinity, so that they can benefit and save their money.</p>
                
            </section>
            <br/>
            <br/>
            <section id="contact" class="contact section-bg">

                <div class="container">
                <div class="section-title">
                    <h2 className='AboutHeader'>Contact Us</h2>
                </div>
                </div>

                <div class="container-fluid">

                <div class="row">

                    <div class="col-lg-6 d-flex align-items-stretch infos">

                    <div class="row">

                        <div class="col-lg-6 info d-flex flex-column align-items-stretch">
                        <i class="bx bx-map"></i>
                        <h4>Address</h4>
                        <p>254 Main Street,</p>
                        <p>Heidelberg, Germany</p>
                        </div>
                        <div class="col-lg-6 info info-bg d-flex flex-column align-items-stretch">
                        <i class="bx bx-phone"></i>
                        <h4>Call Us</h4>
                        <p>+91 5589 355488</p>
                        <p>+91 5589 422548</p>
                        </div>
                        <div class="col-lg-6 info info-bg d-flex flex-column align-items-stretch">
                        <i class="bx bx-envelope"></i>
                        <h4>Email Us</h4>
                        <p>contact@example.com</p>
                        <p>info@example.com</p>
                        </div>
                        <div class="col-lg-6 info d-flex flex-column align-items-stretch">
                        <i class="bx bx-time-five"></i>
                        <h4>Working Hours</h4>
                        <p>Mon - Fri: 9AM to 5PM</p>
                        <p>Sunday: 9AM to 1PM</p>
                        </div>
                    </div>

                    </div>

                    <div class="col-lg-6 d-flex align-items-stretch contact-form-wrap">
                    <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                        <div class="form-row">
                        <div class="col-md-6 form-group">
                            <label for="name">Your Name</label>
                            <input type="text" name="name" class="form-control" id="name" data-rule="minlen:4"
                            data-msg="Please enter at least 4 chars" />
                            <div class="validate"></div>
                        </div>
                        <div class="col-md-6 form-group">
                            <label for="email">Your Email</label>
                            <input type="email" class="form-control" name="email" id="email" data-rule="email"
                            data-msg="Please enter a valid email" />
                            <div class="validate"></div>
                        </div>
                        </div>
                        <div class="form-group">
                        <label for="subject">Subject</label>
                        <input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4"
                            data-msg="Please enter at least 8 chars of subject" />
                        <div class="validate"></div>
                        </div>
                        <div class="form-group">
                        <label for="message">Message</label>
                        <textarea class="form-control" name="message" rows="8" data-rule="required"
                            data-msg="Please write something for us"></textarea>
                        <div class="validate"></div>
                        </div>
                        <div class="mb-3">
                        <div class="loading">Loading</div>
                        <div class="error-message"></div>
                        <div class="sent-message">Your message has been sent. Thank you!</div>
                        </div>
                        <div class="text-center"><button type="submit">Send Message</button></div>
                    </form>
                    </div>

                </div>

                </div>
            </section>
        </div>
    )
}

export default AboutScreen