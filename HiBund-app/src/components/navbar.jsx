import React from "react";

function NavBar() {
  return (
    <nav className="bg-white mt-2">
      <div className="container mx-auto flex items-center justify-between p-4">
        <a className="flex items-center" href="/">
          <img
            src="logo.png"
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
              <a className="font-black text-gray-700 hover:text-gray-900" aria-current="page" href="/">
                Beranda
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="text-gray-500 hover:text-gray-900" href="/fitur">
                Fitur
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="text-gray-500 hover:text-gray-900" href="#">
                Konsultasi
              </a>
            </li>
            <li className="nav-item m-2">
              <a className="text-gray-500 hover:text-gray-900" href="#" aria-disabled="true">
                Kontak
              </a>
            </li>
          </ul>
        </div>
        <form className="hidden lg:block">
          <button className=" px-4 py-2 btn-pink" type="submit">
            Masuk
          </button>
        </form>
      </div>
    </nav>
  );
}
export default NavBar;
