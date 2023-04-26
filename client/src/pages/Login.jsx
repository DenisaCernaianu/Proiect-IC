import React, {useState, useContext} from "react"; //6.9k (gzipped: 2.7k)
import {Container, Row, Col, Form, FormGroup, Button} from "reactstrap"
import {Link, useNavigate} from 'react-router-dom'
import '../styles/login.css'

import loginImg from '../assets/images/login.png'
import userIcon from '../assets/images/user.png'

import { AuthContext } from "../context/AuthContext";
import { BASE_URL } from "../utils/config";

const Login = () => {

    const [credentials, setCredentials] = useState({
        email:undefined,
        password: undefined
    });


    const {dispach} = useContext(AuthContext)
    const navigate = useNavigate();

    const handleChange = e =>{
        setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
    };

    const handleClick = async e=>{
        e.preventDefault();

        dispach({type:'LOGIN_START'})

        try {
            const res = await fetch(`${BASE_URL}/auth/login`,{
            method:'post',
                headers:{
                    'content-type':'application/json'
                },
                credentials:'include',
                body: JSON.stringify(credentials)})

                const result = await res.json()
                if(!res.ok) alert(result.message)


                dispach({type:'LOGIN_SUCCESS', payload : result.data})
                navigate('/')
        } catch (err) {
            dispach({type:'LOGIN_FAILURE', payload:err.message})
        }
    }




    return <section>
        <Container>
            <Row>
                <Col lg='8' className="m-auto">
                    <div className="login-container d-flex justify-content-between">
                        <div className="login-img">
                            <img src={loginImg}></img>
                        </div>

                        <div className="login-form">
                            <div className="user">
                            <img src={userIcon}></img>
                            </div>
                            <h2>Login</h2>

                        <Form onSubmit={handleClick}>
                            <FormGroup>
                                <input type="email" placeholder="Email" required id="email" onChange={handleChange}></input>
                            </FormGroup>

                            <FormGroup>
                                <input type="password" placeholder="Password" required id="password" onChange={handleChange}></input>
                            </FormGroup>

                            <button className="btn secondary_btn auth__btn" type="submit">Login</button>

                        </Form>
                        <p>Don't have an account? <Link to='/register'>Create</Link></p>
                    
                        </div>

                        
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
};

export default Login;