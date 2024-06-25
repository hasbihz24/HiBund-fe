// src/components/Loading.js

import React from 'react';

function Loading() {
    return (
        <div className="flex justify-center items-center space-x-3">
            <div className="spinner-border animate-spin inline-block w-12 h-12 border-4 border-t-transparent border-pink-500 rounded-full" role="status">
                <span className="sr-only">Loading</span>
            </div>
            <span className="text-gray-300 text-lg font-medium">Loading...</span>
        </div>
    );
}

export default Loading;
