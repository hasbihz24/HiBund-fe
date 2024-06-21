import React, { useState } from 'react';
import imglogin from "../assets/login.png";
import BackButton from '../components/back-button';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidations, setPasswordValidations] = useState({
    length: false,
    uppercase: false,
    number: false,
    specialChar: false
  });

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    // Perform validations
    const lengthValid = value.length >= 8 && value.length <= 32;
    const uppercaseValid = /[A-Z]/.test(value);
    const numberValid = /[0-9]/.test(value);
    const specialCharValid = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    setPasswordValidations({
      length: lengthValid,
      uppercase: uppercaseValid,
      number: numberValid,
      specialChar: specialCharValid
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row rounded-2xl p-5 items-center md:items-stretch gap-y-8 md:gap-x-8 bg-white shadow-lg">

        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img className="rounded-2xl max-w-full h-auto md:max-w-1/2" src={imglogin} alt="Login visual" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-4 md:gap-8 bg-white">
          {/* Back Navigation and Step Status */}
          <div className="flex justify-between items-center">
            <div>
              <BackButton nama="Kembali" />
            </div>
            <div className="text-right text-xs">
              <div className="text-zinc-800">Step 3 of 3</div>
              <div className="text-pink-500 font-medium">Lupa Kata Sandi</div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mt-4 md:mt-8">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold">Buat Kata Sandi Baru</h2>
            <p className="text-stone-400 text-xs leading-normal mt-2">
              Masukkan kata sandi baru untuk akun Anda.
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 mt-2 md:mt-8">
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
                required
              />
            </div>

            {/* Password Input */}
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="password" className="text-xl font-bold">Kata Sandi</label>
              <div className="relative">
                <input
                  className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  placeholder="Masukkan kata sandi anda"
                  onChange={handlePasswordChange}
                  value={password}
                  required
                />
                {/* SVG Icons for Eye and Eye Slash */}
                <div onClick={toggleShowPassword} className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
                  {showPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
                  <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                  <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                  <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="gray"
                      className="bi bi-eye"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Password Requirements */}
            <div className="flex flex-col gap-1 text-xs">
              <div className={passwordValidations.length ? 'text-pink-500' : 'text-slate-400'}>
                {passwordValidations.length ? '✓' : '◻️'} Password must be between 8 to 32 characters.
              </div>
              <div className={passwordValidations.uppercase ? 'text-pink-500' : 'text-slate-400'}>
                {passwordValidations.uppercase ? '✓' : '◻️'} Must contain an uppercase character.
              </div>
              <div className={passwordValidations.number ? 'text-pink-500' : 'text-slate-400'}>
                {passwordValidations.number ? '✓' : '◻️'} Must contain a number.
              </div>
              <div className={passwordValidations.specialChar ? 'text-pink-500' : 'text-slate-400'}>
                {passwordValidations.specialChar ? '✓' : '◻️'} Must contain one special character.
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-pink-500 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150 mt-2 md:mt-4"
            >
              Ubah Password
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ChangePassword;
