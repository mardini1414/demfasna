import React from 'react';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <footer className="py-5 bg-primary">
      <div className="container px-5 sm:px-5 md:px-10 lg:px-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 ">
            <a href="https://flowbite.com/" className="flex items-center">
              <img src={logo} width={40} height={40} className="h-auto sm:h-10" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-light">
                DEMFASNA
              </span>
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-light">Follow us</h2>
              <ul className="text-light">
                <li className="mb-4">
                  <a href="https://www.instagram.com/demfasna/" className="hover:underline ">
                    Instagran
                  </a>
                </li>
                <li>
                  <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-light">Legal</h2>
              <ul className="text-light">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="text-center text-light sm:flex sm:items-center sm:justify-between">
          <div>
            <span className="text-sm sm:text-center">© 2022 DEMFASNA™</span>
          </div>
          <div className="space-x-5 text-xl">
            <a href="https://www.instagram.com/demfasna/" className="hover:text-light/70">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="#" className="hover:text-light/70">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
