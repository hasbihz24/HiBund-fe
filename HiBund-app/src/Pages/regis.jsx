import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import imglogin from "../assets/login.png";
import BackButton from '../components/back-button';
import { Link } from 'react-router-dom';
import Validation from '../components/regisValidation'; 

const Register = () => {
    const [values, setValues] = useState({
        nama: '',
        email: '',
        no_tlp: '',
        password: ''
      });
    
      const [errors, setError] = useState({});
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
    
        // Validate inputs using the updated Validation function
        const validationErrors = Validation(values);
        if (Object.keys(validationErrors).some(key => validationErrors[key] !== "")) {
          setError(validationErrors);
          return;
        }
    
        setModal({
          show: true,
          success: true,
          message: 'Registrasi berhasil! Akun Anda telah dibuat.'
        });
      };
    
      const handleCloseModal = () => {
        if (modal.success) {
          navigate('/login'); // 
        } else {
          setModal({ show: false, success: false, message: '' });
          setValues({ nama: '', email: '', no_tlp: '', password: '' });
          setError({});
        }
      };

  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col md:flex-row rounded-2xl p-5 items-center md:items-stretch gap-y-8 md:gap-x-8 bg-white shadow-lg">
        
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img className="rounded-2xl max-w-full h-auto md:max-w-3/4" src={imglogin} alt="Login visual" />
        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 px-4 py-8 md:px-12 md:py-16 flex flex-col gap-4 md:gap-8 bg-white">
          {/* Navigation and Step Indicator */}
          <div className="flex justify-between items-center">
            <div>
              <BackButton nama="Kembali" />
            </div>
            <div className="text-right text-xs">
              <div className="text-zinc-800">Step 1 of 2</div>
              <div className="text-pink-500 font-medium">Signup</div>
            </div>
          </div>

          {/* Title and Description */}
          <div className="mt-4 md:mt-8">
            <h2 className="text-black text-2xl lg:text-[32px] font-bold">Daftarkan akun anda</h2>
            <p className="text-stone-400 text-xs leading-normal mt-2">
              Isi detail di bawah ini untuk mengirimkan akun pendaftaran.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2 md:mt-8">
            {/* Nama Input */}
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

            {/* Nomor Telepon Input */}
            <div className="flex flex-col gap-2">
              <label htmlFor="no_tlp" className="text-xl font-bold">Nomor Telepon</label>
              <input
                className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-black text-sm shadow focus:outline-none focus:ring focus:ring-black-200 focus:shadow-outline w-full focus:z-10 sm:text-sm"
                type="tel"
                id="no_tlp"
                name="no_tlp"
                autoComplete="off"
                placeholder="Masukkan nomor telepon anda"
                value={values.no_tlp}
                onChange={handleInput}
                required />
              {errors.no_tlp && <span className='text-red-600'>{errors.no_tlp}</span>}
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
                  autoComplete="off"
                  placeholder="Masukkan kata sandi"
                  value={values.password}
                  onChange={handleInput}
                  required />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                  <button type="button" onClick={toggleShowPassword}>
                    {showPassword ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye-slash" viewBox="0 0 16 16">
                        <path d="M13.359 11.238C14.061 10.38 14.57 9.392 14.828 8q-.086-.13-.195-.288A13.134 13.134 0 0 0 11.168 5.543C9.879 4.168 8.12 3 6 3a7 7 0 0 0-2.79.588l.77.771A6 6 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755q-.247.248-.517.486z"/>
                        <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829"/>
                        <path d="M3.35 5.47q-.27.24-.518.487A13 13 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7 7 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12z"/>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye" viewBox="0 0 16 16">
                        <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
                        <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {errors.password && <span className='text-red-600'>{errors.password}</span>}
            </div>

            {/* Terms and Conditions */}
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

            {/* Already have an account? */}
            <div className="mt-2 text-xs text-center text-gray-600">
              Sudah memiliki akun? <Link to="/login" className="text-pink-500">Masuk</Link>
            </div>
          </form>
        </div>
      </div>

     {/* Modal */}
     {modal.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-lg font-bold mb-4">{modal.success ? 'Success' : 'Error'}</h2>
            <p>{modal.message}</p>
            <button
              onClick={handleCloseModal}
              className="mt-6 bg-pink-500 text-white py-2 px-4 rounded hover:bg-pink-600 transition duration-300"
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
