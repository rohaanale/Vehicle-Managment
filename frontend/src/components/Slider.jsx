import React, {useEffect, useRef} from 'react';
import SwiperCore from 'swiper';
import swiper1 from ".././assets/2.jpg"
import swiper2 from ".././assets/2.mp4"
// import swiper3 from ".././assets/2.mp4"
import swiper4 from  ".././assets/1.jpg"
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';

// import 'swiper/swiper.min.css';
// import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);
const Slider = () => {
    const swiperRef = useRef(null);
    useEffect(() => {
        if (swiperRef.current) {
            const swiperInstance = swiperRef.current.swiper;
            swiperInstance.autoplay.start();
        }
    }, []);
    return (
        <Swiper
            // modules={[Navigation, Pagination, Autoplay]}
            className="absolute inset-0"
            slidesPerView={1}
            // navigation
            autoplay={{
                delay: 7000, // Specify the delay in milliseconds before the next slide
                disableOnInteraction: false, // Enable autoplay even when user interacts with the Swiper
            }}
            ref={swiperRef}
            // pagination={{
            //     clickable: true,
            //     // bulletClass: 'custom-pagination-bullet'
            //     dynamicBullets: true, // Enable dynamic pagination bullets
            // }}
        >
            <SwiperSlide>
                <img src={swiper1} className="w-full" alt=""/>
            </SwiperSlide>
            <SwiperSlide>
                <video autoPlay loop muted className="swiper-video w-full">
                    <source src={swiper2} type="video/mp4"/>
                </video>
            </SwiperSlide>
            {/* <SwiperSlide>
                <video autoPlay loop muted className="swiper-video w-full">
                    <source src={swiper3} type="video/mp4"/>
                </video>
            </SwiperSlide> */}
            <SwiperSlide>
                <img src={swiper4} className="w-full" alt=""/>
            </SwiperSlide>
        </Swiper>
    );
};

export default Slider;