import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
const PrincipalLayout = () => {
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: '70px' }}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default PrincipalLayout;
