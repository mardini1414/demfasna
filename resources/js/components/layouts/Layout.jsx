import React from 'react';
import Footer from '../Footer';
import GaleryBeranda from '../GaleryBeranda';
import HeroBeranda from '../HeroBeranda';
import Navbar from '../Navbar';
import TentangKamiBeranda from '../TentangKamiBeranda';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <HeroBeranda />
    <TentangKamiBeranda />
    <GaleryBeranda />
    {children}
    <Footer />
  </>
);

export default Layout;
