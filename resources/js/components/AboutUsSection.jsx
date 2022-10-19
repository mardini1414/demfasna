import { Link } from '@inertiajs/inertia-react';
import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const AboutUsSection = () => {
  return (
    <div className="pt-10 lg:px-20 md:px-20">
      <h2 className="my-10 text-xl font-semibold tracking-wider text-center text-primary">
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
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <Link href="#" className="block mx-auto lg:mx-0 w-max">
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
