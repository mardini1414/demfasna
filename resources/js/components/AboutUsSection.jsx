import React from 'react';
import TentangKami from '../../assets/img/Tentang Kami.png';

const AboutUsSection = () => {
  return (
    <div className="mx-20">
      <div className="flex justify-center mb-5">
        <p className="text-md tracking-wider text-[#1B2430] font-bold">Tentang Kami</p>
      </div>
      <div className="flex flex-col items-center w-full text-black lg:flex-row lg:justify-between lg:items-start lg:space-x-7 ">
        <div className="w-4/5 lg:w-10/12">
          <img src={TentangKami} />
        </div>
        <div className="flex flex-col space-y-5 lg:w-4/5 ">
          <h1 className="text-4xl font-semibold text-center text-black lg:text-start lg:text-3xl">
            DEMFASNA
          </h1>
          <p className="text-justify lg:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book.
          </p>
          <div className="text-center lg:text-start ">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-[#1B2430] rounded-lg md:justify-start hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
