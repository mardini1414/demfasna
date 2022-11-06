import React from 'react';
import Gambar1 from '../../assets/img/Gambar1.webp';
import Gambar2 from '../../assets/img/Gambar2.webp';
import Gambar3 from '../../assets/img/Gambar3.webp';
import Gambar4 from '../../assets/img/Gambar4.webp';
import Gambar5 from '../../assets/img/Gambar5.webp';
import Gambar6 from '../../assets/img/Gambar6.webp';

const GallerySection = () => {
  return (
    <div className="px-5 pt-10 sm:px-5 md:px-10 lg:px-0">
      <h2 className="my-10 text-2xl font-semibold tracking-wider text-center text-primary">
        Galeri
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:px-20">
        <div className="w-full transition-all duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-300">
          <img src={Gambar1} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full transition-all duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-300">
          <img src={Gambar2} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full transition-all duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-300">
          <img src={Gambar3} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full transition-all duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-300">
          <img src={Gambar4} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full transition-all duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-300">
          <img src={Gambar5} alt="Galery" className="w-full"></img>
        </div>
        <div className="w-full transition-all duration-200 hover:shadow-lg hover:scale-110 hover:shadow-gray-300">
          <img src={Gambar6} alt="Galery" className="w-full"></img>
        </div>
      </div>
    </div>
  );
};

export default GallerySection;
