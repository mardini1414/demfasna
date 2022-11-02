import React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }) => (
  <>
    <Navbar />
    <main className="container mx-auto">{children}</main>
    <Footer />
  </>
);

export default Layout;
