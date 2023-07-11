import React from 'react';
import image from "../assets/react.svg";
import image1 from "../assets/1.jpg"
import Slider from './Slider';
const Hero = () => {
    return (
        
       <section className="text-white body-font">
       <div className="container w-full h-[570px] mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
           <div
               className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
               <h1 className={`title-font text-4xl mb-4`} style={{ color: 'red' , fontWeight: 'bold' }} >
                   VEHICLE MANAGEMENT SYSTEM
               </h1>
               <p className="my-8 leading-relaxed text-xl" style={{ color: 'red'}} >Our goal is to be the organization that provides the vehicle management solutions to help people, and other communities to prosper.</p>
           </div>
           <div className="lg:max-w-lg xl:w-full lg:w-full md:w-1/2 w-5/6">
               {/* <img className="object-cover object-center rounded w-full" alt="hero" src={image1}/>  */}
           </div>
       </div>
   </section>
    );
};

export default Hero;
