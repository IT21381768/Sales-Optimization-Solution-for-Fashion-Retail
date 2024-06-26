import React from 'react';
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';

function NavBar() {
 // Access cart items from Redux store
 const cartItems = useSelector((state) => state.cart.cartItem);

 // Calculate total quantity of items in the cart
 const getTotalQuantity = () => {
    let totalQuantity = 0;
    cartItems.forEach((item) => {
      totalQuantity += item.cartQuantity;
    });
    return totalQuantity;
 };

 const totalQuantity = getTotalQuantity();

 const user = JSON.parse(localStorage.getItem("user"));
 return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          TRENDZ
        </Link>
        <ul className="nav-links">
          <li>
            <Link to="/product">Products</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/Register">Register</Link>
          </li>
          <li>
            <Link to="/cart">
              <div className="nav-bag">
                <FontAwesomeIcon icon={faShoppingBag} size="2x" style={{marginLeft:"23px"}} />
                {/* Display total quantity of items in the cart */}
                <span className="bag-Quantity-wrapper">
                 <span className="bag-Quantity">{totalQuantity}</span>
                </span>
              </div>
            </Link>
          </li>
          <li>{user ? (
            <Link to="/profile" style={{ textDecoration: "none", color: "white" }}>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" color="inherit">{user.firstName}</button>
            </Link>
          ) : (

            <Link to="" style={{ textDecoration: "none", color: "white" }}>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" color="inherit">Login</button>
            </Link>
          )}</li>
        </ul>
      </div>
    </nav>
 );
}

export default NavBar;
