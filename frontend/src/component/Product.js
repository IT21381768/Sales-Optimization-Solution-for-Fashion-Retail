import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './css/product.css';

function ProductList({ addToCartHandler, cart, setCart }) {
    const [products, setProducts] = useState([]);
    const history = useNavigate();

    useEffect(() => {
        async function fetchProducts() {
            try {
                const response = await axios.get('http://localhost:5000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        }
        fetchProducts();
    }, []);

    const navigateToCart = () => {
        history.push('/cart');
    };

    const addToCart = async (productId) => {
        try {
            await axios.post(`http://localhost:5000/api/carts/${productId}/add-to-cart`);
            alert('Product added to cart!');
            // Update the cart state
            setCart(prevCart => [...prevCart, productId]);
            addToCartHandler();
        } catch (error) {
            console.error('Error adding product to cart:', error);
        }
    };

    return (
        <div>
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="product-item">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <p>Rs. {product.price}</p>
                            <p>{product.capacity}ml</p>
                            <button onClick={() => addToCart(product._id)} className="add-to-cart-button">
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <button onClick={navigateToCart}>Go to Cart</button>
        </div>
    );
}

export default ProductList;
