import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/product.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

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
            <table className="product-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Material</th>
                        <th>Description</th>
                        <th>Country</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td>{product.name}</td>
                            <td>{product.category}</td>
                            <td>{product.price}</td>
                            <td>{product.quantity}</td>
                            <td>{product.material}</td>
                            <td>{product.description}</td>
                            <td>{product.country}</td>
                            <td>
                                <button className="edit-button"><FaEdit /></button> 
                                <button className="delete-button"><FaTrash /></button> 
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ProductList;
