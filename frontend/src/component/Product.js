// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './css/product.css';

// function ProductList() {
//     const [products, setProducts] = useState([]);

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await axios.get('http://localhost:5000/api/products');
//                 setProducts(response.data);
//             } catch (error) {
//                 console.error('Error fetching products:', error);
//             }
//         }
//         fetchProducts();
//     }, []);

//     return (
//         <div className="product-list-container"> 
//             <h2>Products</h2>
//             <ul>
//                 {products.map(product => (
//                     <li key={product._id} className="product-item">
//                         <h3>{product.name}</h3>
//                         <p>Description: {product.description}</p>
//                         <p className="price">Price: ${product.price}</p> 
//                         <p>Category: {product.category}</p>
//                         <p>Quantity: {product.quantity}</p>
//                         <p>Capacity: {product.capacity}</p>
//                         <p>Material: {product.material}</p>
//                         <p>Percentage: {product.percentage}</p>
//                         <p>Country: {product.country}</p>
//                         <img src={product.image} alt={product.name} />
//                         <button>Add to Cart</button>
//                     </li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default ProductList;
import React, { useState, useEffect } from 'react';
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
        <div>
            <div className="row">
                {products.map((product, index) => (
                    <div className="col-md-4" key={index}>
                        <div className="product-item">
                            <h3>{product.name}</h3>
                            <img src={product.image} alt={product.name} className="product-image" />
                            <p>{product.description}</p>
                            <p>Rs. {product.price}</p>
                            
                                <button type="submit" className="add-to-cart-button">ADD TO CART</button>
                           
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductList;
