import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from '@inertiajs/inertia-react';
import { useState } from 'react';

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="bg-[#FBF9F7] border-gray-200 py-2.5">
      <div className="justify-between md:items-center md:flex md:mx-20">
        <div className="flex items-center justify-between md:block">
          <a className="flex">
            <img src={logo} width={40} height={40} className="h-auto mx-3 sm:h-10" alt="Logo" />
            <span className="self-center text-xl font-semibold text-black whitespace-nowrap">
              DEMFASNA
            </span>
          </a>
          <div className="md:hidden">
            <button
              className="p-2 text-black rounded-md outline-none focus:border-white focus:border"
              onClick={() => setNavbar(!navbar)}
            >
              {navbar ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black "
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-black"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            navbar ? 'block' : 'hidden'
          }`}
        >
          <ul className="space-y-8 md:justify-end md:flex md:space-x-6 md:space-y-0 md:items-end">
            <li className="text-black ">
              <Link
                href="/"
                className="px-5 pt-5 pb-5 text-lg text-black hover:bg-red-500 hover:text-white"
              >
                Beranda
              </Link>
            </li>
            <li className="text-black ">
              <Link
                href="/profile"
                className="px-5 pt-5 pb-5 text-lg text-black hover:text-white hover:bg-emerald-500"
              >
                Tentang Kami
              </Link>
            </li>
            <li className="text-black ">
              <Link
                href="/gallery"
                className="px-5 pt-5 pb-5 text-lg text-black hover:text-white hover:bg-emerald-500"
              >
                Galeri
              </Link>
            </li>
            <li className="text-black ">
              <Link
                href="/news"
                className="px-5 pt-5 pb-5 text-lg text-black hover:text-white hover:bg-emerald-500"
              >
                Berita
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
