import React from "react";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import { useInView } from "../hooks/useInView";

const ProductCard = ({ product, direction = "right" }) => {
    const { productName = "Unnamed", image = "/placeholder.png", rating = 0, price = 0, productId } = product || {};
    const [ref, isVisible] = useInView({ threshold: 0.1 });

    return (
        <div
            ref={ref}
            className={`
        product-card bg-gradient-to-tr from-[#617620] to-[#0f181f] rounded-2xl shadow-lg overflow-hidden
        transform transition-all duration-700 ease-out
        ${isVisible
                    ? "opacity-100 translate-x-0"
                    : direction === "right"
                        ? "opacity-0 translate-x-20"
                        : "opacity-0 -translate-x-20"}
      `}
        >
            {/* Product Image */}
            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={productName}
                    loading="lazy"
                    className="w-full h-[200px] sm:h-[220px] md:h-[250px] object-cover rounded-t-2xl transform transition-transform duration-300 hover:scale-105"
                />
            </div>

            {/* Product Info */}
            <div className="p-4 text-left text-white space-y-2">
                <Link to={`/product-details/${productId}`}>
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold hover:underline">
                        {productName}
                    </h3>
                </Link>

                {/* Rating */}
                <div className="flex items-center space-x-1 text-yellow-400">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <FaStar
                            key={idx}
                            className={`text-xs sm:text-sm md:text-base ${idx < Math.floor(rating) ? "fill-current" : "opacity-30"
                                }`}
                        />
                    ))}
                    <span className="text-xs sm:text-sm md:text-base font-medium ml-1">
                        {rating.toFixed(1)}
                    </span>
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