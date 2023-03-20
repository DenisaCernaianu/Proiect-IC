import React from 'react'; //6.9k (gzipped: 2.7k)
import {Container, Row, Button} from 'reactstrap'
import { NavLink, Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './Header.css';

const nav_links=[
    {
        path:'/home',
        display:'Home'
    },
    {
        path:'/about',
        dispaly:'About',
    },
    {
        path:'/tours',
        display:'Tours'
    },


]
const Header = () => {
    return <header className="header">
        <Container>
            <Row>
              <div className="nav_wrapper d-flex align-items-center 
               justify-content-between">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
              
              <div className="navigation">
                    <ul className="menu d-flex align-items-center gap-5">{
                        nav_links.map((item,index)=>(
                            <li className="nav_item" key={index}>
                                <NavLink to={item.path}>
                                    {item.display}
                                </NavLink>
                            </li>
                        ))
                    }

                    </ul>
                </div>
                <div className="nav_right d-flex align-items-center gap-4">
                    <div className="nav_btns d-flex align-items-center gap-4">
                         <button className="btn secondary_btn"><Link to='/login'>Login</Link></button>
                         <button className="btn primary_btn"><Link to='/register'>Register</Link></button>
                    </div>
                    <span className="mobile_menu"><i class="ri-menu-line"></i>
                    </span>
                </div>
                
                </div>  
            </Row>

        </Container>
    </header>
};

export default Header;

