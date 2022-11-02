import React from 'react';

const DashboardNavbar = () => {
  return (
    <div className="fixed z-10 flex items-center justify-between w-full text-white h-14">
      <div className="flex items-center justify-start pl-3 bg-blue-800 border-none w-14 md:w-64 h-14 dark:bg-gray-800">
        <img
          className="mr-2 overflow-hidden rounded-md w-7 h-7 md:w-10 md:h-10"
          src="https://therminic2018.eu/wp-content/uploads/2018/07/dummy-avatar.jpg"
        />
        <span className="hidden md:block">ADMIN</span>
      </div>
      <div className="flex items-center justify-end bg-blue-800 h-14 dark:bg-gray-800 header-right">
        <ul className="flex items-center">
          <li>
            <a href="#" className="flex items-center mr-4 hover:text-blue-100">
              <span className="inline-flex mr-1">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                  />
                </svg>
              </span>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
