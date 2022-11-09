import React from 'react';
import { Link } from '@inertiajs/inertia-react';

const Pagination = ({ prevPage, nextPage, from }) => {
  return (
    <div className="flex">
      <div>
        <Link disabled={prevPage === null} href={prevPage}>
          {'<< previous'}
        </Link>
      </div>
      <div className="px-4">{from}</div>
      <div>
        <Link disabled={nextPage === null} href={nextPage}>
          {'next >>'}
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
