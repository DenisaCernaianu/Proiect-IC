import React from "react"; //6.9k (gzipped: 2.7k)
import '../styles/home.css'

import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/heroImg.jpg'
import heroImg02 from '../assets/images/heroImg02.jpg'
import heroImg03 from '../assets/images/heroImg03.jpg'
import worldImg from '../assets/images/world.png'
import Subtitle from "../shared/Subtitle";

import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";

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
                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum eius minima dolorum,
                         itaque ipsam dicta fugit reiciendis in magnam accusamus deleniti consectetur? Itaque
                          provident harum accusantium temporibus unde repellendus repellat.</p>
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

    </>
};

export default Home;