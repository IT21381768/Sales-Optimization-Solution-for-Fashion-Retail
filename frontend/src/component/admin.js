import React from 'react';
import { Link } from 'react-router-dom';
import './css/admin.css'; 

function Admin() {
    return (
        <div className="admin-container">
            <h2>Admin Panel</h2>
            <div>
                <Link to="/product/add">
                    <button className="admin-button">Add Products</button>
                </Link>
            </div>
            <div>
                <Link to="/product/list">
                    <button className="admin-button">View Product List</button>
                </Link>
            </div>
        </div>
    );
}

export default Admin;
