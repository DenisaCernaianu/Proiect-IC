import React, {useState, useEffect} from "react"; //6.9k (gzipped: 2.7k)
import { Tabs } from "antd";

import '../styles/tour.css'
import '../styles/home.css'

import Users from "./Users";
import ToursAdmin from "./ToursAdmin";
import BookingsAdmin from "./BookingsAdmin";

const {TabPane} = Tabs;

const AdminScreen = () =>{

    return(
        <div className='admin-screen'>
            <h2 className="text-center"><b>Admin Panel</b></h2>
            <Tabs defaultActiveKey="1">
             
                
                <TabPane tab = "Tours" key="1"><ToursAdmin/></TabPane>
                <TabPane tab = "Users" key="2"><Users/></TabPane>
                <TabPane tab = "Bookings" key="3"><h1>BookingsAdmin</h1></TabPane>
                <TabPane tab = "Add Tour" key="4"><h1>Add Tour</h1></TabPane>
               
            </Tabs>
        </div>
    );
};
export default AdminScreen;


/*

const Bookings = () => {
    const [bookings, setBookings] = useState([]);
  
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

  
 /* const Tours = () => {
    const [tours, setTours] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/tours');
        setTours(response.data);
      } catch (error) {
        console.log('Error fetching tours:', error);
      }
    };
  
    return (
      <div>
        <h1>Tours</h1>
        <ul>
          {tours.map((tours) => (
            <li key={tours._id}>
              <h2>{tours.title}</h2>
             
              }
            </li>
          ))}
        </ul>
      </div>
    );
  };
*/

 /* const Users = () => {
    const [users, setUsers] = useState([]);
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/users');
        setUsers(response.data);
      } catch (error) {
        console.log('Error fetching users:', error);
      }
    };
  
    return (
      <div>
        <h1>Users</h1>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <h2>{user.username}</h2>
              <p>{user.email}</p>
              {/* render other user details *//*
            </li>
          ))}
        </ul>
      </div>
    );
  };*/

