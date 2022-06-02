import React from 'react';

import Head from '../../components/Head';
import Footer from '../../components/Footer';

import Drawer from '../../components/Drawer';
import Hero from '../../components/Hero';
import Services from '../../components/Services';
import Portfolio from '../../components/Portfolio';
import WorkSteps from '../../components/WorkSteps';
import ContactUs from '../../components/ContactUs';

function Home() {
  return (
    <div>
      <Head title="Titulo" description="Descrição" />
      <Drawer />
      <Hero />
      <Services />
      <Portfolio />
      <WorkSteps />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default Home;
