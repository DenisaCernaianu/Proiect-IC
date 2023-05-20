import React, {useState, useEffect} from "react"; //6.9k (gzipped: 2.7k)
import { Tabs } from "antd";
import axios from "axios"
import CommonSection from "../shared/CommonSection";
import '../styles/tour.css';
import TourCard from'../shared/TourCard';
import SearchBar from'../shared/SearchBar';
import tourData from '../assets/data/tours';
import { Container, Row, Col } from "reactstrap";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BASE_URL } from "../utils/config";

import useFetch from '../hooks/useFetch'

const headerStyle = {
    background:   '#ff9900',
    fontWeight: 'bold',
    padding: '8px',
  };

  const cellStyle = {
    border: '1px solid #ddd',
    padding: '8px',
    background:'#ffebcc'
  };

  const deleteTour = async (id) => {
    alert("Delete tour?");
    try {
      const response = await axios.delete(`${BASE_URL}/tours/${id}`);
      console.log(response.data); // Optional: log the response data
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error if deletion fails
    }
  };

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
     <table style={{width: 700}}><thead>
     <tr>  <th style={headerStyle}>  Title:</th>   <th style={headerStyle}>  City:</th>  <th style={headerStyle}>   Address:</th>  <th style={headerStyle}>Price:</th> <th style={headerStyle}>Delete:</th></tr> 
     </thead>
     <tbody>
         {tours?.map(tour=> (
     <tr key={tour._id}>
     <td style={cellStyle}>{tour.title}</td>
     <td style={cellStyle}>{tour.city}</td>
     <td style={cellStyle}>{tour.address}</td>
     <td style={cellStyle}>{tour.price}</td>
     <td style={cellStyle}><FontAwesomeIcon icon={faTrash} onClick={()=>deleteTour(tour._id)}/></td>
     </tr>))}
         </tbody> </table> 

         }
    </>
    );
};

  export default ToursAdmin;
