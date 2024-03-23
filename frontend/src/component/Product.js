import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/ProductList.css';

function ProductList() {
    const [products, setProducts] = useState([]);

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

    return (
        <div className="product-list-container">
            {products.map((product, index) => (
                <div className="product-item" key={index}>
                    <h3>{product.name}</h3>
                    <img src={product.image} alt={product.name} className="product-image" />
                    <p>{product.description}</p>
                    <p>Rs. {product.price}</p>
                    <button type="submit" className="add-to-cart-button">ADD TO CART</button>
                </div>
            ))}
        </div>
    );
}

export default ProductList;
