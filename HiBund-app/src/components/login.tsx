import imglogin from  "../assets/login.png"
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';



const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
      })
    
      const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues(prev => ({ ...prev, [e.target.name]: [e.target.value] }))
      }
    
      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
      }


   
return (
    <div className="w-[1350px] h-[800px] relative bg-white">
    <div className="left-[900px] top-[20px] absolute justify-start items-start gap-1 inline-flex">
      <div className="text-stone-400 text-x font-normal font-['Inter']">Belum punya akun?</div>
      <div className="text-pink-500 text-x font-bold font-['Inter']">Daftar</div>
    </div>

    <div className="left-[600px] top-[100px] absolute flex-col justify-start items-start gap-8 inline-flex">
    <div className="flex-col justify-start items-start gap-[50px] flex">
      <div className="flex-col justify-start items-start gap-px flex">
        <div className="text-black text-[32px] font-medium font-['Inter']">Selamat Datang</div>
        <div className="w-[456px] text-stone-400 text-sm font-normal font-['Inter'] leading-normal">Masukkan email dan kata sandi untuk mengakses akun Anda</div>
      </div>

      <form className="mt-8 space-y-6 lg:w-full" onSubmit={handleSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Email</h3>
                <input
                  id="email"
                  name="email"
                  type="text"
                  autoComplete="off"
                  autoFocus
                  className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan Username/Email"
                  onChange={handleInput} required />
              
              </div>
              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold ">Password</h3>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="off"
                  autoFocus
                  className="px-4 py-4 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan Password"
                  onChange={handleInput} required />
             
              </div>
            </div>
           

            <div>
              <button
                type="submit"
                className='bg-red-700 text-white text-sm font-bold px-6 py-3 rounded-xl shadow hover:shadow-lg hover:opacity-70 outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150'
              >
                Login
              </button>
            </div>
          </form>
     
    </div>

  
  </div>

    <img className="w-[775px] h-[827px] left-[-330px] top-[-18px] absolute rounded-tr-[15px] rounded-br-[15px]" src={imglogin}/>
  </div>
)

};

export default Login;