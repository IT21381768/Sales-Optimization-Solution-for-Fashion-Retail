// ProductList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './css/product.css';

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
            <h2>Products</h2>
            <ul>
                {products.map(product => (
                    <li key={product._id} className="product-item"> {/* Apply className */}
                        <h3>{product.name}</h3>
                        <p>Description: {product.description}</p>
                        <p className="price">Price: ${product.price}</p> {/* Apply className */}
                        <p>Category: {product.category}</p>
                        <p>Quantity: {product.quantity}</p>
                        <p>Capacity: {product.capacity}</p>
                        <p>Material: {product.material}</p>
                        <p>Percentage: {product.percentage}</p>
                        <p>Country: {product.country}</p>
                        <img src={product.image} alt={product.name} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ProductList;
