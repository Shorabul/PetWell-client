import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate, } from "react-router";
import { FaStar, FaArrowLeft } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthContext";
import toast from 'react-hot-toast';

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const numId = Number(id);
        if (!/^\d+$/.test(id)) {
            navigate("/error");
            return;
        }
        const foundProduct = products.find((p) => p.productId === numId);
        // setProduct(foundProduct);
        if (!foundProduct) {
            console.log("erro");
            navigate("/error");
        } else {
            setProduct(foundProduct);
        }
    }, [id, products]);
    // if (!product) {
    //     return (
    //         <div className="min-h-screen flex justify-center items-center bg-[#0f181f] text-white">
    //             <p>Product not found.</p>
    //         </div>
    //     );
    // }

    const notify = () => {
        toast.success(`${product.productName} added to cart! 🛒`, {
            position: "bottom-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    }

    return (
        <div className="bg-[#0f181f] text-white/90 flex justify-center items-center p-6">
            <div className="bg-[#0f181f] border border-[#2c2c2c] rounded-3xl shadow-[0_0_40px_rgba(97,118,32,0.25)] w-full max-w-4xl overflow-hidden">
                {/* Header */}
                <div className="p-6 flex items-center justify-between">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-white/80 hover:text-[#a1c935] font-medium transition-colors"
                    >
                        <FaArrowLeft /> Back to Products
                    </Link>
                </div>

                {/* Content */}
                <div className="grid md:grid-cols-2 gap-8 px-8 pb-8">
                    {/* Product Image */}
                    <div className="flex justify-center items-center">
                        <img
                            src={product.image}
                            alt={product.productName}
                            className="rounded-2xl w-full max-w-sm object-cover shadow-[0_0_25px_rgba(97,118,32,0.25)]"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-4">
                        <h1 className="text-2xl md:text-3xl font-semibold text-[#c1e340]">
                            {product.productName}
                        </h1>

                        {/* Rating */}
                        <div className="flex items-center space-x-1 text-[#facc15]">
                            {Array.from({ length: Math.floor(product.rating) }).map((_, idx) => (
                                <FaStar key={idx} className="text-sm md:text-base" />
                            ))}
                            <span className="ml-2 text-sm text-white/70">
                                {/* {product.rating.toFixed(1)} / 5 */}
                                {product?.rating?.toFixed(1) || '0.0'} / 5
                            </span>
                        </div>

                        {/* Price */}
                        <p className="text-xl font-bold">${product.price}</p>

                        {/* Description */}
                        <p className="text-white/70 text-sm leading-relaxed">
                            {product.description}
                        </p>

                        {/* Add to Cart / Buy Button */}
                        <div className="pt-4">
                            <button onClick={notify} className="bg-[#a1c935] hover:bg-[#c1e340] text-black font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
