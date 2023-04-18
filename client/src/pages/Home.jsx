import React from "react"; //6.9k (gzipped: 2.7k)
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/heroImg.jpg'
import heroImg02 from '../assets/images/heroImg02.jpg'
import heroImg03 from '../assets/images/heroImg03.jpg'
import worldImg from '../assets/images/world.png'
import experienceImg from '../assets/images/experience.png'

import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimoials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
    return <>

    {/*hero section start*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero_content">
                       <div className="hero_subtitle d-flex align-items-center">
                                <Subtitle subtitle={'Know Before You Go'}/>
                                <img src={worldImg} alt="" />
                       </div>
                       <h1> Traveling opens the door to creating <span className="highlight">memories</span> </h1>
                       <p>Let loose. When was the last time you went somewhere completely unplanned?
                        If you don't like making plans, leave that to us. Our experts are here to guide you through the best places for a weekend getaway or a week-long trip to paradise.
                       </p>
                    </div>
                </Col>

                <Col lg='2'>
                    <div className="hero_img-box">
                        <img src={heroImg} alt=""/>
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero_img-box mt-4">
                        <img src={heroImg02} alt="" />
                    </div>
                </Col>
                <Col lg='2'>
                    <div className="hero_img-box mt-5">
                        <img src={heroImg03} alt=""/>
                    </div>
                </Col>

                <SearchBar/>
            </Row>
        </Container>
    </section>
     {/*hero section start*/}
     <section>
        <Container>
            <Row>
                <Col lg='3'>
                    <h5 className="services_subtitle">What we offer</h5>
                    <h2 className="services_title">We provide the best quality</h2>
                </Col>
                <ServiceList>

                </ServiceList>
            </Row>
        </Container>
     </section>

     {/*=============== featured tour section start =================== */}
     <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <Subtitle subtitle={'Explore'}></Subtitle>
                    <h2 className="featured_tour-title">Our featured tours</h2>
                </Col>
                <FeaturedTourList></FeaturedTourList>
            </Row>
        </Container>
     </section>
     {/*=============== featured tour section end =================== */}

     {/*=============== experience section start =====================*/}
     <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="experience_content">
                        <Subtitle subtitle={'Experience'}></Subtitle>

                        <h2>Let's dive right in</h2>
                        <p>
                            X-perience
                        </p>
                    </div>
                    <div className="counter_wrapper d-flex align-items-center gap-5">
                         <div className="counter_box">
                            <span>12k+</span>
                            <h6>Successful trip</h6>
                         </div>
                         <div className="counter_box">
                            <span>2k+</span>
                            <h6>Regular clients</h6>
                         </div>
                         <div className="counter_box">
                            <span>15</span>
                            <h6>Years experience</h6>
                         </div>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="experience_img">
                        <img src={experienceImg} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
     </section>


     {/*=============== experience section end =====================*/}

    {/*=============== gallery section start   =====================*/}
     <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Gallery'}/>
                    <h2 className="gallery_title">
                        Visit our customers tour gallery
                    </h2>
                </Col>
                <Col lg='12'>
                  <MasonryImagesGallery/>
                </Col>
            </Row>
        </Container>
     </section>
     {/*=============== gallery section end   =====================*/}

     {/*=============== testimonial section start   =====================*/}
      <section>
        <Container>
            <Row>
                <Col lg='12'>
                    <Subtitle subtitle={'Fans Love'}/>
                    <h2 className="testimonial_title">What our fans say about us</h2>
                </Col>
                <Col lg='12'>
                    <Testimonials/>
                </Col>
            </Row>
        </Container>
      </section>
     {/*=============== testimonial section end   =====================*/}
     <Newsletter/>

    

    </>
};

export default Home;