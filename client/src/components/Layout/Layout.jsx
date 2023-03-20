import React from "react"; //6.9k (gzipped: 2.7k)

import Header from "../Header/Header";
import Routers from "../../router/Routers";
import Footer from "../Footer/Footer";

const Layout = () => {
    return <>
    <Header/>
    <Routers />
    <Footer/>
    </>
};

export default Layout;