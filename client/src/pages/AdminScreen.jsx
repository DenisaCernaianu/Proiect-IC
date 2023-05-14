import React, {useState, useEffect} from "react"; //6.9k (gzipped: 2.7k)
import { Tabs } from "antd";
import axios from "axios"
import CommonSection from "../shared/CommonSection";
import '../styles/tour.css';
import TourCard from'./../shared/TourCard';
import SearchBar from'./../shared/SearchBar';
import tourData from '../assets/data/tours';
import { Container, Row, Col } from "reactstrap";

import useFetch from '../hooks/useFetch'
import { BASE_URL } from "../utils/config";
import '../styles/home.css'

const {TabPane} = Tabs;

const AdminScreen = () =>{
    return(
        <div className='admin-screen'>
            <h2 className="text-center"><b>Admin Panel</b></h2>
            <Tabs defaultActiveKey="1">
                <TabPane tab = "Bookings" key="1"><Bookings/></TabPane>
                <TabPane tab = "Tours" key="2"><Tours/></TabPane>
                <TabPane tab = "Add tour" key="3"><h1>Add tour</h1></TabPane>
                <TabPane tab = "Users" key="4"><h1>Users</h1></TabPane>
            </Tabs>
        </div>
    );
};
export default AdminScreen;

const Tours = () => {

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
            <Col lg= '3'  md = '6' sm = '6' className='mb-4' key={tour._id}>{tour.title}</Col>
        ))
    }
    </>
    );
};

const Bookings = () => {

     const {data:bookings, loading, error} = useFetch(`${BASE_URL}/booking`)
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
    bookings?.map(book=> (
            <Col lg= '3'  md = '6' sm = '6' className='mb-4' key={book._id}>{book.tourName}</Col>
        ))
    }
    </>
    );
};