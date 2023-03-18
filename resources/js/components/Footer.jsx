import React from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from '@inertiajs/inertia-react';

const Footer = () => {
  return (
    <footer className="py-5 bg-primary">
      <div className="container px-5 mx-auto sm:px-5 md:px-10 lg:px-20">
        <div className="px-6 md:flex md:justify-between">
          <div className="mb-6 -ml-3 md:mb-0">
            <Link href="/" className="flex items-center">
              <img src={logo} width={40} height={40} className="h-auto sm:h-10" alt="Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap text-light">
                DEMFASNA
              </span>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-light">Follow us</h2>
              <ul className="text-light">
                <li className="mb-4">
                  <a
                    href="https://instagram.com/demfasna?igshid=Yzg5MTU1MDY="
                    className="font-light hover:underline text-light/90"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https:/youtube.com/@demfasna"
                    className="font-light hover:underline text-light/90"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold uppercase text-light">Legal</h2>
              <ul className="text-light">
                <li className="mb-4">
                  <Link href="/privacy-policy" className="font-light hover:underline text-light/90">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="font-light hover:underline text-light/90"
                  >
                    Terms &amp; Conditions
                  </Link>
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
            <a
              href="https:/instagram.com/demfasna?igshid=Yzg5MTU1MDY="
              className="hover:text-light/70"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https:/www.youtube.com/@demfasna" className="hover:text-light/70">
              <i className="fa-brands fa-youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
