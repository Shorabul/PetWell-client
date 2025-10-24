import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Hero = () => {
    return (
        <div className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/67LsDpQh/cute-cat.png"
                        alt="A photo of cat"
                        className="w-full h-full object-cover object-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/F4FnmTqT/rydale-clothing-b9n-Kw8m-UPU-unsplash.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover object-center"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/prXR9GpJ/cute-cat-sweater-lying-snow-playground.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover object-center"
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/DfJ8F2HJ/dog2.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover object-center"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/Nn9RzMNJ/Untitled-design.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover object-center"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;
