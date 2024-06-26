// src/components/DokterCard.js
import React from 'react';
import logo from "../../public/logoo.png"; 

const DokterCard = ({ imgSrc, doctorName, specialist, location, rating }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 relative">
      {/* Logo in the Top-Right Corner inside the Card */}
      <div className="absolute top-2 right-2 w-10 h-10 bg-pink-200 rounded-full flex items-center justify-center">
        <img className="w-6 h-6 md:w-8 md:h-8" src={logo} alt="Logo" />
      </div>

      {/* Doctor Image below the logo */}
      <img src={imgSrc} alt="Doctor" className="w-full h-40 md:h-40 lg:h-52 object-cover rounded-md mt-12 mb-4" style={{ minHeight: '200px' }} />

      {/* Doctor Info */}
      <h3 className="text-lg font-medium mb-2">{doctorName}</h3>
      <p className="text-gray-600 mb-2">{specialist}</p>
      <p className="text-gray-600 mb-2">{location}</p>
      <div className="flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#FFD700" className="bi bi-star-fill" viewBox="0 0 16 16">
          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
        </svg>
        <span className="text-gray-600 ml-1">{rating}</span>
      </div>
    </div>
  );
};

export default DokterCard;
