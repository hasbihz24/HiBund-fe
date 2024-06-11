import imglogin from "../assets/login.png";
import React, { useState } from 'react';

const lupaPassword = () => {

    return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Bagian gambar */}
      <div className="w-full  md:w-1/2 lg:w-full xl:w-1/2 h-96 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
        <img className="w-full h-dvh rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]" src={imglogin} alt="Login visual" />
      </div>
  
      {/* Gap antara gambar dan form */}
      <div className="hidden lg:block w-4"></div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full max-w-md p-4 bg-white rounded-lg shadow-lg mx-auto my-8 md:my-0">
  {/* Kembali */}
  <div className="flex items-center gap-1.5 mb-4 md:mb-0">
    <div className="w-4 h-4 relative">
      {/* Simbol panah kiri untuk kembali */}
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    </div>
    <div className="text-zinc-800 text-sm font-normal font-['Inter'] leading-none">Kembali</div>
  </div>

  {/* Step Information */}
  <div className="text-right text-xs flex flex-col items-end">
    <div className="text-zinc-800">Step 1 of 3</div>
    <div className="text-pink-500 font-medium">Lupa kata sandi</div>
  </div>

  {/* Main Content */}
  <div className="w-full flex flex-col justify-start items-start gap-6 mt-4 md:mt-0">
    <div className="flex flex-col justify-start items-start gap-1.5">
      <div className="text-black text-2xl md:text-3xl font-medium font-['Inter']">Lupa kata sandi?</div>
      <div className="text-neutral-700/50 text-sm font-normal font-['Inter'] leading-normal">
        Masukkan email akun Anda dan kami akan mengirimkan email untuk mengatur ulang kata sandi Anda.
      </div>
    </div>

    {/* Email Input */}
    <div className="flex flex-col justify-center items-start gap-2 w-full">
      <label htmlFor="email" className="text-neutral-900 text-base font-normal font-['Inter'] leading-normal">Email</label>
      <input 
        type="email" 
        id="email" 
        placeholder="Masukkan email anda" 
        className="w-full px-4 py-3 bg-slate-100 rounded-xl text-neutral-900 focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
    </div>

    {/* Submit Button */}
    <button className="w-full px-4 py-3 bg-pink-500 rounded-md text-white text-sm font-normal font-['Inter'] leading-none shadow hover:shadow-lg transition duration-150 ease-linear">
      Lanjutkan
    </button>
  </div>
</div>

      </div>
    );
};

export default lupaPassword;