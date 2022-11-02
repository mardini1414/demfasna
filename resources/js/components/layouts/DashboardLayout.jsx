import React from 'react';
import DashboardNavbar from '../dashboard/DashboardNavbar';
import DashboardSidebar from '../dashboard/DashboardSidebar';

const DashboardLayout = ({ children }) => {
  return (
    <div>
      <div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n  /* Compiled dark classes from Tailwind */\n  .dark .dark\\:divide-gray-700 > :not([hidden]) ~ :not([hidden]) {\n    border-color: rgba(55, 65, 81);\n  }\n  .dark .dark\\:bg-gray-50 {\n    background-color: rgba(249, 250, 251);\n  }\n  .dark .dark\\:bg-gray-100 {\n    background-color: rgba(243, 244, 246);\n  }\n  .dark .dark\\:bg-gray-600 {\n    background-color: rgba(75, 85, 99);\n  }\n  .dark .dark\\:bg-gray-700 {\n    background-color: rgba(55, 65, 81);\n  }\n  .dark .dark\\:bg-gray-800 {\n    background-color: rgba(31, 41, 55);\n  }\n  .dark .dark\\:bg-gray-900 {\n    background-color: rgba(17, 24, 39);\n  }\n  .dark .dark\\:bg-red-700 {\n    background-color: rgba(185, 28, 28);\n  }\n  .dark .dark\\:bg-green-700 {\n    background-color: rgba(4, 120, 87);\n  }\n  .dark .dark\\:hover\\:bg-gray-200:hover {\n    background-color: rgba(229, 231, 235);\n  }\n  .dark .dark\\:hover\\:bg-gray-600:hover {\n    background-color: rgba(75, 85, 99);\n  }\n  .dark .dark\\:hover\\:bg-gray-700:hover {\n    background-color: rgba(55, 65, 81);\n  }\n  .dark .dark\\:hover\\:bg-gray-900:hover {\n    background-color: rgba(17, 24, 39);\n  }\n  .dark .dark\\:border-gray-100 {\n    border-color: rgba(243, 244, 246);\n  }\n  .dark .dark\\:border-gray-400 {\n    border-color: rgba(156, 163, 175);\n  }\n  .dark .dark\\:border-gray-500 {\n    border-color: rgba(107, 114, 128);\n  }\n  .dark .dark\\:border-gray-600 {\n    border-color: rgba(75, 85, 99);\n  }\n  .dark .dark\\:border-gray-700 {\n    border-color: rgba(55, 65, 81);\n  }\n  .dark .dark\\:border-gray-900 {\n    border-color: rgba(17, 24, 39);\n  }\n  .dark .dark\\:hover\\:border-gray-800:hover {\n    border-color: rgba(31, 41, 55);\n  }\n  .dark .dark\\:text-white {\n    color: rgba(255, 255, 255);\n  }\n  .dark .dark\\:text-gray-50 {\n    color: rgba(249, 250, 251);\n  }\n  .dark .dark\\:text-gray-100 {\n    color: rgba(243, 244, 246);\n  }\n  .dark .dark\\:text-gray-200 {\n    color: rgba(229, 231, 235);\n  }\n  .dark .dark\\:text-gray-400 {\n    color: rgba(156, 163, 175);\n  }\n  .dark .dark\\:text-gray-500 {\n    color: rgba(107, 114, 128);\n  }\n  .dark .dark\\:text-gray-700 {\n    color: rgba(55, 65, 81);\n  }\n  .dark .dark\\:text-gray-800 {\n    color: rgba(31, 41, 55);\n  }\n  .dark .dark\\:text-red-100 {\n    color: rgba(254, 226, 226);\n  }\n  .dark .dark\\:text-green-100 {\n    color: rgba(209, 250, 229);\n  }\n  .dark .dark\\:text-blue-400 {\n    color: rgba(96, 165, 250);\n  }\n  .dark .group:hover .dark\\:group-hover\\:text-gray-500 {\n    color: rgba(107, 114, 128);\n  }\n  .dark .group:focus .dark\\:group-focus\\:text-gray-700 {\n    color: rgba(55, 65, 81);\n  }\n  .dark .dark\\:hover\\:text-gray-100:hover {\n    color: rgba(243, 244, 246);\n  }\n  .dark .dark\\:hover\\:text-blue-500:hover {\n    color: rgba(59, 130, 246);\n  }\n\n  /* Custom style */\n  .header-right {\n      width: calc(100% - 3.5rem);\n  }\n  .sidebar:hover {\n      width: 16rem;\n  }\n  @media only screen and (min-width: 768px) {\n      .header-right {\n          width: calc(100% - 16rem);\n      }        \n  }\n',
          }}
        />
        <DashboardNavbar />
        <div className="flex flex-col flex-auto flex-shrink-0 min-h-screen antialiased text-black bg-white dark:bg-gray-700 dark:text-white">
          <DashboardSidebar />
          <div className="h-full mb-10 ml-14 mt-14 md:ml-64">
            <main>{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
