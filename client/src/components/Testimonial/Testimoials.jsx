import React from "react"; //6.9k (gzipped: 2.7k)
import Slider from 'react-slick';
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimoials = () => {

    const settings = {
            dots:true,
            infinite:true,
            autoplay:true,
            speed:1000,
            swipeToSlide:true,
            autoplaySpeed:2000,
            slidesToShow: 3,

            responsive:[
                {
                    breakpoint: 992,
                    settings:{
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },

                {
                    breakpoint: 576,
                    settings:{
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },

            ]

    }

    return (
    <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>An unparalleled experience</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava01} className='w-25 h-25 rounded 2'></img>
                <div>
                    <h5 className="mb-0 mt-3">Alan Parker</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>The staff was extremely professional</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava02} className='w-25 h-25 rounded 2'></img>
                <div>
                    <h5 className="mb-0 mt-3">Ava Johnson</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Exceeded our expectations</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded 2'></img>
                <div>
                    <h5 className="mb-0 mt-3">Johnny Dee</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>Exceeded our expectations</p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava03} className='w-25 h-25 rounded 2'></img>
                <div>
                    <h5 className="mb-0 mt-3">Johnny Dee</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

    </Slider>
)};

export default Testimoials;