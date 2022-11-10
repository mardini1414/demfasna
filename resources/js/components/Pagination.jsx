import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Pagination = ({ prevPage, nextPage, currentPage, lastPage }) => {
  return (
    <div className="flex">
      <div>
        <Link disabled={prevPage === null} href={prevPage}>
          {'<< prev'}
        </Link>
      </div>
      <div className="px-4">{`${currentPage} / ${lastPage}`}</div>
      <div>
        <Link disabled={nextPage === null} href={nextPage}>
          {'next >>'}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
