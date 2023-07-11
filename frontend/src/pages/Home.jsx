import React from 'react';
import Navbar from "../components/Header/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Footer from '../components/Footer.jsx';
import Slider from '../components/Slider.jsx';

const Home = () => {
    return (
        <div>
          <Navbar/>
          <div className="relative">
             <Slider className="absolute inset-0"/>
            <div className="relative z-10">
            <Hero/>
        
            </div>
        </div>
            <Footer/>
        </div>
    );
};

export default Home;