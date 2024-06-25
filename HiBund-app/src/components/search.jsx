import React from 'react';

function Search({ value, onChange }) {
    return (
        <div className="flex justify-center mb-8">
            <input
                type="text"
                placeholder="Cari artikel atau kategori..."
                className="w-full md:w-1/2 px-4 py-3 border border-gray-300 rounded-xl shadow-sm focus:outline-none focus:ring focus:ring-gray-200"
                value={value}
                onChange={onChange}
            />
        </div>
    );
}

export default Search;
