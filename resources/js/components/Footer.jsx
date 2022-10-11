import React from 'react';
import Logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <div>
      <footer className="text-white text-start lg:text-left bg-gradient-to-r from-red-400 to-red-600">
        <div className="px-24 py-5 text-center md:text-left">
          <div className="grid gap-10 grid-1 md:grid-cols-2 lg:grid-cols-2 ">
            <div className="grid grid-cols-1 md:w-12">
              <img src={Logo} width={50} height={50} />
              <span className="self-center text-xl font-semibold text-black lg:absolute lg:mt-2 md:absolute md:-mt-24 md:ml-14 sm:absolute sm:mt-2">
                DEMFASNA
              </span>
              <p className="px-6 text-black">lorem ipsum ksksksk kakak</p>
            </div>
            <div className="mx-auto">
              <i className="text-black fa-solid fa-phone"></i>
              <h6 className="flex justify-center py-5 mb-4 font-semibold text-black uppercase md:justify-start">
                CONTACT
              </h6>
            </div>
          </div>
          <div className="flex justify-center p-6 border-b border-black lg:justify-between"></div>
          <div>
            <p>FB</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
