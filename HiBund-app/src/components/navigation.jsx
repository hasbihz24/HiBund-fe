import { useState } from 'react';

function Navigation() {
  const [location, setLocation] = useState('New York, USA');
  const [checkIn, setCheckIn] = useState('02 January 2024');
  const [checkOut, setCheckOut] = useState('02 January 2024');
  const [guests, setGuests] = useState('2 adults, 2 children');

  const locations = ['New York, USA', 'Los Angeles, USA', 'Chicago, USA', 'Houston, USA'];

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Semua</button>
          <button className="text-pink-500 hover:underline">Anak</button>
          <button className="text-pink-500 hover:underline">Kehamilan</button>
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
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="checkIn" className="text-sm font-bold mb-2">Booking</label>
          <div className="relative">
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            >
              {locations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="checkOut" className="text-sm font-bold mb-2">Check Out</label>
          <div className="relative">
            <input
              type="text"
              id="checkOut"
              placeholder='Dr Ehsan'
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            /></div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}

export default Navigation;