import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthContext";
import { Link } from 'react-router';

const HeroSlider = () => {
    const { services } = useContext(AuthContext);
    const [servicesList, setServicesList] = useState([]);

    useEffect(() => {
        if (services?.length > 0) {
            setServicesList(services);
        }
    }, [services]);

    return (
        <div className="w-full max-w-7xl mx-auto mt-6 rounded-2xl overflow-hidden shadow-lg">
            <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                navigation
                loop={true}
                className="rounded-2xl"
            >
                {servicesList.map((service) => (
                    <SwiperSlide key={service.serviceId}>
                        <div className="relative w-full h-[350px] md:h-[500px]">
                            <img
                                src={service.image}
                                alt={service.serviceName}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-center text-center text-white p-6">
                                <h2 className="text-3xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                                    {service.serviceName}
                                </h2>
                                <p className="text-sm md:text-lg text-gray-200 max-w-2xl">
                                    {service.description}
                                </p>
                                <Link to='/services' className="mt-4 bg-[#a1c935] hover:bg-[#c1e340] text-black font-semibold px-5 py-2 rounded-full transition-all duration-300 shadow-md">
                                    Explore Service
                                </Link>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default HeroSlider;
