import React, { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router";
import { FaStar, FaArrowLeft } from "react-icons/fa6";
import { AuthContext } from "../provider/AuthContext";
import toast from 'react-hot-toast';
import { FaHeart } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();
    const { products, wishlist, setWishlist } = useContext(AuthContext);
    const [product, setProduct] = useState(null);
    const [mainImage, setMainImage] = useState("");
    const [isLoved, setIsLoved] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const numId = Number(id);
        if (!/^\d+$/.test(id)) {
            navigate("/error");
            return;
        }
        const foundProduct = products.find((p) => p.productId === numId);
        if (!foundProduct) {
            navigate("/error");
        } else {
            setProduct(foundProduct);
            setMainImage(foundProduct.image[0]);
            setIsLoved(wishlist?.some(w => w.productId === foundProduct.productId));
        }
    }, [id, products, wishlist, navigate]);

    if (!product) return <p>Loading...</p>;

    const notify = () => {
        toast.success(`${product.productName} added to cart! 🛒`, { position: "bottom-right" });
    };

    // const toggleWishlist = () => {
    //     if (isLoved) {
    //         setWishlist(prev => prev.filter(w => w.productId !== product.productId));
    //         toast.success(`${product.productName} removed from wishlist ❤️`);
    //     } else {
    //         setWishlist(prev => [...prev, product]);
    //         toast.success(`${product.productName} added to wishlist ❤️`);
    //     }
    //     setIsLoved(!isLoved);
    // };

    const handleWishlist = (p) => {
        setIsLoved(!isLoved)
        setWishlist(p);
    }


    return (
        <div className="text-white/90 flex justify-center items-center p-6">
            <div className="rounded-3xl w-full max-w-4xl overflow-hidden">

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

                    {/* Product Image + Thumbnails */}
                    <div className='flex flex-col justify-center'>
                        <img
                            src={mainImage}
                            alt={product.productName}
                            className="rounded-2xl w-full max-w-sm object-cover mb-4"
                        />

                        {/* Thumbnail Buttons */}
                        <div className="flex gap-2 justify-center">
                            {product.image.map((img, i) => (
                                <button
                                    key={i}
                                    onClick={() => setMainImage(img)}
                                    className={`w-16 h-16 rounded-md overflow-hidden border-2 ${mainImage === img ? "border-yellow-400" : "border-transparent"}`}
                                >
                                    <img
                                        src={img}
                                        alt={`${product.productName} ${i}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
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
                                {product?.rating?.toFixed(1) || '0.0'} / 5
                            </span>
                        </div>

                        {/* Price */}
                        <p className="text-xl font-bold">${product.price}</p>

                        {/* Description */}
                        <p className="text-white/70 text-sm leading-relaxed">
                            {product.description}
                        </p>

                        {/* Add to Cart */}
                        <div className="flex justify-start items-center gap-4">

                            <button
                                onClick={notify}
                                className="bg-[#a1c935] hover:bg-[#c1e340] text-black font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
                            >
                                Add to Cart
                            </button>
                            <button onClick={() => handleWishlist(product)}>
                                <FaHeart className={isLoved ? "text-red-500" : "text-gray-400"} size={40} />
                            </button>
                        </div>
                    </div>
                </div >
            </div >
        </div >
    );
};

export default ProductDetails;
