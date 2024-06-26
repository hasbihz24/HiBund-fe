import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from '../../public/logo.png';
function NavBar() {
  return (
    <nav className="bg-white shadow-md w-full py-4 ">
      <div className="container mx-auto flex items-center justify-between w-[1053px]">
        <a className="flex items-center" href="/">
          <img
            src={logo}
            alt="Logo"
            width="110"
            height="32"
            className="block"
          />
        </a>
        <button
          className="block lg:hidden px-2 py-1 text-gray-700 border border-gray-400 rounded hover:bg-gray-100"
          type="button"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => document.getElementById('navbarNav').classList.toggle('hidden')}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="hidden w-full lg:flex lg:items-center lg:w-auto" id="navbarNav">
          <ul className="flex flex-col lg:flex-row lg:space-x-4 text-center lg:text-left font-navbar">
            <li className="nav-item m-2">
              <NavLink to="/" className="text-gray-700 hover:text-gray-900" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                }
              }}>
                Beranda
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/fitur" className="text-gray-700 hover:text-gray-900" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                }
              }}>
                Fitur
              </NavLink>
            </li>
            <li className="nav-item m-2">
              <NavLink to="/konsultasi" className="text-gray-700 hover:text-gray-900" style={({ isActive }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                }
              }}>
                Konsultasi
              </NavLink>
            </li>
            <li className="nav-item m-2 relative group">
              <div className="flex items-center cursor-pointer text-gray-700 hover:text-gray-900">
                Kontak
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </div>
              <ul className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:block hover:opacity-100 hover:block transition-opacity duration-200">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/kontak/email" className="block text-gray-700 hover:text-gray-900">
                    Email
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/kontak/phone" className="block text-gray-700 hover:text-gray-900">
                    Phone
                  </NavLink>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <NavLink to="/kontak/address" className="block text-gray-700 hover:text-gray-900">
                    Address
                  </NavLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <form className="hidden lg:block">
          <Link to={"/login"}>
            <button className="px-4 py-2 btn-pink" type="submit">
              Masuk
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default NavBar;
