import React from 'react';
import heroImage from '../../assets/img/heroImage.png';

const HeroBeranda = () => {
  return (
    <div className="mx-5 my-8 md:mx-20 sm:mx-10">
      <div className="px-10 relative flex flex-col-reverse items-center w-full h-full py-10 bg-[#F4F2F3] rounded-[10px] lg:flex-row lg:justify-between">
        <div className="text-center lg:text-start">
          <h1 className="text-3xl font-bold lg:text-2xl">DEMFASNA</h1>
          <div className="px-5 lg:px-0">
            <h2> Dewan Eksekutif Mahasiswa Fakultas Syariah Indonesia</h2>
          </div>
          <div className="mt-10 lg:mt-4 lg:w-4/5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s
            </p>
          </div>
        </div>
        <div>
          <img src={heroImage} alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default HeroBeranda;
