import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.webp';

const AboutUsSection = () => {
  return (
    <div className="px-5 pt-10 lg:px-20 md:px-10 sm:px-5">
      <h2 className="my-10 text-2xl font-semibold tracking-wider text-center text-primary">
        Tentang Kami
      </h2>
      <div className="flex flex-col items-center w-full px-2 lg:flex-row lg:justify-between lg:items-start lg:space-x-7">
        <div className="block w-full">
          <img src={TentangKami} className="w-full mx-auto" />
        </div>
        <div className="flex flex-col space-y-5 lg:w-4/5">
          <h2 className="mt-4 text-xl font-semibold text-center lg:mt-0 text-primary lg:text-start lg:text-3xl">
            DEMFASNA
          </h2>
          <p className="leading-relaxed text-justify lg:text-start text-primary/80">
            Dididikan di Yogyakarta pada tanggal 11 April 2021 yang bertepatan dengan 28 Sya'ban
            1442 H, dan berpusat di Ibukota Negara Republik Indonesia
          </p>
          <Link href="/profile" className="block mx-auto lg:mx-0 w-max">
            <button className="px-10 py-2 text-sm rounded-sm bg-primary text-light">
              Lihat selengkapnya
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
