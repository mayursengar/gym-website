import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Adding padding to account for fixed header
`;

const Layout = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

export default Layout; 