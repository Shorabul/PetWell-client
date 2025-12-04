import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../provider/AuthContext';
import ProductCard from '../components/ProductCard';
import Loading from './Loading';

const AllProducts = () => {
    const { products } = useContext(AuthContext);

    const [showLoading, setShowLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    if (showLoading) {
        return <Loading className='h-[30vh]' />;
    }
    return (
        <div className='w-11/12 mx-auto text-center space-y-3 sm:space-y-5 md:space-y-8 lg:space-y-10'>
            <h2 className='text-white/80 font-semibold text-xl sm:text-2xl md:text-3xl lg:text-4xl'>All Pets Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
                {products.map((product, idx) => (
                    <ProductCard
                        key={product.productId}
                        product={product}
                        direction={idx % 2 === 0 ? "right" : "left"}
                    />
                ))}
            </div>
        </div>
    );
};

export default AllProducts;