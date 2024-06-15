import React, { useState } from 'react';
import imglogin from  "../assets/login.png"
//import Backbutton from "../components/backbutton";
import {Link} from 'react-router-dom';
import Backbutton from '../components/back-button';
//import validation from "../components/loginValidation";
//import { useContext } from 'react';

const Register = () => {
    const[values, setValues] = useState({
        nama: '',
        email: '',
        phoneNumber: '',
        password: ''
    })

    const[errors, setError] = useState({})

    const handleInput = (e) => {
        setValues(prev => ({...prev,[e.target.name]: [e.target.value]}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(Validation(values));
     }

     return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
        {/* Bagian gambar */}
        <div className="w-full  md:w-1/2 lg:w-full xl:w-1/2 h-96 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
          <img className="w-full h-dvh rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]" src={imglogin} alt="Login visual" />
        </div>
      
        {/* Gap antara gambar dan form */}
        <div className="hidden lg:block w-4"></div>
      
        {/* Bagian form */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 bg-white">
          {/* Navigasi Kembali dan Status Langkah */}
          <div className="flex justify-between items-center">
          <div>
                {/* Simbol panah kiri untuk kembali */}
                <Backbutton nama="Kembali"></Backbutton>
            </div>
            
            <div className="text-right text-xs">
              <div className="text-zinc-800">Step 1 of 2</div>
              <div className="text-pink-500 font-medium">Signup</div>
            </div>
          </div>
      
          {/* Informasi dan Form */}
          <div className="flex flex-col items-start gap-4">
            <div>
              <h2 className="text-2xl md:text-3xl font-medium text-black">Daftarkan akun Anda</h2>
              <p className="text-sm text-neutral-700/50 mt-1">Isi detail di bawah ini untuk mengirimkan akun pendaftaran</p>
            </div>
      
            {/* Form Input Fields */}
            <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
              <div>
                <label className="text-base font-normal text-neutral-900">Nama Pengguna</label>
                <input
                  type="text"
                  placeholder="Nama pengguna"
                  className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                  onChange={handleInput}
                  required />
                 {errors.nama && <span className='text-red-600'>{errors.nama}</span>}
              </div>
              <div>
                <label className="text-base font-normal text-neutral-900">Email</label>
                <input
                  type="email"
                  placeholder="Masukkan email anda"
                  className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                  onChange={handleInput}
                  required  />
                  {errors.email && <span className='text-red-600'>{errors.email}</span>}
              </div>
              <div>
                <label className="text-base font-normal text-neutral-900">No. Hp</label>
                <input
                  type="tel"
                  placeholder="Masukkan nomor telepon anda"
                  className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                  onChange={handleInput}
                  required />
                 {errors.phoneNumber && <span className='text-red-600'>{errors.phoneNumber}</span>}
              </div>
              <div>
                <label className="text-base font-normal text-neutral-900">Kata Sandi</label>
                <input
                  type="password"
                  placeholder="Masukkan kata sandi anda"
                  className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                  onChange={handleInput}
                  required  />
                 {errors.password && <span className='text-red-600'>{errors.password}</span>}
              </div>
              <div className="flex items-center ml-4">
                <span className="text-sm text-neutral-700">
                  Dengan masuk, Anda menyetujui Syarat & Ketentuan dan Kebijakan Privasi kami.*
                </span>
              </div>
              <button type="submit" className="bg-pink-500 text-white text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150">Lanjutkan</button>
            </form>
      
            {/* Sudah punya akun */}
            <div className="flex justify-center gap-2 lg:text-center">
              <p className="text-base text-stone-500">Sudah memiliki akun?</p>
              <Link to= "/" className="text-base text-pink-500 cursor-pointer">Masuk</Link>
            </div>
          </div>
        </div>
      </div>
     );
};

export default Register;