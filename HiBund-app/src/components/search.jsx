import React from 'react';

function Search({ value, onChange }) {
    return (
        <div className="flex justify-center mb-8 relative">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="absolute right-80 top-4 text-gray-400" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
            </svg>
            <input
                type="text"
                placeholder="Cari artikel atau kategori..."
                className="pl-10 w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-gray-200"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Search;
