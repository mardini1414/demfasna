import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const NewsSection = () => {
  return (
    <div className="mx-20">
      <div className="flex justify-center mb-5">
        <p className="text-md tracking-wider text-[#1B2430] font-bold">Berita</p>
      </div>
      <div className="flex flex-col items-center w-full text-black lg:flex-row lg:justify-between lg:items-start lg:space-x-12">
        <div className="w-full h-full lg:w-full">
          <img src={TentangKami} width={750} height={300} />
          <div>
            <h1 className="my-5 text-4xl font-bold">DEMFASNA</h1>
          </div>
          <div className="my-5">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
        <div className="flex flex-col space-y-7 lg:w-3/6">
          <div className="grid grid-cols-2 space-x-3">
            <div>
              <img src={TentangKami} className="w-56 h-44" />
            </div>
            <div>
              <p>10 Desember 2022</p>
              <p className="text-xl font-semibold">Lorem Ipsum is simply dummy text of the</p>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-3">
            <div>
              <img src={TentangKami} className="w-56 h-44" />
            </div>
            <div>
              <p>10 Desember 2022</p>
              <p className="text-xl font-semibold">Lorem Ipsum is simply dummy text of the</p>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-3">
            <div>
              <img src={TentangKami} className="w-56 h-44" />
            </div>
            <div>
              <p>10 Desember 2022</p>
              <p className="text-xl font-semibold">Lorem Ipsum is simply dummy text of the</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
