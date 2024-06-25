import React from 'react';
import user1 from "../../public/user1.png";
import logo from "../../public/logoo.png";

const Tweet = ({ name, username, tweetText }) => {
  return (
    <div className="w-full md:max-w-md h-auto md:h-72 bg-gray-50 rounded-2xl border border-gray-200 mt-5 p-4 transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center mb-3">
        <img
          src={user1}
          alt="Profile Picture"
          className="w-10 h-10 rounded-full mr-2"
        />
        <div className="flex flex-col flex-grow ml-2 md:ml-4"> {/* Membuat konten teks dan username responsive */}
          <h4 className="font-bold text-gray-900 text-sm md:text-lg">{name}</h4>
          <span className="text-gray-500 text-xs md:text-sm">@{username}</span>
        </div>
        <div className="w-10 h-10 bg-pink-200 rounded-xl flex items-center justify-center ml-auto">
          <img className="w-6 h-6 md:w-8 md:h-8" src={logo} alt="Logo" />
        </div>
      </div>
      <p className="text-gray-700 text-sm md:text-base">{tweetText}</p>
    </div>
  );
};

export default Tweet;
