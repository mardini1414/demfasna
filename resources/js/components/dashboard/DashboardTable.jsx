import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import moment from 'moment/moment';
import { Lightbox } from 'react-modal-image';
import { useForm } from '@inertiajs/inertia-react';

const DashboardTable = ({ data, to, total }) => {
  const { delete: destroy } = useForm({ _method: 'delete' });
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');

  const openModal = url => {
    setOpen(true);
    setImage('/storage/' + url);
  };

  const closeModal = () => {
    setOpen(false);
    setImage('');
  };

  return (
    <div className="container px-4 mt-4">
      <Link href="/dashboard/news/create" className="block mb-4">
        <button className="px-8 py-1 text-white bg-green-700 rounded-sm">Add news</button>
      </Link>
      <div className="w-full overflow-hidden rounded-lg shadow-xs">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                <th className="px-4 py-3">Image</th>
                <th className="px-4 py-3">Title</th>
                <th className="px-4 py-3">Date</th>
                <th className="px-4 py-3">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
              {data.map(news => {
                return (
                  <tr
                    className="text-gray-700 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-gray-400"
                    key={news.id}
                  >
                    <td className="px-4 py-3">
                      <i
                        className="text-lg cursor-pointer fa-solid fa-image"
                        onClick={() => openModal(news.image)}
                      ></i>
                    </td>
                    <td className="px-4 py-3 text-sm">{news.title}</td>
                    <td className="px-4 py-3 text-sm">
                      {moment(news.created_at).format('dddd, MM YYYY, h:mm:ss a')}
                    </td>
                    <td className="px-4 py-3">
                      <button className="px-2 py-1 mr-2 bg-green-800 rounded">
                        <i className="text-white fa-solid fa-eye"></i>
                      </button>
                      <button className="px-2 py-1 mr-2 bg-blue-800 rounded">
                        <i className="text-white fa-solid fa-pencil"></i>
                      </button>
                      <button
                        className="px-2 py-1 bg-red-800 rounded"
                        onClick={() => destroy('/dashboard/news/' + news.slug)}
                      >
                        <i className="text-white fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-3">
            Showing {to} of {total}
          </span>
          <span className="col-span-2" />
          {/* Pagination */}
          <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
            <nav aria-label="Table navigation">
              <ul className="inline-flex items-center">
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Previous"
                  >
                    <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    1
                  </button>
                </li>
                <li>
                  <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                    2
                  </button>
                </li>
                <li>
                  <span className="px-3 py-1">...</span>
                </li>
                <li>
                  <button
                    className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                    aria-label="Next"
                  >
                    <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                      <path
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                        fillRule="evenodd"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </nav>
          </span>
        </div>
      </div>
      {open && (
        <Lightbox
          large={image}
          medium={image}
          small={image}
          onClose={closeModal}
          hideDownload={true}
          hideZoom={true}
        />
      )}
    </div>
  );
};

export default DashboardTable;
