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

const Users = () => {
    const {data:users, loading, error} = useFetch(`${BASE_URL}/users`)
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
    users?.map(user=> (
            <Col lg= '5'  md = '6' sm = '6' className='mb-4' key={user._id}>
         <table style={{width: 700}}> <tr>  <b>  ID:</b> {user._id}    <b>  Username:</b> {user.username}   <b>   Email:</b> {user.email} </tr> </table> </Col>   
             
        ))
    }
    </>
    );
};
  export default Users;
