import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CTAContainer = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1517838277536-f5f99be501cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  color: #fff;
  text-align: center;
`;

const CTAContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

const CTATitle = styled(motion.h2)`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-transform: uppercase;

  span {
    color: #ff4500;
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const CTAText = styled(motion.p)`
  font-size: 1.2rem;
  margin-bottom: 2.5rem;
  line-height: 1.6;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  opacity: 0.9;
`;

const CTAButton = styled(motion(Link))`
  background-color: #ff4500;
  color: #fff;
  font-size: 1.1rem;
  font-weight: 600;
  padding: 1rem 2.5rem;
  border-radius: 30px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1px;
  display: inline-block;
  transition: all 0.3s ease;
  box-shadow: 0 10px 20px rgba(255, 69, 0, 0.3);

  &:hover {
    background-color: #cc3700;
    transform: translateY(-5px);
    box-shadow: 0 15px 25px rgba(255, 69, 0, 0.4);
  }
`;

const CallToAction = () => {
  return (
    <CTAContainer>
      <CTAContent>
        <CTATitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Start Your Fitness Journey <span>Today</span>
        </CTATitle>
        <CTAText
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Take the first step towards a healthier and stronger you. Our expert trainers are ready to guide you
          on your fitness journey with personalized workout plans and support. Join our fitness community now!
        </CTAText>
        <CTAButton
          to="/signup"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get Started
        </CTAButton>
      </CTAContent>
    </CTAContainer>
  );
};

export default CallToAction; 