import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const GaleryBeranda = () => {
  return (
    <div className="mx-20 my-10">
      <div className="flex justify-center mb-5">
        <p className="text-md tracking-wider text-[#1B2430] font-bold"> Galery</p>
      </div>
      <div className="flex grid-cols-3 space-x-5">
        <div>
          <img src={TentangKami} alt="Galery"></img>
        </div>
        <div>
          <img src={TentangKami} alt="Galery"></img>
        </div>
        <div>
          <img src={TentangKami} alt="Galery"></img>
        </div>
      </div>
    </div>
  );
};

export default GaleryBeranda;
