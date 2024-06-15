import React from 'react';
import imglogin from "../assets/login.png";
import Backbutton from "../components/back-button";

const Forget = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center relative">
      {/* Image section */}
      <div className="w-full md:w-1/2 lg:w-full xl:w-1/2 h-96 md:h-auto lg:h-full flex justify-center lg:justify-start items-center">
        <img
          className="w-full h-dvh rounded-2xl lg:rounded-tr-none lg:rounded-br-[15px]"
          src={imglogin}
          alt="Login visual"
        />
      </div>

      {/* Form section */}
      <div className="w-full md:w-1/2 h-full px-4 py-8 md:px-12 md:py-16 flex flex-col gap-8 bg-white">
        {/* Positioned elements */}
        <div className="flex justify-between items-center w-full mb-8">
          <Backbutton nama="Kembali" />
          <div className="text-right text-xs md:text-sm">
            <div className="text-zinc-800">Step 1 of 3</div>
            <div className="text-pink-500 font-medium">Lupa Kata Sandi</div>
          </div>
        </div>

        {/* Information and form */}
        <div className="flex flex-col items-start gap-6 md:gap-12">
          <div className="flex flex-col gap-1">
            <h2 className="text-xl md:text-3xl font-medium text-black">Lupa kata sandi?</h2>
            <p className="text-sm md:text-base text-neutral-700/50 mt-1">
              Masukkan email akun Anda dan kami akan mengirimkan email untuk mengatur ulang kata sandi Anda.
            </p>
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2 w-full">
            <label className="text-neutral-900 text-base font-normal" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="px-4 py-3 bg-slate-100 rounded-xl  outline-none w-full"
              placeholder="Masukkan email anda"
              required
            />
          </div>

          {/* Continue button */}
          <button
            type="submit"
            className="bg-pink-500 text-white text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150"
          >
            Lanjutkan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Forget;
