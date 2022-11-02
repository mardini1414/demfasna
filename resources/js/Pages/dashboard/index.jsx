import React from 'react';
import DashboardLayout from '../../components/layouts/DashboardLayout';
import logo from '../../../assets/img/logo.png';

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="flex items-center justify-center h-screen">
        <div>
          <img src={logo} alt="demfasna" className="mx-auto mb-4" />
          <h1 className="text-xl text-center text-primary">Wellcome to DEMFASNA dashboard!</h1>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
