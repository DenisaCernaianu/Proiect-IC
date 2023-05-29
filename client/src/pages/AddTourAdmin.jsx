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


const AddTourAdmin = () => {

const [postImage, setPostImage] = useState({photo : ""})

const createPost = async (newImage) =>{
    try {
        await axios.post(`${BASE_URL}/tours`, newImage)
    } catch (error) {
        console.log(error)
    }
}
  const [tourData, setTourData] = useState({
    title: "",
    city: "",
    address: "",
    distance: "",
    photo: "",
    desc: "",
    price: "",
    maxGroupSize: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTourData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    convertFileToBase64(file);
  };

  const handleFileUpload = async(e) =>{
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setPostImage({...postImage, photo : base64})
  }

  const convertFileToBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setTourData((prevData) => ({
        ...prevData,
        photo: reader.result,
      }));
    };
    reader.onerror = (error) => {
      console.error("Error converting file to Base64:", error);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    createPost(postImage)
    console.log("uploaded")
    

    try {
      const response = await axios.post(`${BASE_URL}/tours`, tourData);
      console.log(response.data);
      window.confirm("Inserted successfully");
      // Perform any necessary actions after successful tour addition
      // Reset the form data
      setTourData({
        title: "",
        city: "",
        address: "",
        distance: "",
        photo: "",
        desc: "",
        price: "",
        maxGroupSize: "",
      });
    } catch (error) {
      console.error(error);
      // Handle error if tour addition fails
    }
  };

  return (
    <div>
      <h2>Add Tour</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={tourData.title}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>City:</label>
          <input
            type="text"
            name="city"
            value={tourData.city}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={tourData.address}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Distance:</label>
          <input
            type="number"
            name="distance"
            value={tourData.distance}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Photo:</label>
          <input
            type="file"
            name="photo"
           // value={tourData.photo}
            //accept=".jpeg, .png, .jpg"
            onChange={handlePhotoChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="desc"
            value={tourData.desc}
            onChange={handleChange}
            className="form-control"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input
            type="number"
            name="price"
            value={tourData.price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Max Group Size:</label>
          <input
            type="number"
            name="maxGroupSize"
            value={tourData.maxGroupSize}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Add Tour</button>
      </form>
    </div>
  );
};

export default AddTourAdmin;

function convertToBase64(file){
    return new Promise((resolve, reject)=>{
        const fileReader = new FileReader();
        fileReader.readAsDataURL(file);

        fileReader.onload = () =>{
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) =>{
            reject(error)
        }
    })

}
