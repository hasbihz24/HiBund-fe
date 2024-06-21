import React, { useState } from 'react';
import imglogin from "../assets/login.png";
import BackButton from '../components/back-button'; 
import { useNavigate } from 'react-router-dom';

const Forget = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const sendmail = {
        email: email
      };
      // Simulasi pengiriman email dengan respons "Email Terdaftar"
      const message = await send(sendmail); // blm selesai

      if (message === "Email Terdaftar") {
        navigate("/otp", { state: { sendmail } });
      } else {
        alert(message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row rounded-2xl p-5 items-center md:items-stretch gap-y-8 md:gap-x-8 bg-white shadow-lg">
        
        {/* Bagian Image */}
        <div className="md:w-1/2 flex justify-center">
          <img className="rounded-2xl max-w-full h-auto md:max-w-1/2" src={imglogin} alt="Login visual" />
        </div>
        
        {/* Bagian Form */}
        <div className="w-full md:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-4 md:gap-8 bg-white">
          
          {/* Navigasi Kembali dan Status Langkah */}
          <div className="flex justify-between items-center">
            <div>
              {/* Tombol Kembali */}
              <BackButton nama="Kembali" />
            </div>
            
            <div className="text-right text-xs">
              <div className="text-zinc-800">Step 1 of 3</div>
              <div className="text-pink-500 font-medium">Lupa kata sandi</div>
            </div>
          </div>
          
          {/* Judul dan Deskripsi */}
          <div className="mt-4 md:mt-8">
            <h2 className="text-black text-2xl lg:text-3xl font-bold">Lupa Kata Sandi?</h2>
            <p className="text-stone-400 text-sm leading-normal mt-2">
              Masukkan email akun Anda dan kami akan mengirimkan email untuk mengatur ulang kata sandi Anda.
            </p>
          </div>
          
          {/* Form */}
          <form className="flex flex-col gap-4 mt-2 md:mt-8" onSubmit={handleVerify}>
            
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Masukkan email anda"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            {/* Submit Button */}
            <button
              type="submit"
              className="bg-pink-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150 mt-2 md:mt-4"
            >
              Lanjutkan
            </button>
          
          </form>
        
        </div>
      
      </div>
    </section>
  );
};

export default Forget;
