import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import DashboardTable from '../../../components/dashboard/DashboardTable';
import Swal from 'sweetalert2';

const News = props => {
  const { flash, data, to, total, prev_page_url, next_page_url, from } = props;
  useEffect(() => {
    if (flash.message) {
      Swal.fire('Success', flash.message, 'success');
    }
  }, [data]);

  return (
    <DashboardLayout>
      <DashboardTable
        data={data}
        to={to}
        total={total}
        prev_page_url={prev_page_url}
        next_page_url={next_page_url}
        from={from}
      />
    </DashboardLayout>
  );
};

export default News;
