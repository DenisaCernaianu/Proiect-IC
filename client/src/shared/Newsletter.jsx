import React from 'react'
import './newsletter.css'

import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () =>{
    return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter-content">
                        <h2>Subscribe now to get useful traveling information</h2>
                        <div className="newsletter-input">
                            <input type="email" placeholder='Enter your email'/>
                            <button className="btn newsletter-btn">Subscribe</button>
                        </div>
                        <p>Let's keep in touch. Let us send you our special offers so you can start planning your next incredible vacantion with us!</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter-img">
                        <img src={maleTourist}/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
)}

export default Newsletter