import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    return (
        <div className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden relative shadow-xl">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000 }}
                pagination={{ clickable: true }}
                className="w-full h-full"
            >
                {/* Slide 1 */}
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <img
                            src="https://i.ibb.co/67LsDpQh/cute-cat.png"
                            alt="A photo of cat"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    </div>
                </SwiperSlide>

                {/* Slide 2 */}
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <img
                            src="https://i.ibb.co/F4FnmTqT/rydale-clothing-b9n-Kw8m-UPU-unsplash.jpg"
                            alt="A photo of dog"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                    </div>
                </SwiperSlide>

                {/* Slide 3 */}
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <img
                            src="https://i.ibb.co/prXR9GpJ/cute-cat-sweater-lying-snow-playground.jpg"
                            alt="A photo of cat"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl"></div>
                    </div>
                </SwiperSlide>

                {/* Slide 4 */}
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <img
                            src="https://i.ibb.co/DfJ8F2HJ/dog2.jpg"
                            alt="A photo of dog"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                    </div>
                </SwiperSlide>

                {/* Slide 5 */}
                <SwiperSlide>
                    <div className="w-full h-full relative">
                        <img
                            src="https://i.ibb.co/Nn9RzMNJ/Untitled-design.jpg"
                            alt="A photo of dog"
                            className="w-full h-full object-cover object-center transform transition-transform duration-700 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-xl"></div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Optional Caption */}
            <div className="absolute bottom-5 left-5 text-white text-lg md:text-2xl font-bold drop-shadow-lg">
                Welcome to Our Pet Gallery
            </div>
        </div>
    );
};

export default Hero;

// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Autoplay, Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation';


// const Hero = () => {
//     return (
//         <div className="w-full h-[50vh] md:h-[60vh] rounded-xl overflow-hidden">
//             <Swiper
//                 modules={[Autoplay, Pagination]}
//                 spaceBetween={30}
//                 slidesPerView={1}
//                 loop={true}
//                 autoplay={{ delay: 3000 }}
//                 pagination={{ clickable: true }}
//                 className="w-full h-full"
//             >
//                 <SwiperSlide>
//                     <img
//                         src="https://i.ibb.co/67LsDpQh/cute-cat.png"
//                         alt="A photo of cat"
//                         className="w-full h-full object-cover object-center"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         src="https://i.ibb.co/F4FnmTqT/rydale-clothing-b9n-Kw8m-UPU-unsplash.jpg"
//                         alt="A photo of dog"
//                         className="w-full h-full object-cover object-center"
//                     />
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <img
//                         src="https://i.ibb.co/prXR9GpJ/cute-cat-sweater-lying-snow-playground.jpg"
//                         alt="A photo of dog"
//                         className="w-full h-full object-cover object-center"
//                     />
//                 </SwiperSlide>

//                 <SwiperSlide>
//                     <img
//                         src="https://i.ibb.co/DfJ8F2HJ/dog2.jpg"
//                         alt="A photo of dog"
//                         className="w-full h-full object-cover object-center"
//                     />
//                 </SwiperSlide>
//                 <SwiperSlide>
//                     <img
//                         src="https://i.ibb.co/Nn9RzMNJ/Untitled-design.jpg"
//                         alt="A photo of dog"
//                         className="w-full h-full object-cover object-center"
//                     />
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default Hero;
