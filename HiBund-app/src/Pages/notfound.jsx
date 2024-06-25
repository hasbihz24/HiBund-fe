import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <h1 className="text-6xl font-bold text-pink-500">404</h1>
            <p className="text-xl mt-4">Oops! The page you are looking for does not exist.</p>
            <Link to="/" className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600">
                Go back to Home
            </Link>
        </div>
    );
}

export default NotFound;
