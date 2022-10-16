import React from 'react';
import Layout from '../../components/layouts/Layout';
import HeroSection from '../../components/HeroSection';
import AboutUsSection from '../../components/AboutUsSection';
import GallerySection from '../../components/GallerySection';

const Home = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <GallerySection />
    </Layout>
  );
};

export default Home;
