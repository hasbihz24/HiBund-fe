import React from 'react';
import imglogin from "../assets/login.png";
import Backbutton from "../components/back-button";

const ChangePassword = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center gap-y-8 md:gap-x-8 p-4 md:p-8">
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 md:h-auto flex justify-center md:justify-start items-center mb-8 md:mb-0">
        <img
          className="w-full h-full object-cover rounded-2xl md:rounded-tr-none md:rounded-br-2xl"
          src={imglogin}
          alt="Login visual"
        />
      </div>

      {/* Form Section */}
      <div className="w-full md:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 relative">
        {/* Positioned Elements (Top Right) */}
        <div className="flex justify-between items-center w-full mb-8">
          <Backbutton nama="Kembali" />
          <div className="text-right text-xs md:text-sm">
            <div className="text-zinc-800">Step 3 of 3</div>
            <div className="text-pink-500 font-medium">Lupa Kata Sandi</div>
          </div>
        </div>

        {/* Main Form Content */}
        <div className="flex flex-col items-start gap-6 md:gap-8">
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
          <div className="flex flex-col gap-1 text-xs text-slate-400">
            <div>Password must be between 8 to 32 characters.</div>
            <div>Must contain an uppercase character.</div>
            <div>Must contain a number.</div>
            <div>Must contain one special character.</div>
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
