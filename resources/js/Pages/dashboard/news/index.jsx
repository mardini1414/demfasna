import React, { useEffect, useState } from 'react';
import DashboardLayout from '../../../components/layouts/DashboardLayout';
import DashboardTable from '../../../components/dashboard/DashboardTable';
import Swal from 'sweetalert2';

const News = ({ flash, data, to, total }) => {
  useEffect(() => {
    if (flash.message) {
      Swal.fire('Success', flash.message, 'success');
    }
  }, [data]);

  return (
    <DashboardLayout>
      <DashboardTable data={data} to={to} total={total} />
    </DashboardLayout>
  );
};

export default News;
