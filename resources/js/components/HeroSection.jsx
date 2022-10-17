import React from 'react';
import heroImage from '../../assets/img/heroImage.png';

const HeroSection = () => {
  return (
    <div className="mx-5 my-8 lg:mx-20">
      <div className="relative flex flex-col-reverse items-center w-full h-full py-10 rounded md:px-16 md:py-20 bg-secondary lg:flex-row lg:justify-between">
        <div className="text-center lg:text-start">
          <div className="md:px-5 lg:px-0">
            <h2 className="text-2xl font-bold">
              Dewan Eksekutif Mahasiswa <br className="hidden md:block" /> Fakultas Syariah
              Indonesia
            </h2>
          </div>
          <div className="px-2 my-4 md:px-0 lg:w-4/5">
            <p className="text-primary/90">
              x Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
          <button className="px-10 py-2 text-sm rounded-sm bg-primary text-light">
            Hubungi Kami
          </button>
        </div>
        <div>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
