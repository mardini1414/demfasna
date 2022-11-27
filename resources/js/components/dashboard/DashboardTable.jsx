import React, { useState } from 'react';
import { Link } from '@inertiajs/inertia-react';
import moment from 'moment/moment';
import { Lightbox } from 'react-modal-image';
import { useForm } from '@inertiajs/inertia-react';
import Pagination from '../Pagination';
import toLocalDate from '../../helper/toLocalDate';

const DashboardTable = props => {
  const { data, to, total, prev_page_url, next_page_url, current_page, last_page } = props;
  const { post } = useForm({ _method: 'delete' });
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
                    <td className="h-4 px-4 py-3">
                      <i
                        className="text-lg cursor-pointer fa-solid fa-image"
                        onClick={() => openModal(news.image)}
                      ></i>
                    </td>
                    <td className="px-4 py-3 text-sm">
                      <div className="max-w-[500px] text-ellipsis whitespace-nowrap overflow-hidden">
                        {news.title}
                      </div>
                    </td>
                    <td className="px-4 py-3 text-sm">{toLocalDate(news.created_at)}</td>
                    <td className="px-4 py-3">
                      <Link
                        href={'/news/' + news.slug}
                        className="px-2 py-1 mr-2 bg-green-800 rounded"
                      >
                        <i className="text-white fa-solid fa-eye"></i>
                      </Link>
                      <Link
                        href={'/dashboard/news/' + news.slug}
                        className="px-2 py-1 mr-2 bg-blue-800 rounded"
                      >
                        <i className="text-white fa-solid fa-pencil"></i>
                      </Link>
                      <button
                        className="px-2 py-1 bg-red-800 rounded"
                        onClick={() => post('/dashboard/news/' + news.slug)}
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
        <div className="flex justify-between px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
          <span className="flex items-center col-span-2">
            Showing {to} of {total}
          </span>
          <span className="col-span-2">
            <Pagination
              prevPage={prev_page_url}
              nextPage={next_page_url}
              currentPage={current_page}
              lastPage={last_page}
            />
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
