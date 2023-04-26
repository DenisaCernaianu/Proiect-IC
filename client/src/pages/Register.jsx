import React, {useState, useContext} from "react"; //6.9k (gzipped: 2.7k)
import {Container, Row, Col, Form, FormGroup, Button} from "reactstrap"
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'

import registerImg from '../assets/images/register.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Register = () => {

    const [credentials, setCredentials] = useState({
        userName: undefined,
        email:undefined,
        password: undefined
    });

    const {dispach} = useContext(AuthContext)
    const navigate = useNavigate()

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const handleClick = async e=>{
        e.preventDefault();

        try {
            const res = await fetch(`${BASE_URL}/auth/register`,{
                method:'post',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(credentials)
            })

            const result = await res.json()
            if(!res.ok) alert(result.message)

            dispach({type:"REGISTER_SUCCESS"})
            navigate('/login')

        } catch (err) {
            alert(err.message);   
        }
    }




    return <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login-container d-flex justify-content-between">
                        <div className="login-img">
                            <img src={registerImg}></img>
                        </div>

                        <div className="login-form">
                            <div className="user">
                            <img src={userIcon}></img>
                            </div>
                            <h2>Register</h2>

                        <Form onSubmit={handleClick}>

                        <FormGroup>
                                <input type="text" placeholder="Username" required id="username" onChange={handleChange}></input>
                            </FormGroup>
                            
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email" onChange={handleChange}></input>
                            </FormGroup>

                            <FormGroup>
                                <input type="password" placeholder="Password" required id="password" onChange={handleChange}></input>
                            </FormGroup>

                            <button className="btn secondary_btn auth__btn" type="submit">Create Account</button>

                        </Form>
                        <p>Already have an account? <Link to='/login'>Login</Link></p>
                    
                        </div>

                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Register;