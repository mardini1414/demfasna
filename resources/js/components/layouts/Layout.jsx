import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
  <div className="container mx-auto">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
