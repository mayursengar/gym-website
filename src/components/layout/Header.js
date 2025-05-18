import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUser, FaSignOutAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 0 2rem;
  transition: all 0.3s ease;
  
  &.scrolled {
    padding: 0.8rem 2rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 768px) {
    padding: 1rem 2rem;
    
    &.scrolled {
      padding: 1rem 2rem;
    }
  }
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  
  span {
    color: #ff4500;
  }
`;

const NavLinksDesktop = styled.div`
  display: flex;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const NavLinkDesktop = styled(Link)`
  display: inline-block;
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
  font-weight: 500;
  padding: 1.5rem 1rem;
  transition: color 0.3s ease;
  position: relative;
  
  &:hover {
    color: #ff4500;
  }
  
  &.active {
    color: #ff4500;
    
    &:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background-color: #ff4500;
    }
  }
`;

const AuthButton = styled(Link)`
  background-color: #ff4500;
  color: #fff;
  border: none;
  padding: 0.5rem 1.2rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-left: 0.5rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  &:hover {
    background-color: #cc3700;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
  
  &.outline {
    background-color: transparent;
    border: 2px solid #ff4500;
    color: #ff4500;
    
    &:hover {
      background-color: #ff4500;
      color: #fff;
    }
  }
`;

const UserMenu = styled.div`
  position: relative;
  margin-left: 0.5rem;
`;

const UserMenuButton = styled.button`
  background-color: transparent;
  border: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #fff;
  cursor: pointer;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 5px;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
  
  svg {
    font-size: 1.2rem;
  }
`;

const UserMenuDropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  min-width: 180px;
  z-index: 1000;
`;

const UserMenuItem = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: #333;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f8f8f8;
  }
  
  svg {
    color: #ff4500;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.8rem 1rem;
  text-decoration: none;
  color: #333;
  background: none;
  border: none;
  width: 100%;
  text-align: left;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #f8f8f8;
  }
  
  svg {
    color: #ff4500;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
  
  @media (max-width: 992px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  display: none;
  
  @media (max-width: 992px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.95);
    z-index: 1001;
    padding: 2rem;
  }
`;

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const MobileMenuClose = styled.button`
  background: none;
  border: none;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;
`;

const NavLinksMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const NavLinkMobile = styled(Link)`
  display: block;
  text-decoration: none;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0.8rem 0;
  transition: color 0.3s ease;
  
  &:hover, &.active {
    color: #ff4500;
  }
`;

const AuthButtonsMobile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
`;

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    // Check login status when component mounts or when location changes
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      
      if (loggedIn) {
        try {
          const userData = JSON.parse(localStorage.getItem('user'));
          setUser(userData);
        } catch (error) {
          console.error('Error parsing user data:', error);
          setUser(null);
        }
      } else {
        setUser(null);
      }
    };
    
    checkLoginStatus();
  }, [location]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setUserMenuOpen(false);
    navigate('/');
  };
  
  const closeUserMenu = () => {
    setUserMenuOpen(false);
  };
  
  const toggleUserMenu = () => {
    setUserMenuOpen(prev => !prev);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  
  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <HeaderContent>
        <Logo to="/">
          Power<span>Gym</span>
        </Logo>
        
        <NavLinksDesktop>
          <NavLinkDesktop to="/" className={location.pathname === '/' ? 'active' : ''}>Home</NavLinkDesktop>
          <NavLinkDesktop to="/about" className={location.pathname === '/about' ? 'active' : ''}>About</NavLinkDesktop>
          <NavLinkDesktop to="/classes" className={location.pathname === '/classes' ? 'active' : ''}>Classes</NavLinkDesktop>
          <NavLinkDesktop to="/trainers" className={location.pathname === '/trainers' ? 'active' : ''}>Trainers</NavLinkDesktop>
          <NavLinkDesktop to="/pricing" className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</NavLinkDesktop>
          <NavLinkDesktop to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLinkDesktop>
          
          {isLoggedIn ? (
            <UserMenu>
              <UserMenuButton onClick={toggleUserMenu}>
                <FaUser />
                {user?.firstName || 'User'}
              </UserMenuButton>
              
              {userMenuOpen && (
                <UserMenuDropdown
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  <UserMenuItem to="/dashboard" onClick={closeUserMenu}>
                    <FaUser />
                    Dashboard
                  </UserMenuItem>
                  <LogoutButton onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </LogoutButton>
                </UserMenuDropdown>
              )}
            </UserMenu>
          ) : (
            <>
              <AuthButton to="/login" className="outline">Login</AuthButton>
              <AuthButton to="/signup">Sign Up</AuthButton>
            </>
          )}
        </NavLinksDesktop>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          <FaBars />
        </MobileMenuButton>
      </HeaderContent>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'tween' }}
        >
          <MobileMenuHeader>
            <Logo to="/" onClick={closeMobileMenu}>
              Power<span>Gym</span>
            </Logo>
            <MobileMenuClose onClick={closeMobileMenu}>
              <FaTimes />
            </MobileMenuClose>
          </MobileMenuHeader>
          
          <NavLinksMobile>
            <NavLinkMobile to="/" onClick={closeMobileMenu} className={location.pathname === '/' ? 'active' : ''}>Home</NavLinkMobile>
            <NavLinkMobile to="/about" onClick={closeMobileMenu} className={location.pathname === '/about' ? 'active' : ''}>About</NavLinkMobile>
            <NavLinkMobile to="/classes" onClick={closeMobileMenu} className={location.pathname === '/classes' ? 'active' : ''}>Classes</NavLinkMobile>
            <NavLinkMobile to="/trainers" onClick={closeMobileMenu} className={location.pathname === '/trainers' ? 'active' : ''}>Trainers</NavLinkMobile>
            <NavLinkMobile to="/pricing" onClick={closeMobileMenu} className={location.pathname === '/pricing' ? 'active' : ''}>Pricing</NavLinkMobile>
            <NavLinkMobile to="/contact" onClick={closeMobileMenu} className={location.pathname === '/contact' ? 'active' : ''}>Contact</NavLinkMobile>
          </NavLinksMobile>
          
          <AuthButtonsMobile>
            {isLoggedIn ? (
              <>
                <AuthButton to="/dashboard" onClick={closeMobileMenu}>
                  <FaUser />
                  Dashboard
                </AuthButton>
                <AuthButton className="outline" onClick={() => {
                  handleLogout();
                  closeMobileMenu();
                }}>
                  <FaSignOutAlt />
                  Logout
                </AuthButton>
              </>
            ) : (
              <>
                <AuthButton to="/login" onClick={closeMobileMenu}>Login</AuthButton>
                <AuthButton to="/signup" onClick={closeMobileMenu}>Sign Up</AuthButton>
              </>
            )}
          </AuthButtonsMobile>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header; 