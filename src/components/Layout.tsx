import React, { ReactNode } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  margin-left: 250px;
  min-height: 100vh;
  padding: 2rem;
  transition: margin-left 0.3s ease;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0;
    padding-top: 4rem;
  }
`;

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  );
};

export default Layout; 