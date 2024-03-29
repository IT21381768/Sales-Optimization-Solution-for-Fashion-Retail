import React from 'react';
import { addToCart } from "../features/cartSlice";
import { useDispatch } from "react-redux";
import { useGetAllProductsQuery } from "../features/productApi";
import { useNavigate } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

const HomeP = () => {
    const { data, error, isLoading } = useGetAllProductsQuery();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleAddToCart = (product) => {
        dispatch(addToCart(product));
    }
    const Images = [
        "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1773&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D0",
    ];

    return (
        <div className="mt-30 text-black home-container bg-gray-100">
            {isLoading ? (
                <p className="text-xl font-semibold text-center">Loading....</p>
            ) : error ? (
                <p className="text-xl font-semibold text-center">Ensure that the backend is running. </p>
            ) : (
                <>
                   
                    <Carousel showThumbs={false} showStatus={false} autoPlay infiniteLoop>
                    {Images.map((imageUrl, index) => (
                     <div key={index}>
                     <img src={imageUrl} alt={`Slide ${index}`} />
                     </div>
                      ))}
                     </Carousel>
                   
                    <div className="mt-8">
                        <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">New Arrivals</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {data?.map((product) => (
                                <div key={product._id} className="product bg-white shadow-lg rounded-lg p-6">
                                    <h1 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h1>
                                    <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
                                    <div className="details">
                                        <span className="text-sm text-gray-600">{product.desc}</span>
                                        <span className="block text-lg font-bold mt-2 text-gray-800">${product.price}</span>
                                    </div>
                                 
                                    <button className="add-to-cart bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded" onClick={()=>handleAddToCart(product)}>
                                        Add to cart
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default HomeP;
