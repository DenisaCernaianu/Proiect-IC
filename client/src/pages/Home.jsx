import React from "react"; //6.9k (gzipped: 2.7k)
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/heroImg.jpg'
import heroImg02 from '../assets/images/heroImg02.jpg'
import heroImg03 from '../assets/images/heroImg03.jpg'

import SearchBar from "../shared/SearchBar";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../components/Image-gallery/MasonryImagesGallery";


const Home = () => {
    return <>

    {/*hero section start*/}
    <section>
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="hero_content">
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

     {/*=============== featured tour section start =================== */}
     <section>
        <Container>
            <Row>
                <Col lg='12' className="mb-5">
                    <h2 className="featured_tour-title">Our featured tours</h2>
                </Col>
                <FeaturedTourList></FeaturedTourList>
            </Row>
        </Container>
     </section>
     {/*=============== featured tour section end =================== */}

    

    {/*=============== gallery section start   =====================*/}
     <section>
        <Container>
            <Row>
                <Col lg='12'>
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

    

    </>
};

export default Home;