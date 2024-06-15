import React, {FC, useState } from 'react';
//import { useLocation, useNavigate } from 'react-router-dom';
import imglogin from "../assets/login.png";

interface Props {}

const VerifyOTP: FC<Props> = (props): JSX.Element => {
    const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));
 
    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
        {/* Bagian gambar */}
        <div className="w-full  md:w-1/2 lg:w-full xl:w-1/2 h-96 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
      <img className="w-full h-dvh rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]" src={imglogin} alt="Login visual" />
    </div>
      
        {/* Gap antara gambar dan form */}
        <div className="hidden lg:block w-4"></div>
        <div className="w-full md:w-1/2 lg:w-1/2 mb-80 xl:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 bg-white">
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
        <div className="text-right text-xs items-center">
          <div className="text-zinc-800">Step 2 of 3</div>
          <div className="text-pink-500 font-medium">Signup</div>
        </div>
      </div>
      
          {/* Informasi dan Form */}
          <div className="flex flex-col items-start lg: gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-black">Periksa Email Anda</h2>
              <p className="text-sm text-neutral-700/50 mt-1">Kami telah mengirimkan 6 digit kode. Pastikan Anda memasukkan kode yang benar.</p>
            </div>
      
            {/* Input OTP */}
            <div className="w-full flex justify-center items-center gap-2">
              {otp.map((_, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-12 h-12 border-2 rounded-md bg-white outline-none text-center font-semibold text-xl border-gray-300 focus:border-pink-500 focus:text-gray-700 transition"
                />
              ))}
            </div>
      
            <button type="submit" className="bg-pink-500 text-white text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150">
              Lanjutkan
            </button>

            {/* Bagian "Tidak menerima kode? Kirim ulang kode" */}
            <div className="w-full md:w-auto flex flex-col justify-center items-center gap-1 px-4 md:px-0 text-center md:text-right ml-24">
            <div className="text-stone-500 text-sm md:text-xs font-normal font-['Inter']">
                Tidak menerima email apa pun? Periksa spam atau
            </div>
            <div className="text-pink-500 text-sm md:text-xs font-normal font-['Inter'] cursor-pointer">
                Coba alamat email lain
            </div>
            </div>
          </div>
        </div>
      </div>
  );
  
}

export default VerifyOTP