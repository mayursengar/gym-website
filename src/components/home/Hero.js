import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeroContainer = styled.section`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
  padding: 0 2rem;
`;

const HeroContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;

  @media (max-width: 768px) {
    padding-left: 0;
    text-align: center;
  }
`;

const HeroTagline = styled(motion.p)`
  font-size: 1.2rem;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  color: #ff4500;
  margin-bottom: 1rem;
`;

const HeroTitle = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  span {
    color: #ff4500;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroDescription = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  max-width: 600px;
  line-height: 1.6;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PrimaryButton = styled(Link)`
  background-color: #ff4500;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  transition: all 0.3s ease;

  &:hover {
    background-color: #cc3700;
    transform: translateY(-3px);
  }
`;

const SecondaryButton = styled(Link)`
  background-color: transparent;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  padding: 0.9rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  border: 2px solid #fff;
  transition: all 0.3s ease;

  &:hover {
    background-color: #fff;
    color: #000;
    transform: translateY(-3px);
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <HeroTagline
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Transform Your Body, Transform Your Life
        </HeroTagline>
        <HeroTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Build Your <span>Perfect Body</span> With Us
        </HeroTitle>
        <HeroDescription
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Join our premier fitness center and get access to state-of-the-art equipment, expert trainers, 
          and specialized classes designed to help you reach your fitness goals.
        </HeroDescription>
        <ButtonGroup
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <PrimaryButton to="/signup">Join Now</PrimaryButton>
          <SecondaryButton to="/classes">View Classes</SecondaryButton>
        </ButtonGroup>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero; 