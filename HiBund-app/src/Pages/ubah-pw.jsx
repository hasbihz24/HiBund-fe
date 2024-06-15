import React from 'react';
import imglogin from "../assets/login.png";
import Backbutton from "../components/back-button";

const ChangePassword = () => {
    
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center relative">
      {/* Image Section */}
      <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 h-64 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
        <img
          className="w-full h-full object-cover rounded-tr-2xl rounded-br-2xl"
          src={imglogin}
          alt="Login visual"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 bg-white relative">
        {/* Positioned Elements (Top Right) */}
        <div className="flex justify-between items-center w-full absolute top-4 right-4 md:top-8 md:right-8 px-4 md:px-8">
          <Backbutton nama="Kembali" />
          <div className="text-right text-xs md:text-sm">
            <div className="text-zinc-800">Step 3 of 3</div>
            <div className="text-pink-500 font-medium">Lupa Kata Sandi</div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="flex flex-col items-start gap-6 md:gap-12 mt-20 md:mt-0">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-3xl font-medium text-black">Buat kata sandi baru</h2>
            <p className="text-sm md:text-base text-neutral-700/50 mt-1">
              Masukkan kata sandi baru untuk akun Anda.
            </p>
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-neutral-900 text-base font-normal" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 bg-slate-100 rounded-xl w-full outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Masukkan email anda"
            />
          </div>

          {/* Password Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-neutral-900 text-base font-normal" htmlFor="password">Kata Sandi</label>
            <input
              type="password"
              id="password"
              className="px-4 py-3 bg-slate-100 rounded-xl w-full outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Masukkan kata sandi anda"
            />
          </div>

          {/* Password Requirements */}
          <div className="flex flex-col gap-1">
            <div className="text-slate-400 text-xs">Password must be between 8 to 32 characters.</div>
            <div className="text-slate-400 text-xs">Must contain an uppercase character.</div>
            <div className="text-slate-400 text-xs">Must contain a number.</div>
            <div className="text-slate-400 text-xs">Must contain one special character.</div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-pink-500 text-white text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150"
          >
            Ubah Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
