import React from 'react';
import heroImage from '../../assets/img/heroImage.webp';

const HeroSection = () => {
  return (
    <div className="px-5 md:my-8 md:px-10 sm:px-5 lg:px-20">
      <div className="relative flex flex-col-reverse items-center w-full h-full px-2 py-10 rounded-md md:px-16 md:py-20 bg-secondary lg:flex-row lg:justify-between">
        <div className="text-center lg:text-start">
          <div className="md:px-5 lg:px-0">
            <h2 className="text-2xl font-bold">
              Dewan Eksekutif Mahasiswa <br className="hidden md:block" /> Fakultas Syariah
              Se-Indonesia
            </h2>
          </div>
          <div className="my-4 md:px-0 lg:w-4/5">
            <p className="leading-relaxed text-primary/80">
              DEMFASNA merupakan organisasi yang menaungi seluruh Dewan Eksekutif Mahasiswa Fakultas
              Syari'ah Se-Indonesia
            </p>
          </div>
          <button className="px-10 py-2 text-sm rounded-sm bg-primary text-light">
            Hubungi Kami
          </button>
        </div>
        <div className="w-2/3">
          <img src={heroImage} className="w-full" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
