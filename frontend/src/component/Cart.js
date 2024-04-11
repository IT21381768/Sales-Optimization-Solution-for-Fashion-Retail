// Madanayake p.c.s - it21181788
import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { decreaseCart, removeFromCart,addToCart,clearCart,updateSize} from '../features/cartSlice';
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItem);
    const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (cartItem) => {
        // Remove the item from the cart
        dispatch(removeFromCart(cartItem));
    }

    const handleDecreaseCart = (cartItem) => {
        // Decrease the quantity of the item in the cart
        dispatch(decreaseCart(cartItem));
    }

    const handleIncreaseCart = (cartItem) => {
        // Increase the quantity of the item in the cart
        dispatch(addToCart(cartItem));
    }
    
    
    // const increase = () => {
    //     //when click plus button add one
    //     setQuantity(quantity + 1);
        

       
    // }
    // const decrease = () => {
    //     //when click minus button subtract one
    //     setQuantity(quantity - 1);
    // }

    const calculateSubtotal = () => {
        // Iterate through the cart items and sum up the individual totals
        let subtotal = 0;
        cartItems.forEach(cartItem => {
            subtotal += cartItem.price * cartItem.cartQuantity;
        });
        return subtotal;
    }

    const hadleClearCart = () => {
        // Clear the cart
        dispatch(clearCart());
    }
    // useEffect(() => {
    //     // Calculate subtotal whenever cartItems or quantity changes
    //     calculateSubtotal();
    // },  []);

    return (
        <div className="m-20" style={{ backgroundColor: "white", padding: "25px", marginLeft: "75px" }}>

            
<ol className="items-center sm:flex">
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-green-400 sm:ring-8 ">
                <svg className=" ">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Cart</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 ">
                <svg className="">
                    <path d=" "/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Checkout</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 ">
                <svg className=" ">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Complete</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol>
            <h1 className="text-3xl text-black font-bold mb-8" style={{marginTop:"60px"}}> cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <p className="text-lg">Your cart is empty</p>
                    <div className="mt-4">
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                            </svg>
                            <span className="ml-2">Go Home</span>
                        </Link> 
                    </div>
                </div>
            ) : (
                <div>
                    <div className="flex justify-between mb-4">
                        <h3 className="text-lg font-semibold w-1/4">Product</h3>
                        <h3 className="text-lg font-semibold w-1/4">Price</h3>
                        <h3 className="text-lg font-semibold w-1/4">Quantity</h3>
                        <h3 className="text-lg font-semibold w-1/4">Size</h3>
                        <h3 className="text-lg font-semibold w-1/4">Total</h3>
                    </div>
                    <div>
                        {cartItems.map(cartItem => (
                            <div key={cartItem.id} className="flex justify-between items-center mt-4 border-b border-gray-200 pb-4">
                                <div className="flex items-center w-1/4">
                                    <img src={cartItem.image} alt={cartItem.name} className="w-16 h-16 object-cover mr-4" />
                                    <div>
                                        <h3 className="text-lg">{cartItem.name}</h3>
                                        <p className="text-sm text-gray-500">{cartItem.description}</p>
                                        <button className="text-red-500 text-sm mt-2 flex-row " onClick={()=> handleRemoveFromCart(cartItem)}>Remove</button>
                                    </div>
                                </div>
                                <div className="w-1/4">
                                    <p className="text-lg font-semibold">${cartItem.price}</p>
                                </div>
                                <div className="flex items-center w-1/4">
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2" onClick={()=>handleDecreaseCart(cartItem) }>-</button>
                                    <p className="text-lg font-semibold">{cartItem.cartQuantity}</p>
                                    <button className="bg-blue-500 text-white px-2 py-1 rounded ml-2"  onClick={()=>handleIncreaseCart(cartItem)} >+</button>
                                </div>
                                <div className="w-1/4" style={{Width:"5px"}}>
                                <select className="form-select block w-full mt-1" onChange={(e) => dispatch(updateSize({ id: cartItem._id, size: e.target.value }))}>
                                        <option>Small</option>
                                        <option>Large</option>
                                        <option>Large</option>
                                    </select>
                                </div>
                                <div className="w-1/4">
                                    <p className="text-lg font-semibold">${cartItem.price * cartItem.cartQuantity}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between items-center mt-8">
                    </div>
                    <div className="flex items-center">
                        </div>
                        <button className="bg-red-500 text-white px-4 py-2 rounded mr-4" onClick={() => hadleClearCart()}>Clear Cart</button>

                    <button className="bg-green-500 text-white px-4 py-2 rounded" style={{marginLeft:"-10px", marginTop:"-80px"}}><Link to ="/checkout" >Proceed to Checkout</Link>  </button>
                    <div text-lg font-semibold mr-4  style={{marginLeft:"70%",fontWeight: "bold",marginTop:"-30px"}}>
                                <span>Subtotal:</span>
                                <span className="ml-2">${calculateSubtotal()}</span>
                            </div>
                </div>
                
            )}
        </div>
    );
};

export default Cart;
