import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from "reactstrap";

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Predict Weather",
        desc: "You can now see how the weather might look like on your trip!"

    },

    {
        imgUrl: guideImg,
        title: "Access to the Best Tour Guide",
        desc: "Not sure what you will visit? Let our guides guide you through the best spots!"

    },

    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "An experience made only for you"

    },


]

const ServiceList = () => {
    return( <>
    {
        servicesData.map((item, index)=>(
        <Col lg='3' key ={index}
        ><ServiceCard item={item}></ServiceCard>
        </Col>
        ))
    }
    </>
    );
};

export default ServiceList