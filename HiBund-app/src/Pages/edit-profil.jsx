import React, { useState } from 'react';
import BackButton from '../components/back-button';
import imgprofil from "../../public/profil.png";




const EditProfile= () => {
  return (
    <div className='p-4 lg:px-24'>
      <BackButton nama="Profile Pengguna"></BackButton>
      <div className='bg-white-100 flex items-center justify-center py-12 px-2 lg:justify-center'>
        <div className="max-w-md w-full space-y-4">
          <div className=' flex justify-center'>
            <div className=' relative'>
              <img src={imgprofil} alt='' className='w-24 h-24 rounded-full bg-gray-100' />
            </div>
          </div>

          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px"></div>

            <div>
              <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Nama Lengkap*</h3>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="off"
                autoFocus required
                className="px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                placeholder="Masukan Nama"
              />
            </div>

            <div>

              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">No.Telepon*</h3>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="tel"
                  autoComplete="phoneNumber"
                  required
                  className="px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan No.Telepon"
                />
              </div>


              <div>
                <h3 className="mt-8 space-y-6 block font-sans text-xl font-bold">Tentang*</h3>
                <textarea
                  id="tentang"
                  name="tentang"
                  type="text"
                  required
                  className="px-4 py-6 placeholder-gray-400 bg-white rounded-xl  border-black text-sm shadow focus:outline-black-200 focus:shadow-outline- w-full focus:z-10 sm:text-sm"
                  placeholder="Masukan Tentang Diri Anda"
                />
              </div>

              <div>
              <button type='submit' className='bg-pink-500 rounded-xl font-medium w-full text-lg text-white p-2'>Edit Profile</button>
            </div>

            </div>
          </form>
        </div>
      </div>
    </div>

  )
};

export default EditProfile;