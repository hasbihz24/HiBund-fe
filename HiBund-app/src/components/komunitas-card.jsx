import React from 'react';
import user1 from "../../public/user1.png";
import logo from "../../public/logoo.png";

const Tweet = ({ name, username, tweetText }) => {
  return (
    <div className="w-full md:w-80 h-auto md:h-72 relative bg-gray-50 rounded-2xl border border-gray-200 mt-5 p-4 transform transition-transform duration-300 hover:scale-105 md:p-10">
      <div className="flex items-center mb-3">
        <img
          src={user1}
          alt="Profile Picture"
          className="w-10 h-10 rounded-full ml-3 mr-2"
        />
        <div className="flex-grow"> {/* Membuat konten teks dan username responsive */}
          <h4 className="font-bold text-gray-900">{name}</h4>
          <span className="text-gray-500">@{username}</span>
        </div>
        <div className="w-12 h-12 p-2 bg-pink-200 rounded-xl flex items-center justify-center ml-3 md:ml-auto">
          <img className="w-9 h-9 md:w-10 md:h-10" src={logo} alt="Logo" />
        </div>
      </div>
      <p className="text-gray-700 text-left">{tweetText}</p>
     
    </div>
  );
};

export default Tweet;
