import React from 'react';

const Beranda = () => {
  return (
    <div>
      <div className="relative flex flex-col-reverse items-center w-full h-full py-10 lg:flex-row lg:justify-between">
        <div className="text-center lg:text-start">
          <h1 className="text-3xl font-semibold lg:text-4xl">DEMFASNA</h1>
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
        <div>{/* <Image src={heroImage} /> */}</div>
      </div>
    </div>
  );
};

export default Beranda;
