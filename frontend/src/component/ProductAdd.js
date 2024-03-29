import React, { useState } from 'react';
import axios from 'axios';
import './css/ProductAdd.css';

function ProductAdd() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    quantity: '',
    capacity: '',
    material: '',
    percentage: '',
    country: '',
    description: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/products', formData);
      console.log('Product added successfully');
      window.location = "/product";
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <div className="product-add-container">
      <h2>Add Product</h2>
      <form className="product-add-form" onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Category:</label>
          <input type="text" name="category" value={formData.category} onChange={handleChange} />
        </div>
        <div>
          <label>Price:</label>
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </div>
        <div>
          <label>Quantity:</label>
          <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} />
        </div>
        {/* <div>
          <label>Capacity:</label>
          <input type="number" name="capacity" value={formData.capacity} onChange={handleChange} />
        </div> */}
        <div>
          <label>Material:</label>
          <input type="text" name="material" value={formData.material} onChange={handleChange} />
        </div>
        {/* <div>
          <label>Percentage:</label>
          <input type="number" name="percentage" value={formData.percentage} onChange={handleChange} />
        </div> */}
        <div>
          <label>Country:</label>
          <input type="text" name="country" value={formData.country} onChange={handleChange} />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" name="image" value={formData.image} onChange={handleChange} />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default ProductAdd;
