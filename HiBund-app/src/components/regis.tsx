import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import imglogin from "../assets/login.png"; // Sesuaikan path dengan benar

// Definisikan tipe untuk state register
interface RegisterValues {
  nama: string;
  email: string;
  no_hp: string;
  katasandi: string;
}

interface Errors {
  [key: string]: string;
}

const Register: React.FC = () => {
  //const navigate = useNavigate();
  
  const [values, setValues] = useState<RegisterValues>({
    nama: '',
    email: '',
    no_hp: '',
    katasandi: ''
  });

  const [errors, setErrors] = useState<Errors>({});

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Tambahkan validasi atau logika pengiriman di sini
  };

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
        <form className="w-full flex flex-col gap-6">
          <div>
            <label className="text-base font-normal text-neutral-900">Nama Pengguna</label>
            <input
              type="text"
              placeholder="Nama pengguna"
              className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
              required
            />
          </div>
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
            <label className="text-base font-normal text-neutral-900">No. Hp</label>
            <input
              type="tel"
              placeholder="Masukkan nomor telepon anda"
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
          <p className="text-base text-pink-500 cursor-pointer">Masuk</p>
        </div>
      </div>
    </div>
  </div>
  
  );  
};

export default Register;
