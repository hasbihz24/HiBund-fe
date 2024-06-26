import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DokterCard from '../components/dokter-card';
import imgchild13 from "../../public/jumbo-child.png";

function Konsultasi() {
  const [location, setLocation] = useState('');
  const [specialist, setSpecialist] = useState('');
  const [doctorName, setDoctorName] = useState('');
  const [dokter, setDokter] = useState([]);
  const [dokterAll, setDokterAll] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDoctors();
    fetchAllDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/doctor', {
        params: {
          location: location,
          specialist: specialist,
          name: doctorName
        }
      });
      setDokter(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setLoading(false);
    }
  };

  const fetchAllDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:8080/auth/doctor/all')
      setDokterAll(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching doctors:', error);
      setLoading(false);
    }
  };

  // Mengambil lokasi unik dari dokter
  const uniqueLocations = Array.from(new Set(dokterAll.map((doctor) => doctor.location)));

  // Mengambil spesialisasi unik dari dokter
  const uniqueSpecialists = Array.from(new Set(dokterAll.map((doctor) => doctor.specialist)));

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSpecialistChange = (e) => {
    setSpecialist(e.target.value);
  };

  const handleDoctorNameChange = (e) => {
    setDoctorName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchDoctors();
  };

  const handleReset = () => {
    setLocation('');
    setSpecialist('');
    setDoctorName('');
  };

  return (
    <div className='bg-white'>
      <main className="container mx-auto py-12">
        <section className="flex flex-col items-center">
          <img src={imgchild13} alt="Product" className="w-full h-full object-cover" />
        </section>

        <section className="py-8">
          <h2 className="text-2xl font-bold mb-4">Rekomendasi Dokter terbaik yang cocok untuk Anda</h2>
          <form onSubmit={handleSubmit}>
            <div className="bg-white rounded-md shadow-md p-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex space-x-4">
                </div>
                <p className="text-sm text-gray-500">Need some help?</p>
              </div>
              <div className="flex">
                <div className="flex flex-col w-1/4">
                  <label htmlFor="location" className="text-sm font-bold mb-2">Location</label>
                  <div className="relative">
                    <select
                      id="location"
                      value={location}
                      onChange={handleLocationChange}
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">All Locations</option>
                      {uniqueLocations.map((location, index) => (
                        <option key={index} value={location}>
                          {location}
                        </option>
                      ))}
                      {/* Render other unique locations dynamically */}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-1/4">
                  <label htmlFor="specialist" className="text-sm font-bold mb-2">Specialist</label>
                  <div className="relative">
                    <select
                      id="specialist"
                      value={specialist}
                      onChange={handleSpecialistChange}
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    >
                      <option value="">All Specialists</option>
                      {uniqueSpecialists.map((specialist, index) => (
                        <option key={index} value={specialist}>
                          {specialist}
                        </option>
                      ))}
                      {/* Render other unique specialists dynamically */}
                    </select>
                  </div>
                </div>
                <div className="flex flex-col w-1/4">
                  <label htmlFor="doctorName" className="text-sm font-bold mb-2">Doctor Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="doctorName"
                      value={doctorName}
                      onChange={handleDoctorNameChange}
                      placeholder='Enter doctor name'
                      className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-between mt-8">
                <div>
                  <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    Search
                  </button>
                  <button type="submit" onClick={handleReset} className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md ml-4 hover:bg-gray-400">
                    Reset
                  </button>
                </div>
              </div>
            </div>
          </form>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-14">
              {dokter.length > 0 ? (
                dokter.map((doctor, index) => (
                  <DokterCard
                    key={index}
                    imgSrc={doctor.imageUrl}
                    doctorName={doctor.name}
                    specialist={doctor.specialist}
                    location={doctor.location}
                    rating={`${doctor.ratings} (${doctor.ratingCount})`}
                  />
                ))
              ) : (
                <p>No doctors found.</p>
              )}
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default Konsultasi;
