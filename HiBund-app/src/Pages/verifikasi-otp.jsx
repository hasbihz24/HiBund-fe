import React, { useState, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import imglogin from "../assets/login.png";
import BackButton from '../components/back-button';
import axios from 'axios';

const Verify = () => {
  const { email } = useParams();
  const [otp, setOtp] = useState(new Array(6).fill(''));
  const inputRefs = useRef([]);
  const [modal, setModal] = useState({
    show: false,
    success: false,
    message: ''
  });


  const handleOtpChange = (element, index) => {
    if (isNaN(element.value)) return;

    // Update the OTP state
    const newOtp = [...otp];
    newOtp[index] = element.value;
    setOtp(newOtp);

    // Focus on next input box if not the last one
    if (element.value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
    console.log(otp);
  };
  const otpString = otp.join('');
  console.log(otpString);
  console.log(email);
  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' && index > 0 && !otp[index]) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(otpString)
    const email = "llo";
    try {
      // Simulate successful registration
      const response = await axios.post('http://localhost:8080/auth/verify', {
        email: email,
        authCode: otpString,
      });
      if (response.status === 200) {
        setModal({
          show: true,
          success: true,
          message: 'Registrasi berhasil! Akun Anda telah dibuat.'
        });
      }
    } catch (error) {
      setModal({
        show: true,
        success: false,
        message: 'Terjadi kesalahan saat mendaftar. Silakan coba lagi.'
      });
    }
  }

  const handleCloseModal = () => {
    if (modal.success) {
      navigate('/login');
    } else {
      setModal({ show: false, success: false, message: '' });
    }
  };

  const handleResend = () => {
    console.log(otpString)
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
              <div className="text-zinc-800">Step 2 of 2</div>
              <div className="text-pink-500 font-medium">SignUp</div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mt-4 md:mt-8">
            <h2 className="text-black text-2xl lg:text-3xl font-bold">Periksa Email Anda</h2>
            <p className="text-stone-400 text-sm lg:text-base leading-normal mt-2">
              Kami telah mengirimkan 6 digit kode. Pastikan Anda memasukkan kode yang benar.
            </p>
          </div>

          {/* OTP Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2 md:mt-8">
            <div className="flex justify-center items-center gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  type="text"
                  className="w-10 h-12 md:w-12 md:h-16 text-center text-lg md:text-3xl border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleOtpChange(e.target, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (inputRefs.current[index] = el)}
                />
              ))}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-pink-500 text-white text-sm md:text-base font-bold px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-80 outline-none focus:outline-none w-full transition duration-300 ease-in-out mt-2 md:mt-4"
            >
              Lanjutkan
            </button>

            {/* Resend OTP Section */}
            <div className="flex justify-center items-center text-center gap-2">
              <p className="text-base text-stone-500">Tidak menerima kode?</p>
              <p className="text-base text-pink-500 cursor-pointer font-bold" onClick={handleResend}>Kirim ulang kode</p>
            </div>
          </form>
        </div>
      </div>
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md">
            <h2 className="text-lg font-semibold mb-4">{modal.success ? 'Success' : 'Error'}</h2>
            <p>{modal.message}</p>
            <button
              onClick={handleCloseModal}
              className="bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Verify;
