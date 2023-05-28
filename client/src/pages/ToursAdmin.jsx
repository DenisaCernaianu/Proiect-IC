import React, { useState, useEffect } from "react";
import { Tabs, Modal, Input } from "antd";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "reactstrap";
import { BASE_URL } from "../utils/config";
import useFetch from '../hooks/useFetch';

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

const ToursAdmin = () => {
  const [tours, setTours] = useState([]);
  const [editTourModalVisible, setEditTourModalVisible] = useState(false);
  const [editedTour, setEditedTour] = useState({});
  const { data, loading, error } = useFetch(`${BASE_URL}/tours`);

  useEffect(() => {
    setTours(data);
  }, [data]);

  const deleteTour = async (id) => {
    const confirmDelete = window.confirm("Delete tour?");
  
    if (confirmDelete) {
      try {
        await axios.delete(`${BASE_URL}/tours/${id}`);
        // Remove the deleted tour from the tours state
        setTours((prevTours) => prevTours.filter((tour) => tour._id !== id));
      } catch (error) {
        console.error(error);
        // Handle error if deletion fails
      }
    }
  };
  

  const openEditTourModal = (tour) => {
    setEditedTour(tour);
    setEditTourModalVisible(true);
  };

  const closeEditTourModal = () => {
    setEditTourModalVisible(false);
    setEditedTour({});
  };

  const updateTour = async () => {
    try {
      const response = await axios.put(`${BASE_URL}/tours/${editedTour._id}`, editedTour);
      console.log(response.data);
      // Update the tours state with the edited tour
      setTours((prevTours) =>
        prevTours.map((tour) => (tour._id === editedTour._id ? editedTour : tour))
      );
      closeEditTourModal();
    } catch (error) {
      console.error(error);
      // Handle error if update fails
    }
  };
  

  return (
    <>
      {loading && <h4>loading...</h4>}
      {error && <h4>{error}</h4>}
      {!loading && !error && (
        <>
          <table style={{ width: 700 }}>
            <thead>
              <tr>
                <th style={headerStyle}>Title:</th>
                <th style={headerStyle}>City:</th>
                <th style={headerStyle}>Address:</th>
                <th style={headerStyle}>Price:</th>
                <th style={headerStyle}>Delete:</th>
                <th style={headerStyle}>Edit:</th>
              </tr>
            </thead>
            <tbody>
              {tours.map((tour) => (
                <tr key={tour._id}>
                  <td style={cellStyle}>{tour.title}</td>
                  <td style={cellStyle}>{tour.city}</td>
                  <td style={cellStyle}>{tour.address}</td>
                  <td style={cellStyle}>{tour.price}</td>
                  <td style={cellStyle}>
                    <FontAwesomeIcon icon={faTrash} onClick={() => deleteTour(tour._id)} />
                  </td>
                  <td style={cellStyle}>
                    <FontAwesomeIcon icon={faEdit} onClick={() => openEditTourModal(tour)} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <Modal
            open={editTourModalVisible}
            onCancel={closeEditTourModal}
            onOk={updateTour}
            title="Edit Tour"
            okText="OK"
            cancelText="Cancel"
          >
            <Input
              placeholder="Title"
              value={editedTour.title || ""}
              onChange={(e) => setEditedTour({ ...editedTour, title: e.target.value })}
            />
            <Input
              placeholder="City"
              value={editedTour.city || ""}
              onChange={(e) => setEditedTour({ ...editedTour, city: e.target.value })}
            />
            <Input
              placeholder="Address"
              value={editedTour.address || ""}
              onChange={(e) => setEditedTour({ ...editedTour, address: e.target.value })}
            />
            <Input
              placeholder="Price"
              value={editedTour.price || ""}
              onChange={(e) => setEditedTour({ ...editedTour, price: e.target.value })}
            />

          </Modal>
        </>
      )}
    </>
  );
};

export default ToursAdmin;
