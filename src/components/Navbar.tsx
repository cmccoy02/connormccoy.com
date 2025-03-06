import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

const NavContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.card};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease;
  z-index: 1000;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    transform: translateX(-100%);
    &.active {
      transform: translateX(0);
    }
  }
`;

const Logo = styled.div`
  margin-bottom: 2rem;
  img {
    width: 50px;
    height: auto;
  }
`;

const NavLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  flex: 1;
`;

const NavItem = styled.li`
  margin-bottom: 1rem;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  display: block;
  padding: 0.5rem 0;
  color: ${({ theme, $isActive }) => 
    $isActive ? theme.colors.accent : theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: none;
  }
`;

const ThemeToggle = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: auto;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.border};
  }
`;

const MenuToggle = styled.button`
  position: fixed;
  top: 1rem;
  left: 1rem;
  z-index: 1001;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  width: 40px;
  height: 40px;
  border-radius: 4px;
  display: none;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: flex;
  }
`;

const Navbar: React.FC = () => {
  const { themeMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Use the appropriate logo based on the theme
  const logoSrc = themeMode === 'light' 
    ? "/assets/images/m-dark.svg" 
    : "/assets/images/m.svg";

  return (
    <>
      <MenuToggle onClick={toggleMenu}>☰</MenuToggle>
      <NavContainer className={isMenuOpen ? 'active' : ''}>
        <Logo>
          <Link to="/" onClick={closeMenu}>
            <img src={logoSrc} alt="Logo" />
          </Link>
        </Logo>
        <NavLinks>
          <NavItem>
            <NavLink to="/" $isActive={location.pathname === '/'} onClick={closeMenu}>
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/about" $isActive={location.pathname === '/about'} onClick={closeMenu}>
              About
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/projects" $isActive={location.pathname === '/projects'} onClick={closeMenu}>
              Projects
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/essays" $isActive={location.pathname === '/essays'} onClick={closeMenu}>
              Essays
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/contact" $isActive={location.pathname === '/contact'} onClick={closeMenu}>
              Contact
            </NavLink>
          </NavItem>
        </NavLinks>
        <ThemeToggle onClick={toggleTheme}>
          {themeMode === 'light' ? '🌙 Dark Mode' : '☀️ Light Mode'}
        </ThemeToggle>
      </NavContainer>
    </>
  );
};

export default Navbar; 