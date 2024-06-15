import React, { useState } from 'react';
import imglogin from "../assets/login.png";
import Backbutton from '../components/back-button';


const Verify = () => {
    const [otp] = useState(Array(6).fill('')); // Initialize OTP state as an array of 6 empty strings
   

    const handleVerify = () => {
        // handle the verification logic here
        // Logic here
        // Navigate ke "UbahPassword Page"

        // Success message
        alert('Verifikasi Berhasil');
    }

    const handleResend = () => {
        // handle the resend logic here
    };

    return (
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center">
            {/* Bagian gambar */}
            <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 h-96 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
                <img className="w-full h-dvh rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]" src={imglogin} alt="Login visual" />
            </div>
            
            {/* Gap antara gambar dan form */}
            <div className="hidden lg:block w-4"></div>
            <div className="w-full md:w-1/2 lg:w-1/2 mb-80 xl:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 bg-white">
                {/* Navigasi Kembali dan Status Langkah */}
                <div className="flex justify-between items-center">
                <div>
                {/* Simbol panah kiri untuk kembali */}
                <Backbutton nama="Kembali"></Backbutton>
                </div>
                <div className="text-right text-xs items-center">
                    <div className="text-zinc-800">Step 2 of 2</div>
                     <div className="text-pink-500 font-medium">Signup</div>
                </div>
             </div>

                {/* Informasi dan Form */}
                <div className="flex flex-col items-start lg:gap-12">
                    <div>
                        <h2 className="text-2xl md:text-3xl font-medium text-black">Periksa Email Anda</h2>
                        <p className="text-sm text-neutral-700/50 mt-1">Kami telah mengirimkan 6 digit kode. Pastikan Anda memasukkan kode yang benar.</p>
                    </div>

                    {/* Input OTP */}
                    <div className="w-full flex justify-center items-center gap-2">
                        {otp.map((value, index) => (
                            <input
                                key={index}
                                type="text"
                                maxLength="1"
                                className="w-12 h-12 border-2 rounded-md bg-white outline-none text-center font-semibold text-xl border-gray-300 focus:border-pink-500 focus:text-gray-700 transition"
                                value={value}
                                onChange={(e) => handleOtpChange(e.target.value, index)}
                            />
                        ))}
                    </div>

                    <button
                        type="submit"
                        className="bg-pink-500 text-white text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150"
                        onClick={handleVerify}
                    >
                        Lanjutkan
                    </button>

                    {/* Bagian "Tidak menerima kode? Kirim ulang kode" */}
                    <div className="flex justify-center items-center text-center gap-2 lg:text-center ml-24">
                        <p className="text-base text-stone-500">Tidak menerima kode?</p>
                        <p className="text-base text-pink-500 cursor-pointer font-bold" onClick={handleResend}>Kirim ulang kode</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Verify;
