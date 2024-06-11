import imglogin from  "../assets/login.png"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';



const Login = () => {
  const [email, setEmail] = useState('');
  const [Katasandi, setKatasandi] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: submit login form
    console.log('Email:', email);
    console.log('Kata sandi:', Katasandi);
  }


   
return (
  <div className="min-h-screen flex flex-col lg:flex-row bg-white">
  {/* Bagian kiri (gambar) */}
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-start items-center">
    <img className="w-full h-full lg:w-auto lg:h-[820px] max-w-full max-h-full object-cover rounded-tr-2xl lg:rounded-tr-15 lg:rounded-br-[15px]" src={imglogin} />
  </div>
  
  {/* Gap antara gambar dan form login */}
  <div className="hidden lg:block w-6"></div>

  {/* Bagian kanan (form login) */}
  <div className="relative w-full lg:w-1/2 h-auto flex flex-col justify-center items-start px-4 lg:px-8 py-8 lg:py-16 space-y-6 lg:space-y-8">
    <div className="absolute top-4 right-4 lg:top-10 lg:right-2 flex gap-1">
      <div className="text-stone-400 text-sm lg:text-base font-normal font-['Inter']">Belum punya akun?</div>
      <div className="text-pink-500 text-sm lg:text-base font-bold font-['Inter'] cursor-pointer">Daftar</div>
    </div>
    
    <div className="w-full flex flex-col justify-start items-start space-y-4 lg:space-y-8">
      <div className="flex flex-col justify-start items-start space-y-1">
        <div className="text-black text-2xl lg:text-[32px] font-medium font-['Inter']">Selamat Datang</div>
        <div className="w-full lg:w-[456px] text-stone-400 text-xs lg:text-sm font-normal font-['Inter'] leading-normal">Masukkan email dan kata sandi untuk mengakses akun Anda</div>
      </div>
      <form className="space-y-6 w-full" onSubmit={handleSubmit}>
        <input type="hidden" name="remember" defaultValue="true" />
        <div className="rounded-md shadow-sm space-y-4">
          <div>
            <h3 className="block font-sans text-lg lg:text-xl font-bold">Email</h3>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="off"
              autoFocus
              className="px-4 py-4 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
              placeholder="Masukan Username/Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <h3 className="mt-4 lg:mt-8 block font-sans text-lg lg:text-xl font-bold">Kata Sandi</h3>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              className="px-4 py-4 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
              placeholder="Masukan kata sandi anda"
              onChange={(e) => setKatasandi(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label
              htmlFor="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Ingatkan saya
            </label>
          </div>
          <div className="text-sm mt-2 lg:mt-0">
            <a
              href="#"
              className="font-medium text-pink-500 hover:underline"
            >
              Lupa Kata Sandi
            </a>
          </div>
        </div>
        <div>
          <button
            type="submit"
            className="bg-pink-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

) 
};

export default Login;