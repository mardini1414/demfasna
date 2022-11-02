import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const DashboardSidebar = () => {
  return (
    <div className="fixed left-0 z-10 flex flex-col h-full text-white transition-all duration-300 bg-blue-900 border-none top-14 w-14 hover:w-64 md:w-64 dark:bg-gray-900 sidebar">
      <div className="flex flex-col justify-between flex-grow overflow-x-hidden overflow-y-auto">
        <ul className="flex flex-col py-4 space-y-1">
          <li className="hidden px-5 md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
            </div>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
            >
              <i className="fa-solid fa-house"></i>
              <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/news"
              className="relative flex flex-row items-center pr-6 border-l-4 border-transparent h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 hover:border-blue-500 dark:hover:border-gray-800"
            >
              <i className="fa-solid fa-newspaper"></i>
              <span className="ml-2 text-sm tracking-wide truncate">News</span>
            </Link>
          </li>
        </ul>
        <p className="hidden px-5 py-3 text-xs text-center mb-14 md:block">Copyright @2021</p>
      </div>
    </div>
  );
};

export default DashboardSidebar;
