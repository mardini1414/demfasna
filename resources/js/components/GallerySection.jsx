import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const GallerySection = () => {
  return (
    <div className="px-2 pt-10 md:px-20 lg:px-0">
      <h2 className="my-10 text-xl font-semibold tracking-wider text-center text-primary">
        Galeri
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:px-20">
        <div className="w-full">
          <img src={TentangKami} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full">
          <img src={TentangKami} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full">
          <img src={TentangKami} alt="Galery" className="w-full"></img>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
