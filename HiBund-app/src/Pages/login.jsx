import React, { useState } from 'react';
import imglogin from "../assets/login.png";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [values, setValues] = useState({
    email: '',
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
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};
    if (!values.email) {
      validationErrors.email = 'Email is required';
    }
    if (!values.password) {
      validationErrors.password = 'Password is required';
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      if (values.email === "test@example.com" && values.password === "password123") {
        setModal({
          show: true,
          success: true,
          message: 'Login berhasil! Selamat datang.'
        });
      } else {
        setModal({
          show: true,
          success: false,
          message: 'Login gagal. Periksa email dan kata sandi Anda.'
        });
      }
    }
  };

  const closeModal = () => {
    if (modal.success) {
      navigate('/');
    } else {
      setModal({
        show: false,
        success: false,
        message: ''
      });
      setValues({
        email: '',
        password: ''
      });
      setErrors({});
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row rounded-2xl p-5 items-center gap-y-8 md:gap-x-8 bg-white shadow-lg">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img className="rounded-2xl max-w-full h-auto md:max-w-1/2" src={imglogin} alt="Login visual" />
        </div>

        {/* Form Section */}
        <div className="md:w-1/2 px-8 md:px-16">
          {/* Top part with "Daftar" link */}
          <div className="absolute top-4 right-4 lg:top-4 lg:flex gap-1">
            <div className="text-sm lg:text-base font-normal text-gray-600">Belum punya akun?</div>
            <Link to="/regis" className="text-pink-500 text-sm lg:text-base font-bold cursor-pointer">Daftar</Link>
          </div>

          <h2 className="text-black text-2xl lg:text-4xl font-medium mt-8">Selamat Datang</h2>
          <p className="text-gray-600 text-sm lg:text-base leading-normal mt-2 mb-8">
            Masukkan email dan kata sandi untuk mengakses akun Anda.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {/* Email Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-lg lg:text-xl font-bold">Email</label>
              <input
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                autoFocus
                placeholder="Masukkan email Anda"
                value={values.email}
                onChange={handleInput}
                required
              />
              {errors.email && <span className='text-pink-500'>{errors.email}</span>}
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
                      <path d="M8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />
                    </svg>
                  )}
                </div>
              </div>
            </div>

            <button
              className="mt-4 bg-pink-500 hover:bg-pink-400 text-white font-bold py-3 lg:py-4 rounded-xl transition-all duration-300"
              type="submit"
            >
              Masuk
            </button>
          </form>

          <div className="mt-8 grid grid-cols-3 items-center text-gray-400">
            <hr className="border-gray-300" />
            <p className="text-center text-sm lg:text-base">or continue with</p>
            <hr className="border-gray-300" />
          </div>

          <div className="mt-8 flex gap-4 justify-center">
            {/* Facebook Icon */}
            <div className="p-2 rounded-xl bg-white hover:bg-gray-200 cursor-pointer transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#1877F2" d="M22.675 0h-21.35C.596 0 0 .592 0 1.321v21.358c0 .729.596 1.321 1.325 1.321H12.81V14.706H9.692v-3.62h3.118V8.035c0-3.093 1.892-4.782 4.655-4.782 1.325 0 2.463.099 2.795.143v3.24l-1.917.001c-1.503 0-1.794.715-1.794 1.764v2.313h3.588l-.467 3.62h-3.121V24h6.117c.729 0 1.325-.592 1.325-1.321V1.321C24 .592 23.404 0 22.675 0z" />
              </svg>
            </div>
            {/* Google Icon */}
            <div className="p-2 rounded-xl bg-white hover:bg-gray-200 cursor-pointer transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.168,29.303,4,24,4c-11.046,0-20,8.954-20,20s8.954,20,20,20c10.131,0,19.122-7.411,19.926-17h0.074V20.083z"></path>
                  <path fill="#FF3D00" d="M6.305,14.691l6.571,4.82C14.3,16.683,18.835,14,24,14c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.168,29.303,4,24,4C15.745,4,8.429,9.139,6.305,14.691z"></path>
                  <path fill="#4CAF50" d="M24,44c5.13,0,9.776-1.959,13.293-5.121l-6.01-4.96C29.962,35.801,27.086,37,24,37c-5.204,0-9.626-3.336-11.288-7.987l-6.432,5.013C8.242,39.17,15.533,44,24,44z"></path>
                  <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-1.074,3.037-3.207,5.478-5.913,6.933c0.001-0.001,0.001-0.002,0.002-0.002l6.01,4.96c-0.427,0.367,6.996-5.101,6.996-15.891c0-1.342-0.138-2.648-0.388-3.907L43.611,20.083z"></path>
                </svg>
            </div>
            {/* LinkedIn Icon */}
            <div className="p-2 rounded-xl bg-white hover:bg-gray-200 cursor-pointer transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path fill="#0077B5" d="M22.23 0H1.77C.79 0 0 .77 0 1.75v20.49C0 23.23.77 24 1.77 24H22.23c.98 0 1.77-.77 1.77-1.77V1.75C24 .77 23.23 0 22.23 0zM7.12 20.45H3.56V8.9h3.56v11.55zM5.34 7.41c-1.14 0-2.06-.93-2.06-2.06 0-1.13.92-2.06 2.06-2.06s2.06.93 2.06 2.06c0 1.13-.92 2.06-2.06 2.06zM20.45 20.45h-3.56V14.8c0-1.35-.03-3.09-1.88-3.09-1.88 0-2.17 1.47-2.17 2.99v5.75h-3.56V8.9h3.42v1.58h.05c.48-.91 1.66-1.87 3.42-1.87 3.65 0 4.33 2.4 4.33 5.53v6.31z" />
              </svg>
            </div>
          </div>

        </div>
      </div>

      {/* Modal for login feedback */}
      {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-xl shadow-lg max-w-lg mx-auto">
            <h3 className={`text-xl font-semibold ${modal.success ? 'text-green-600' : 'text-red-600'}`}>
              {modal.success ? 'Login Berhasil' : 'Login Gagal'}
            </h3>
            <p className="mt-4 text-gray-700">{modal.message}</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-pink-500 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded-xl transition-all duration-300"
            >
              {modal.success ? 'Lanjutkan' : 'Coba Lagi'}
            </button>
          </div>
        </div>
      )}

    </section>
  );
};

export default Login;
