import React from 'react';
import illustration from '../component/images/23.svg'; // Adjust the path as necessary
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="not-found flex flex-col items-center justify-center h-screen bg-gray-100">
            <h2 className="text-4xl font-bold text-gray-1900">404</h2>
            <img className="w-64 h-64 mt-8" src={illustration} alt="Description" />
            <p className="text-lg text-gray-600 mt-4">Whoops, that page is gone.</p>
            <div className="mt-8">
                <Link to="/" className="flex items-center text-blue-500 hover:text-blue-700">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"/>
                    </svg>
                    <span className="ml-2">Go Home</span>
                </Link> 
            </div>
        </div>
    );
};

export default NotFound;
