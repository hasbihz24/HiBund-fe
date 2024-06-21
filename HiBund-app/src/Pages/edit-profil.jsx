import React, { useState } from "react";
import imgprofil from "../../public/profil.png";

function EditProfile() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Send form data to server
    console.log("Form submitted:", name, title, email, phone, bio);
  };

  return (
    <div className="bg-white min-h-screen">
      <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        
        {/* Profil */}
        <section className="flex flex-col items-center mb-12">
          <div className="flex flex-col items-center text-center">
            <img
              className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-4 bg-gray-200 border-gray-200"
              src={imgprofil}
              alt="profile"
            />
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold my-2">
              Dr. Bima Karunia Fajar S, Kep. S, Kom.
            </h2>
            <p className="text-gray-500 mb-4">Pakar Psikologi Anak</p>
            <div className="flex space-x-2 sm:space-x-4 md:space-x-8 mb-4">
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">21</span>
                <p className="text-gray-500">Postingan</p>
              </div>
              <div className="hidden sm:block border-r border-gray-300 h-12"></div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">238</span>
                <p className="text-gray-500">Pengikut</p>
              </div>
              <div className="hidden sm:block border-r border-gray-300 h-12"></div>
              <div className="flex flex-col items-center">
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">101</span>
                <p className="text-gray-500">Mengikuti</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-3 md:space-x-4">
              <button className="bg-slate-50 border border-black hover:bg-pink-500 text-black font-bold py-1 px-2 sm:py-2 sm:px-4 rounded">
                Unggah Profil
              </button>
              <button className="bg-slate-50 border border-black hover:bg-pink-500 text-black font-bold py-1 px-2 sm:py-2 sm:px-4 rounded">
                Edit Foto
              </button>
              <button className="bg-slate-50 border border-black hover:bg-pink-500 text-black font-bold py-1 px-2 sm:py-2 sm:px-4 rounded">
                Batalkan
              </button>
            </div>
          </div>
        </section>

        {/* Form Edit Profil */}
        <h1 className="text-xl sm:text-2xl font-bold mb-8">Basic Info</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Nama Pengguna
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete='off'
              autoFocus
              value={name}
              placeholder="Nama Pengguna"
              onChange={(e) => setName(e.target.value)}
              className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
              required 
            />
          </div>

          <div>
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              autoComplete='off'
              value={title}
              placeholder="Masukkan Role Anda"
              onChange={(e) => setTitle(e.target.value)}
              className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
              required 
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete='off'
              value={email}
              placeholder="Masukkan email Anda"
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
              required 
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              No. HP
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete='off'
              value={phone}
              placeholder="Masukkan nomor telepon Anda"
              onChange={(e) => setPhone(e.target.value)}
              className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
              required 
            />
          </div>

          <div>
            <label
              htmlFor="bio"
              className="block text-sm font-medium text-gray-700"
            >
              Bio
            </label>
            <textarea
              id="bio"
              name="bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              placeholder="Ceritakan tentang diri Anda"
              className="px-4 py-3 lg:py-4 placeholder-gray-400 bg-white rounded-xl border border-gray-300 text-sm lg:text-base shadow focus:outline-none focus:ring focus:ring-gray-200 focus:shadow-outline w-full sm:text-sm"
              required 
            />
          </div>

        </form>
      </main>
    </div>
  );
}

export default EditProfile;
