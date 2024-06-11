import React, { useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import imglogin from "../assets/login.png"; // Sesuaikan path dengan benar


const ChangePassword = () => {
  //const location = useLocation()
  //const { email } = location.state && location.state.sendmail
  //const navigate = useNavigate()
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
      {/* Bagian gambar */}
      <div className="w-full  md:w-1/2 lg:w-full xl:w-1/2 h-96 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
        <img className="w-full h-dvh rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]" src={imglogin} alt="Login visual" />
      </div>
  
      {/* Gap antara gambar dan form */}
      <div className="hidden lg:block w-4"></div>
  
      {/* Bagian form */}
      <div className="w-full md:w-1/2 lg:w-1/2 mb-8 xl:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 bg-white">
        {/* Navigasi Kembali dan Status Langkah */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-zinc-800 text-sm font-normal font-['Inter'] cursor-pointer">
            <div className="w-4 h-4 relative">
              {/* Simbol panah kiri untuk kembali */}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
            </div>
            Kembali
          </div>
          <div className="text-right text-xs">
            <div className="text-zinc-800">Step 3 of 3</div>
            <div className="text-pink-500 font-medium">Lupa Kata Sandi</div>
          </div>
        </div>
  
        {/* Informasi dan Form */}
        <div className="flex flex-col items-start gap-4">
          <div>
            <h2 className="text-2xl md:text-3xl font-medium text-black">Buat Kata Sandi Baru</h2>
            <p className="text-sm text-neutral-700/50 mt-1">Masukkan kata sandi baru untuk akun Anda.</p>
          </div>
  
          {/* Form Input Fields */}
          <form className="w-full flex flex-col gap-6">
            <div>
              <label className="text-base font-normal text-neutral-900">Email</label>
              <input
                type="email"
                placeholder="Masukkan email anda"
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                required
              />
            </div>
            <div>
              <label className="text-base font-normal text-neutral-900">Kata Sandi</label>
              <input
                type="password"
                placeholder="Masukkan kata sandi anda"
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                required
              />
            </div>
          </form>
  
          {/* Sudah punya akun */}
          <div className="flex justify-center gap-2 lg:text-center">
            <p className="text-base text-stone-500">Sudah memiliki akun?</p>
            <p className="text-base text-pink-500 cursor-pointer">Masuk</p>
          </div>
          <button type="submit" className="bg-pink-500 text-white text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150">Ubah Password</button>
        </div>
      </div>
    </div>
  );
  
}

export default ChangePassword