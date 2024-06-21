import React, { useState } from 'react';
import imglogin from "../assets/login.png";
import BackButton from '../components/back-button'; // Ubah import agar sesuai dengan nama file dan penempatannya
import { Link } from 'react-router-dom';
//import validation from "../components/loginValidation"; // Comment out karena belum digunakan
//import { useContext } from 'react';

const Register = () => {
    const [values, setValues] = useState({
        nama: '',
        email: '',
        phoneNumber: '',
        password: ''
    });

    const [errors, setError] = useState({});

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setError(validation(values)); // Ubah menjadi lowercase sesuai dengan penamaan fungsi
    };

    return (
        <section className="min-h-screen flex items-center justify-center">
            <div className="flex flex-col md:flex-row rounded-2xl p-5 items-center md:items-stretch gap-y-8 md:gap-x-8 bg-white shadow-lg">
            
            {/* Image Section */}
            <div className="md:w-1/2 flex justify-center">
            <img className="rounded-2xl max-w-full h-auto md:max-w-3/4" src={imglogin} alt="Login visual" />
            </div>

                {/* Bagian form */}
                <div className="w-full md:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-4 md:gap-8 bg-white">
                    {/* Navigasi Kembali dan Status Langkah */}
                    <div className="flex justify-between items-center">
                        <div>
                            {/* Simbol panah kiri untuk kembali */}
                            <BackButton nama="Kembali" />
                        </div>

                        <div className="text-right text-xs">
                            <div className="text-zinc-800">Step 1 of 2</div>
                            <div className="text-pink-500 font-medium">Signup</div>
                        </div>
                    </div>

                    {/* Judul dan Deskripsi */}
                    <div className="mt-4 md:mt-8">
                        <h2 className="text-black text-2xl lg:text-[32px] font-bold">Daftarkan akun anda</h2>
                        <p className="text-stone-400 text-xs leading-normal mt-2">
                            Isi detail di bawah ini untuk mengirimkan akun pendaftaran.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2 md:mt-8">
                        {/* nama Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="nama" className="text-xl font-bold mt-2">Nama Pengguna</label>
                            <input
                                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                                type="text"
                                id="nama"
                                name="nama"
                                autoComplete="off"
                                autoFocus
                                placeholder="Nama Pengguna"
                                value={values.nama}
                                onChange={handleInput}
                                required />
                            {errors.nama && <span className='text-red-600'>{errors.nama}</span>}
                        </div>

                        {/* Email Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-xl font-bold">Email</label>
                            <input
                                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="off"
                                placeholder="Masukkan email anda"
                                value={values.email}
                                onChange={handleInput}
                                required />
                            {errors.email && <span className='text-red-600'>{errors.email}</span>}
                        </div>

                        {/* no hp input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phoneNumber" className="text-xl font-bold">Nomor Telepon</label>
                            <input
                                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                                type="tel"
                                id="phoneNumber"
                                name="phoneNumber"
                                autoComplete="off"
                                placeholder="Masukkan nomor telepon anda"
                                value={values.phoneNumber}
                                onChange={handleInput}
                                required />
                            {errors.phoneNumber && <span className='text-red-600'>{errors.phoneNumber}</span>}
                        </div>

                        {/* Password Input */}
                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-xl font-bold">Kata Sandi</label>
                            <div className="relative">
                                <input
                                    className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                                    type="password"
                                    id="password"
                                    name="password"
                                    autoComplete='off'
                                    placeholder="Masukkan kata sandi anda"
                                    value={values.password}
                                    onChange={handleInput}
                                    required />
                                {errors.password && <span className='text-red-600'>{errors.password}</span>}

                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
                                    <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                                    <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Persetujuan */}
                        <div className="flex items-center ml-4 text-xs text-gray-500">
                            <span>
                                Dengan masuk, Anda menyetujui <span className="underline">Syarat & Ketentuan</span> dan <span className="underline">Kebijakan Privasi</span> kami.
                            </span>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-pink-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150 mt-2 md:mt-4"
                        >
                            Lanjutkan
                        </button>

                           {/* Sudah memiliki akun? */}
                           <div className="mt-2 text-xs text-center text-gray-600">
                            Sudah memiliki akun? <Link to="/" className="text-pink-500">Masuk</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>   
    );
};

export default Register;
