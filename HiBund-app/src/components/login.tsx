import imglogin from  "../assets/login.png"
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


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
  <div className="w-full right-6 lg:justify-start items-center">
    <img className="w-full rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]" src={imglogin} />
  </div>
  
  {/* Gap antara gambar dan form login */}
  <div className="hidden lg:block w-4"></div>

  {/* Bagian kanan (form login) */}
  <div className="relative w-full lg:w-1/2 h-auto flex flex-col justify-start items-start px-4 lg:px-8 py-8 lg:py-16 space-y-6 lg:space-y-8">
    {/* Bagian atas dengan link "Daftar" */}
    <div className="absolute top-4 right-4 lg:top-4 lg:flex gap-1">
      <div className="text-stone-400 text-sm lg:text-base font-normal font-['Inter']">Belum punya akun?</div>
      <div className="text-pink-500 text-sm lg:text-base font-bold font-['Inter'] cursor-pointer">Daftar</div>
    </div>
    
    {/* Selamat Datang */}
    <div className="w-full flex flex-col justify-start items-start mt-8 lg:mt-4 space-y-1">
      <div className="text-black text-2xl lg:text-[32px] font-medium font-['Inter']">Selamat Datang</div>
      <div className="w-full lg:w-[456px] text-stone-400 text-xs lg:text-sm font-normal font-['Inter'] leading-normal">Masukkan email dan kata sandi untuk mengakses akun Anda</div>
    </div>

  {/* Form login */}
<div className="w-full flex flex-col justify-start items-start space-y-4 lg:space-y-8 p-4 lg:p-8">
  <form className="space-y-6 w-full" onSubmit={handleSubmit}>
    <input type="hidden" name="remember" defaultValue="true" />
    <div className="rounded-md shadow-sm space-y-4">
      <div>
        <label htmlFor="email" className="block font-sans text-lg lg:text-xl font-bold">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="off"
          autoFocus
          className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
          placeholder="Masukan Username/Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password" className="block font-sans text-lg lg:text-xl font-bold mt-4 lg:mt-8">
          Kata Sandi
        </label>
        <div className="relative">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
            placeholder="Masukan kata sandi anda"
            onChange={(e) => setKatasandi(e.target.value)}
            required
          />
        </div>
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

  {/* Social login options */}
  <div className="w-full flex flex-col justify-center items-center space-y-4">
    <div className="mt-2 flex items-center w-full">
      <hr className="flex-grow border-gray-500" />
      <span className="mx-4 text-gray-500">or continue with</span>
      <hr className="flex-grow border-gray-500" />
    </div>
    <div className="flex justify-center gap-4">
      <button className="px-3 py-2 bg-white rounded-md border border-gray-200 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
          <path fill="#039be5" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path>
          <path fill="#fff" d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"></path>
        </svg>
      </button>
      <button className="px-3 py-2 bg-white rounded-md border border-gray-200 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
        </svg>
      </button>
      <button className="px-3 py-2 bg-white rounded-md border border-gray-200 inline-flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
          <path fill="#0078d4" d="M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5	V37z"></path>
          <path d="M30,37V26.901c0-1.689-0.819-2.698-2.192-2.698c-0.815,0-1.414,0.459-1.779,1.364	c-0.017,0.064-0.041,0.325-0.031,1.114L26,37h-7V18h7v1.061C27.022,18.356,28.275,18,29.738,18c4.547,0,7.261,3.093,7.261,8.274	L37,37H30z M11,37V18h3.457C12.454,18,11,16.528,11,14.499C11,12.472,12.478,11,14.514,11c2.012,0,3.445,1.431,3.486,3.479	C18,16.523,16.521,18,14.485,18H18v19H11z" opacity=".05"></path>
          <path d="M30.5,36.5v-9.599c0-1.973-1.031-3.198-2.692-3.198c-1.295,0-1.935,0.912-2.243,1.677	c-0.082,0.199-0.071,0.989-0.067,1.326L25.5,36.5h-6v-18h6v1.638c0.795-0.823,2.075-1.638,4.238-1.638	c4.233,0,6.761,2.906,6.761,7.774L36.5,36.5H30.5z M11.5,36.5v-18h6v18H11.5z M14.457,17.5c-1.713,0-2.957-1.262-2.957-3.001	c0-1.738,1.268-2.999,3.014-2.999c1.724,0,2.951,1.229,2.986,2.989c0,1.749-1.268,3.011-3.015,3.011H14.457z" opacity=".07"></path>
          <path fill="#fff" d="M12,19h5v17h-5V19z M14.485,17h-0.028C12.965,17,12,15.888,12,14.499C12,13.08,12.995,12,14.514,12	c1.521,0,2.458,1.08,2.486,2.499C17,15.887,16.035,17,14.485,17z M36,36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698	c-1.501,0-2.313,1.012-2.707,1.99C24.957,25.543,25,26.511,25,27v9h-5V19h5v2.616C25.721,20.5,26.85,19,29.738,19	c3.578,0,6.261,2.25,6.261,7.274L36,36L36,36z"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

  </div>
</div>



) ;
};

export default Login;