import React from "react"; //6.9k (gzipped: 2.7k)

import '../styles/about.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/about-1.jpg'
import heroImg02 from '../assets/images/about-2.jpg'
import heroImg03 from '../assets/images/about-3.jpg'


import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";


const About = () => {
    return <>

    {/*hero section start*/}
    <section>
        <Container>
        
                <Col lg='20'>
                    <div className="hero_content">
                       <h1> Our <span className="highlight">story</span> </h1>
                       <p>We started our business 15 years ago to show people all the beautiful places in this world.
                        If you don't like making plans, leave that to us. Our experts are here to guide you through the best places for a weekend getaway or a week-long trip to paradise.
                       </p>
                    </div>
                </Col>
    
            <Row>
                <Col lg='6'>
                    <div className="hero_img-box">
                        <img src={heroImg} alt=""/>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="hero_img-box mt-4">
                        <img src={heroImg02} alt="" />
                    </div>
                </Col>
               
            </Row>
            <Row>
                <p></p>
                <p></p>
                <p></p>
            </Row>
            
            <Row>
                
               
             
                <Col lg='6'>
                    <div className="hero_img-box">
                        <img src={heroImg03} alt=""/>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="hero_content">
                       <h1> Our <span className="highlight">team</span> </h1>
                       <p> Our experts are here to guide you through the best places for a weekend getaway or a week-long trip to paradise.
                       </p>
                    </div>
                </Col>


            </Row>
        </Container>
    </section>

     
    

    

    </>
};

export default About;