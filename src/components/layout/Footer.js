import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: #111;
  padding: 4rem 2rem 2rem;
  color: #fff;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;

  @media screen and (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  color: #ff4500;
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-decoration: none;
  font-family: 'Oswald', sans-serif;
  text-transform: uppercase;

  span {
    color: #fff;
  }
`;

const FooterText = styled.p`
  color: #aaa;
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const FooterTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 50px;
    height: 2px;
    background-color: #ff4500;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLink = styled(Link)`
  color: #aaa;
  text-decoration: none;
  margin-bottom: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: #ff4500;
    transform: translateX(5px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: #fff;
  background-color: #333;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.8rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff4500;
    transform: translateY(-3px);
  }
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #aaa;
`;

const ContactIcon = styled.div`
  margin-right: 1rem;
  color: #ff4500;
`;

const Copyright = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  padding-top: 2rem;
  margin-top: 3rem;
  border-top: 1px solid #333;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterLogo to="/">
            Power<span>Gym</span>
          </FooterLogo>
          <FooterText>
            We are dedicated to helping you achieve your fitness goals and lead a healthier lifestyle through our state-of-the-art facilities and expert training programs.
          </FooterText>
          <SocialIcons>
            <SocialIcon href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialIcon>
            <SocialIcon href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/mayursengar?igsh=MXMzNDR5MmRqY3YyMA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialIcon>
          </SocialIcons>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Quick Links</FooterTitle>
          <FooterLinks>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/classes">Classes</FooterLink>
            <FooterLink to="/trainers">Trainers</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/contact">Contact</FooterLink>
          </FooterLinks>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Working Hours</FooterTitle>
          <FooterText>
            <strong>Monday - Friday:</strong><br />
            6:00 AM - 10:00 PM
          </FooterText>
          <FooterText>
            <strong>Saturday - Sunday:</strong><br />
            8:00 AM - 8:00 PM
          </FooterText>
          <FooterLink to="/classes">View Class Schedule</FooterLink>
        </FooterColumn>

        <FooterColumn>
          <FooterTitle>Contact Us</FooterTitle>
          <ContactInfo>
            <ContactIcon>
              <FaMapMarkerAlt />
            </ContactIcon>
            <FooterText>Plot No 65/1, Girad Road, Leena Layout, Bhandarkar Layout, Nagpur, India</FooterText>
          </ContactInfo>
          <ContactInfo>
            <ContactIcon>
              <FaPhoneAlt />
            </ContactIcon>
            <FooterText>+91 8007675438</FooterText>
          </ContactInfo>
          <ContactInfo>
            <ContactIcon>
              <FaEnvelope />
            </ContactIcon>
            <FooterText>mayursengar619@gmail.com</FooterText>
          </ContactInfo>
        </FooterColumn>
      </FooterContent>

      <Copyright>
        &copy; {new Date().getFullYear()} PowerGym. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 