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
const headerStyle = {
  background: '#ff9900',
  fontWeight: 'bold',
  padding: '8px',
};

const cellStyle = {
  border: '1px solid #ddd',
  padding: '8px',
  background: '#ffebcc',
};

  const BookingsAdmin = () => {
   

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
     (
      <>
        <table style={{ width: 700 }}>
          <thead>
            <tr>
              <th style={headerStyle}>ID:</th>
              <th style={headerStyle}>Name:</th>
              <th style={headerStyle}>Contact Person:</th>
              <th style={headerStyle}>Group Size:</th>
              <th style={headerStyle}>Phone:</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((bookings) => (
              <tr key={bookings._id}>
                <td style={cellStyle}>{bookings._id}</td>
                <td style={cellStyle}>{bookings.tourName}</td>
                <td style={cellStyle}>{bookings.fullName}</td>
                <td style={cellStyle}>{bookings.guestSize}</td>
                <td style={cellStyle}>{bookings.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>

    
      </>
    )}
  </>
    )
};

  export default  BookingsAdmin;