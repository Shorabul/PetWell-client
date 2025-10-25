import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthContext';
import ProductCard from './ProductCard';

const Products = () => {
    const { products } = useContext(AuthContext);

    return (
        <div className="w-full text-center space-y-8 px-4 md:px-8 py-10">
            <h2 className="text-white/90 font-extrabold text-3xl sm:text-4xl md:text-5xl">
                Popular Pet Products
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8">
                {products.map((product) => (
                    <ProductCard
                        key={product.productId}
                        product={product}
                    />
                ))}
            </div>
        </div>
    );
};

export default Products;