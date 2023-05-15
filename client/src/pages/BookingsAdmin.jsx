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

  const BookingsAdmin = () => {
   

   const {data:bookings, loading, error} = useFetch(`http://localhost:4000/api/v1/booking`)
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
    bookings?.map(books=> (
            <Col lg= '3'  md = '6' sm = '6' className='mb-4' key={books._id}>{books.fullName}</Col>
        ))
    }
    </>
    );
};
/*const [bookings, setBookings] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/booking');
        setBookings(response.data);
      } catch (error) {
        console.log('Error fetching bookings:', error);
      }
    };
  
    return (
      <div>
        <h1>Bookings</h1>
        <ul>
          {bookings.map((bookings) => (
            <li key={bookings._id}>
              {bookings.tourName},  {bookings.fullName}  
            </li>
          ))}
        </ul>
      </div>
    );
  };
  */
  export default  BookingsAdmin;