import { useState } from 'react';

function App() {
  const [location, setLocation] = useState('New York, USA');
  const [checkIn, setCheckIn] = useState('02 January 2024');
  const [checkOut, setCheckOut] = useState('02 January 2024');
  const [guests, setGuests] = useState('2 adults, 2 children');

  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button className="bg-pink-500 text-white px-4 py-2 rounded-md">Tours</button>
          <button className="text-pink-500 hover:underline">Hotels</button>
          <button className="text-pink-500 hover:underline">Tickets</button>
          <button className="text-pink-500 hover:underline">Rental</button>
          <button className="text-pink-500 hover:underline">Activities</button>
        </div>
        <p className="text-sm text-gray-500">Need some help?</p>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col w-1/4">
          <label htmlFor="location" className="text-sm font-bold mb-2">Location</label>
          <div className="relative">
            <input
              type="text"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="checkIn" className="text-sm font-bold mb-2">Check In</label>
          <div className="relative">
            <input
              type="text"
              id="checkIn"
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="checkOut" className="text-sm font-bold mb-2">Check Out</label>
          <div className="relative">
            <input
              type="text"
              id="checkOut"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
        <div className="flex flex-col w-1/4">
          <label htmlFor="guests" className="text-sm font-bold mb-2">Guest</label>
          <div className="relative">
            <input
              type="text"
              id="guests"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-end mt-8">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          Search
        </button>
      </div>
    </div>
  );
}

export default App;