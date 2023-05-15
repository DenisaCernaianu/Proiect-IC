import React, {useState, useEffect} from "react"; //6.9k (gzipped: 2.7k)
import { Tabs } from "antd";
import axios from "axios"
import CommonSection from "../shared/CommonSection";
import '../styles/tour.css';
import TourCard from'../shared/TourCard';
import SearchBar from'../shared/SearchBar';
import tourData from '../assets/data/tours';
import { Container, Row, Col } from "reactstrap";


import { BASE_URL } from "../utils/config";

import useFetch from '../hooks/useFetch'
const ToursAdmin = () => {

    const {data:tours, loading, error} = useFetch(`${BASE_URL}/tours`)
    return(
    <>
    {
        loading && <h4>loading...</h4>
    }
    {
        error && <h4>{error}</h4>
    }
    {!loading 
    && !error
     &&
    tours?.map(tour=> (
            <Col lg= '3'  md = '6' sm = '6' className='mb-4' key={tour._id}>
             <table style={{width: 700}}> <tr>  <b>  Title:</b> {tour.title}    <b>  City:</b> {tour.city}  <b>  Address:</b> {tour.address}    <b>   Price:</b> {tour.price} </tr> </table> </Col> 
        ))
    }
    </>
    );
};

  export default ToursAdmin;
