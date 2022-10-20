import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const NewsSection = () => {
  return (
    <div className="px-2 pt-10 md:px-20">
      <h2 className="my-10 text-xl font-semibold tracking-wider text-center text-primary">
        Berita
      </h2>
      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <img src={TentangKami} alt="news" className="w-full" />
          <h2 className="mt-4 mb-2 text-xl font-semibold text-primary">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde nulla neque eos
          </h2>
          <p className="leading-relaxed text-primary/80">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus aliquam libero
            delectus, obcaecati alias qui voluptas deleniti minus corrupti voluptates? Ad dolores
            eaque quae vero illum tempora necessitatibus facilis repellat cumque iure, est qui sit
            inventore quod quibusdam? Alias quae esse libero recusandae voluptas, porro quis
            adipisci dolore aliquam at?
          </p>
        </div>
        <div>
          <div className="grid w-full gap-2 mb-4 lg:grid-cols-3">
            <img
              src={TentangKami}
              alt="news"
              className="object-cover w-full rounded lg:aspect-square"
            />
            <div className="lg:col-span-2">
              <span className="text-primary/80">12 juni 2022</span>
              <h2 className="text-lg font-semibold text-primary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>
            </div>
          </div>
          <div className="grid w-full gap-2 mb-4 lg:grid-cols-3">
            <img
              src={TentangKami}
              alt="news"
              className="object-cover w-full rounded lg:aspect-square"
            />
            <div className="lg:col-span-2">
              <span className="text-primary/80">12 juni 2022</span>
              <h2 className="text-lg font-semibold text-primary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>
            </div>
          </div>
          <div className="grid w-full gap-2 mb-4 lg:grid-cols-3">
            <img
              src={TentangKami}
              alt="news"
              className="object-cover w-full rounded lg:aspect-square"
            />
            <div className="lg:col-span-2">
              <span className="text-primary/80">12 juni 2022</span>
              <h2 className="text-lg font-semibold text-primary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>
            </div>
          </div>
          <div className="grid w-full gap-2 mb-4 lg:grid-cols-3">
            <img
              src={TentangKami}
              alt="news"
              className="object-cover w-full rounded lg:aspect-square"
            />
            <div className="lg:col-span-2">
              <span className="text-primary/80">12 juni 2022</span>
              <h2 className="text-lg font-semibold text-primary">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
