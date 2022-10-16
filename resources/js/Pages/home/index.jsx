import React from 'react';
import Layout from '../../components/layouts/Layout';
import HeroBeranda from '../../components/HeroBeranda';
import TentangKamiBeranda from '../../components/TentangKamiBeranda';
import GaleryBeranda from '../../components/GaleryBeranda';

const Home = () => {
  return (
    <Layout>
      <HeroBeranda />
      <TentangKamiBeranda />
      <GaleryBeranda />
      <div className="text-red-500">panjalu</div>
    </Layout>
  );
};

export default Home;
