// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { clearCart } from '../features/cartSlice';

// const Checkout = () => {
//   const cartItems = useSelector((state) => state.cart.cartItem);
//   const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
//   const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
//   const dispatch = useDispatch();

//   const handleFinalizePurchase = () => {
//     dispatch(clearCart());
//     // Optionally, redirect to a confirmation page or process the purchase
//   };

//   return (
//     <div style={{marginTop:"150px"}}>
//         <ol className="items-center sm:flex" style={{width:"90%" ,marginLeft:"100px"}}>
//     <li className="relative mb-6 sm:mb-0">
//         <div className="flex items-center">
//             <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 ">
//                 <svg className=" ">
//                     <path d=" "/>
//                 </svg>
//             </div>
//             <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 "></div>
//         </div>
//         <div className="mt-3 sm:pe-8">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
//             <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Cart</time>
//             <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
//         </div>
//     </li>
//     <li className="relative mb-6 sm:mb-0">
//         <div className="flex items-center">
//             <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-green-400 sm:ring-8 ">
//                 <svg className="">
//                     <path d=" "/>
//                 </svg>
//             </div>
//             <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div className="mt-3 sm:pe-8">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
//             <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Checkout</time>
//             <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
//         </div>
//     </li>
//     <li className="relative mb-6 sm:mb-0">
//         <div className="flex items-center">
//             <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 ">
//                 <svg className=" ">
//                     <path d=""/>
//                 </svg>
//             </div>
//             <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
//         </div>
//         <div className="mt-3 sm:pe-8">
//             <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
//             <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Complete</time>
//             <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
//         </div>
//     </li>
// </ol>

// <h1 className="text-3xl text-black font-bold mb-8" style={{marginTop:"60px", marginLeft:"200px"}}> checkout</h1>
//     <div className="container mx-auto p-6" style={{marginTop:"50px"}}>
        
//       <table className="w-full table-auto">
//         <thead>
//           <tr>
//             <th className="px-4 py-2">Item</th>
//             <th className="px-4 py-2">Quantity</th>
//             <th className="px-4 py-2">Price</th>
//             <th className="px-4 py-2">Total</th>
//           </tr>
//         </thead>
//         <tbody>
//           {cartItems.map((item) => (
//             <tr key={item._id}>
//               <td className="border px-4 py-2">{item.name}</td>
//               <td className="border px-4 py-2">{item.cartQuantity}</td>
//               <td className="border px-4 py-2">${item.price}</td>
//               <td className="border px-4 py-2">${item.price * item.cartQuantity}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       <div className="flex justify-between items-center mt-4">
//         <div>
//           <p className="text-lg font-semibold">Total Quantity: {cartTotalQuantity}</p>
//           <p className="text-lg font-semibold">Total Amount: ${cartTotalAmount}</p>
//         </div>
//         <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFinalizePurchase}>
//           Finalize Purchase
//         </button>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Checkout;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../features/cartSlice';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Checkout = () => {
 const cartItems = useSelector((state) => state.cart.cartItem);
 const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
 const cartTotalQuantity = useSelector((state) => state.cart.cartTotalQuantity);
 const dispatch = useDispatch();
 const handleFinalizePurchase = () => {
    dispatch(clearCart());
    // Optionally, redirect to a confirmation page or process the purchase
 };

 const downloadPDF = () => {
    const doc = new jsPDF();
    const tableColumn = ["Item", "Quantity", "Price", "Total"];
    const tableRows = [];

    // Prepare table data
    cartItems.forEach(item => {
      tableRows.push([item.name, item.cartQuantity, `${item.price}`, `${item.price * item.cartQuantity}`]);
    });

    // Add table to PDF
    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      styles: { fillColor: [220, 220, 220] },
      margin: { top: 20 },
    });

    // Save the PDF with a name
    doc.save("checkout.pdf");
 };

 return (
    <div style={{marginTop:"150px"}}>
       <ol className="items-center sm:flex" style={{width:"90%" ,marginLeft:"100px"}}>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 ">
                <svg className=" ">
                    <path d=" "/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700 "></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Cart</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-green-400 sm:ring-8 ">
                <svg className="">
                    <path d=" "/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Checkout</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li className="relative mb-6 sm:mb-0">
        <div className="flex items-center">
            <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 ">
                <svg className=" ">
                    <path d=""/>
                </svg>
            </div>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div className="mt-3 sm:pe-8">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white"></h3>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Complete</time>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol>

<h1 className="text-3xl text-black font-bold mb-8" style={{marginTop:"60px", marginLeft:"200px"}}> checkout</h1>
    <div className="container mx-auto p-6" style={{marginTop:"50px"}}>
        
   
      <table className="w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Item</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Price</th>
            <th className="px-4 py-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item._id}>
              <td className="border px-4 py-2">{item.name}</td>
              <td className="border px-4 py-2">{item.cartQuantity}</td>
              <td className="border px-4 py-2">${item.price}</td>
              <td className="border px-4 py-2">${item.price * item.cartQuantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <p className="text-lg font-semibold">Total Quantity: {cartTotalQuantity}</p>
          <p className="text-lg font-semibold">Total Amount: ${cartTotalAmount}</p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFinalizePurchase}>
          Finalize Purchase
        </button>
      </div>
    </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4" onClick={downloadPDF}>
        Download as PDF
      </button>
    </div>
 );
};

export default Checkout;
