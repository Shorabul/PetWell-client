import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <div className="w-11/12 mx-auto h-[450px]">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="rounded-xl h-full"
            >
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/W4NYqyrK/dog3.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/F4hWwLSh/dog1.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src="https://i.ibb.co/DfJ8F2HJ/dog2.jpg"
                        alt="A photo of dog"
                        className="w-full h-full object-cover"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Hero;