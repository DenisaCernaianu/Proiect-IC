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

  const deleteUser = async (id) => {
    alert("Delete user?");
    try {
      const response = await axios.delete(`${BASE_URL}/users/${id}`);
      console.log(response.data); // Optional: log the response data
      // Perform any necessary actions after successful deletion
    } catch (error) {
      console.error(error);
      // Handle error if deletion fails
    }
  };

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

         <table style={{width: 700}}><thead>
            <tr>  <th style={headerStyle}>  ID:</th>   <th style={headerStyle}>  Username:</th>  <th style={headerStyle}>   Email:</th>  <th style={headerStyle}>   Delete:</th></tr> 
            </thead>
            <tbody>
                {users?.map(user=> (
            <tr key={user._id}>
                       <td style={cellStyle}>{user._id}</td>
            <td style={cellStyle}>{user.username}</td>
            <td style={cellStyle}>{user.email}</td>
            <td style={cellStyle}><FontAwesomeIcon icon={faTrash} onClick={()=>deleteUser(user._id)}/></td>
            </tr>))}
                </tbody> </table> 
             
        
    }
    </>
    );
};
  export default Users;
