import React from 'react';
import Layout from '../../components/layouts/Layout';
import HeroSection from '../../components/HeroSection';
import AboutUsSection from '../../components/AboutUsSection';
import GallerySection from '../../components/GallerySection';
import NewsSection from '../../components/NewsSection';

const Home = ({ data }) => {
  return (
    <Layout>
      <HeroSection />
      <AboutUsSection />
      <GallerySection />
      <NewsSection data={data} />
    </Layout>
  );
};

export default Home;
