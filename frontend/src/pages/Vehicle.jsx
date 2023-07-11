import React from 'react'
import Navbar from '../components/Header/Navbar'
import image1 from '../assets/1.jpg'
import image2 from '../assets/2.jpg'
import image3 from '../assets/3.jpg'
import image4 from '../assets/4.jpg'
import image5 from '../assets/5.jpg'
import image6 from '../assets/6.jpg'
import Footer from '../components/Footer'

const Vehicle = () => {
  return (
    <>
    <Navbar/>
    <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Vehicle Management System</h1>
                    <p class="lg:w-2/3 mx-auto leading-relaxed text-base">"Efficiently manage and track your fleet of vehicles with our comprehensive vehicle management system. From organizing vehicle information to monitoring maintenance schedules and analyzing performance data, our platform simplifies the process of managing your vehicles, saving you time and ensuring optimal operational efficiency."</p>
                </div>
                <div class="flex flex-wrap -m-4">
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image1} />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">"Sleek and Stylish Sedan</h1>
                                <p class="leading-relaxed">Experience luxury and performance with our sleek and stylish sedan. Its elegant design and advanced features make it the perfect choice for those who appreciate both style and substance</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image2} />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                               
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Powerful SUV for Adventure</h1>
                                <p class="leading-relaxed">Get ready to conquer the great outdoors with our powerful SUV. Designed to handle any terrain, this rugged and reliable vehicle offers ample space, cutting-edge technology, and impressive performance to fuel your adventurous spirit.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image3} />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                               
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Efficient and Eco-Friendly Hybrid</h1>
                                <p class="leading-relaxed">Embrace sustainability without compromising on performance. Our hybrid vehicle combines an efficient gasoline engine with an electric motor, delivering excellent fuel economy and reduced emissions while providing a comfortable and enjoyable driving experience."</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image4} />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Compact and City-Friendly Hatchback</h1>
                                <p class="leading-relaxed">Navigate the urban jungle with ease in our compact and city-friendly hatchback. Its nimble handling, compact size, and smart features make it the perfect companion for urban dwellers, offering convenience and style in one package.</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image5} />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                                
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Luxurious and Spacious Minivan</h1>
                                <p class="leading-relaxed">Experience the ultimate in comfort and versatility with our luxurious and spacious minivan. With ample seating and advanced safety features, it's the ideal choice for families or those in need of extra space without compromising on style and refinement."</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 sm:w-1/2 p-4">
                        <div class="flex relative">
                            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src={image6} />
                            <div class="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                               
                                <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Sporty and Agile Coupe</h1>
                                <p class="leading-relaxed">Unleash your inner thrill-seeker with our sporty and agile coupe. With its sleek design, powerful engine, and responsive handling, this car delivers an exhilarating driving experience that will leave you craving for more</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
<Footer/>
        </>
  )
}

export default Vehicle
