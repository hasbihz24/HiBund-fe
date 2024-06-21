import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imglogin from '../assets/login.png';
import BackButton from '../components/back-button';
import Validation from '../components/regisValidation';

const Register = () => {
  const [values, setValues] = useState({
    nama: '',
    email: '',
    no_tlp: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [modal, setModal] = useState({
    show: false,
    success: false,
    message: ''
  });

  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate inputs using the Validation function
    const validationErrors = Validation(values);
    if (Object.values(validationErrors).some((error) => error !== '')) {
      setErrors(validationErrors);
      return;
    }

    // Simulate successful registration
    setModal({
      show: true,
      success: true,
      message: 'Registrasi berhasil! Akun Anda telah dibuat.'
    });
  };

  const handleCloseModal = () => {
    if (modal.success) {
      navigate('/login');
    } else {
      setModal({ show: false, success: false, message: '' });
      setValues({ nama: '', email: '', no_tlp: '', password: '' });
      setErrors({});
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="md:flex rounded-2xl bg-white shadow-lg">
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center items-center">
          <img className="rounded-l-2xl max-w-full h-auto md:max-w-3/4" src={imglogin} alt="Login visual" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 px-6 py-8 md:px-10 md:py-12 flex flex-col gap-4 bg-white">
          {/* Navigation and Step Indicator */}
          <div className="flex justify-between items-center">
            <div>
              <BackButton nama="Kembali" />
            </div>
            <div className="text-right text-xs">
              <div className="text-gray-600">Step 1 of 2</div>
              <div className="text-pink-500 font-medium">Signup</div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mt-4 md:mt-8">
            <h2 className="text-2xl font-bold">Daftarkan akun anda</h2>
            <p className="text-sm text-gray-600 leading-relaxed mt-2">
              Isi detail di bawah ini untuk mengirimkan akun pendaftaran.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
            {/* Nama Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="nama" className="text-lg font-semibold">Nama Pengguna</label>
              <input
                type="text"
                id="nama"
                name="nama"
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
                placeholder="Nama Pengguna"
                autoComplete="off"
                autoFocus
                value={values.nama}
                onChange={handleInput}
                required
              />
              {errors.nama && <span className='text-red-600'>{errors.nama}</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg font-semibold">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
                placeholder="Masukkan email anda"
                autoComplete="off"
                value={values.email}
                onChange={handleInput}
                required
              />
              {errors.email && <span className='text-red-600'>{errors.email}</span>}
            </div>

            {/* Nomor Telepon Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="no_tlp" className="text-lg font-semibold">Nomor Telepon</label>
              <input
                type="tel"
                id="no_tlp"
                name="no_tlp"
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
                placeholder="Masukkan nomor telepon anda"
                autoComplete="off"
                value={values.no_tlp}
                onChange={handleInput}
                required
              />
              {errors.no_tlp && <span className='text-red-600'>{errors.no_tlp}</span>}
            </div>

     {/* Password Input */}
     <div className="flex flex-col gap-2 relative">
              <label htmlFor="password" className="text-lg lg:text-xl font-bold">Kata Sandi</label>
              <div className="relative">
                <input
                  className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  autoComplete='off'
                  placeholder="Masukkan kata sandi Anda"
                  onChange={handleInput}
                  value={values.password}
                  required
                />
                {errors.password && <span className='text-pink-500'>{errors.password}</span>}

                {/* SVG Icons for Eye and Eye Slash */}
                <div onClick={toggleShowPassword} className="absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer">
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye-slash" viewBox="0 0 16 16">
                      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z" />
                      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829" />
                      <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-eye" viewBox="0 0 16 16">
                      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            {/* Terms and Conditions */}
            <div className="text-xs text-gray-600 mt-2">
              Dengan mendaftar, Anda menyetujui <span className="underline">Syarat & Ketentuan</span> kami.
            </div>

            {/* Submit Button */}
            <button
              type="submit"
                    className="bg-pink-500 text-white text-sm lg:text-base font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none w-full ease-linear transition-all duration-150 mt-4"
            >
              Daftar
            </button>

            {/* Already have an account? */}
            <div className="text-xs text-center text-gray-600 mt-2">
              Sudah memiliki akun? <Link to="/login" className="text-pink-500">Masuk</Link>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
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

export default Register;
