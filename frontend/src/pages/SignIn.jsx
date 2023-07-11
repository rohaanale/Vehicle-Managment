import React from 'react';
import Navbar from "../components/Header/Navbar.jsx";
import Login from "../components/Login.jsx";
import Footer from '../components/Footer.jsx';

const SignIn = () => {
    return (
        <div>
            <Navbar/>
            <Login/>
            <Footer/>
        </div>
    );
};

export default SignIn;
