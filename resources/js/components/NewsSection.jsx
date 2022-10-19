import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const NewsSection = () => {
  return (
    <div className="px-2 pt-10 md:px-20">
      <h2 className="my-10 text-xl font-semibold tracking-wider text-center text-primary">
        Berita
      </h2>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <div className="col-span-2">
          <img src={TentangKami} className="w-full" />
          <div>
            <h1 className="my-5 text-4xl font-bold text-primary">DEMFASNA</h1>
          </div>
          <div className="my-5">
            <p className="text-primary/80">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries,
            </p>
          </div>
        </div>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 space-x-3">
            <div>
              <img src={TentangKami} className="object-cover rounded aspect-square" />
            </div>
            <div>
              <span className="text-primary/80">10 Desember 2022</span>
              <h3 className="text-xl font-semibold text-primary">
                Lorem Ipsum is simply dummy text of the
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-3">
            <div>
              <img src={TentangKami} className="object-cover rounded aspect-square" />
            </div>
            <div>
              <span className="text-primary/80">10 Desember 2022</span>
              <h3 className="text-xl font-semibold text-primary">
                Lorem Ipsum is simply dummy text of the
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-2 space-x-3">
            <div>
              <img src={TentangKami} className="object-cover rounded aspect-square" />
            </div>
            <div>
              <span className="text-primary/80">10 Desember 2022</span>
              <h3 className="text-xl font-semibold text-primary">
                Lorem Ipsum is simply dummy text of the
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
