import React from 'react';
import { FaStar } from 'react-icons/fa6';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    const { productName, image, rating, price, productId } = product;
    console.log(productId);

    return (
        <div
            className="product-card opacity-0 bg-gradient-to-tr from-[#617620] to-[#0f181f] rounded-2xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105"
        >
            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={productName}
                    className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 text-left text-white space-y-2">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold">{productName}</h3>

                {/* Rating */}
                <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: Math.floor(rating) }).map((_, idx) => (
                        <FaStar className="text-xs sm:text-sm md:text-base" key={idx} />
                    ))}
                    <span className="text-xs sm:text-sm md:text-base font-medium ml-1">{rating}</span>
                </div>

                {/* Price + Button */}
                <div className="flex items-center justify-between pt-2">
                    <span className="text-sm sm:text-base md:text-lg font-semibold">${price}</span>
                    <Link
                        to={`/product-details/${productId}`}
                        className="bg-white text-[#7A8A35] hover:bg-green-600 hover:text-white font-semibold rounded-md text-xs md:text-sm px-3 md:px-5 py-1.5 md:py-2.5 transition"
                    >
                        View
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
