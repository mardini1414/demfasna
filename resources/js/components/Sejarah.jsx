// import Image from "next/image";
import React from 'react';
// import sejarah from "../public/assets/sejarah.png";

const Sejarah = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full text-black lg:flex-row lg:justify-between lg:items-start lg:space-x-7 ">
        <div className="w-4/5 lg:w-1/2">{/* <Image src={sejarah} /> */}</div>
        <div className="flex flex-col space-y-5 lg:w-4/5 ">
          <h1 className="text-4xl font-semibold text-center text-red-500  lg:text-start lg:text-5xl">
            Sejarah
          </h1>
          <p className="text-justify  lg:text-start">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,
          </p>
          <div className="text-center lg:text-end ">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-xs font-medium text-center text-white bg-red-500 rounded-lg hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
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

export default Sejarah;
