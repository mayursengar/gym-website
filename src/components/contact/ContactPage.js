import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const ContactPageContainer = styled.div`
  padding: 6rem 2rem;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: #333;
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: #ff4500;
  }
`;

const PageSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.6;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  height: 150px;
  resize: vertical;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M12 14l-4-4h8z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 1rem center;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const SubmitButton = styled.button`
  background-color: #ff4500;
  color: #fff;
  border: none;
  padding: 1rem 2rem;
  border-radius: 5px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 1rem;

  &:hover {
    background-color: #cc3700;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`;

const ContactInfo = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
`;

const InfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
`;

const InfoList = styled.div`
  margin-bottom: 2.5rem;
`;

const InfoItem = styled.div`
  display: flex;
  margin-bottom: 1.5rem;
`;

const InfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: #ff4500;
  flex-shrink: 0;
`;

const InfoContent = styled.div`
  color: #666;
`;

const InfoHeading = styled.h3`
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 0.3rem;
  font-weight: 600;
`;

const InfoText = styled.p`
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: #f5f5f5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff4500;
    color: #fff;
    transform: translateY(-3px);
  }
`;

const MapContainer = styled.div`
  margin-top: 4rem;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  height: 400px;
  width: 100%;
`;

const Map = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

const SuccessMessage = styled(motion.div)`
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  display: ${props => props.visible ? 'block' : 'none'};
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <ContactPageContainer>
      <PageHeader>
        <PageTitle>Get In <span>Touch</span></PageTitle>
        <PageSubtitle>
          Have questions or ready to start your fitness journey? Contact us today and our team will be happy to assist you.
        </PageSubtitle>
      </PageHeader>

      <ContactGrid>
        <ContactForm
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormTitle>Send Us a Message</FormTitle>
          
          {isSubmitted && (
            <SuccessMessage 
              visible={isSubmitted}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              Thank you for your message! We'll get back to you as soon as possible.
            </SuccessMessage>
          )}
          
          <Form onSubmit={handleSubmit}>
            <FormRow>
              <FormGroup>
                <FormLabel>First Name</FormLabel>
                <FormInput 
                  type="text" 
                  name="firstName" 
                  value={formData.firstName} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Last Name</FormLabel>
                <FormInput 
                  type="text" 
                  name="lastName" 
                  value={formData.lastName} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
            </FormRow>
            
            <FormRow>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Phone (optional)</FormLabel>
                <FormInput 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange} 
                />
              </FormGroup>
            </FormRow>
            
            <FormGroup>
              <FormLabel>Subject</FormLabel>
              <FormSelect 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required
              >
                <option value="">Select a subject</option>
                <option value="membership">Membership Inquiry</option>
                <option value="classes">Class Information</option>
                <option value="trainers">Personal Training</option>
                <option value="facilities">Facility Information</option>
                <option value="other">Other</option>
              </FormSelect>
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Message</FormLabel>
              <FormTextarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                required
              />
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </SubmitButton>
          </Form>
        </ContactForm>

        <ContactInfo
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <InfoTitle>Contact Information</InfoTitle>
          
          <InfoList>
            <InfoItem>
              <InfoIcon>
                <FaMapMarkerAlt />
              </InfoIcon>
              <InfoContent>
                <InfoHeading>Our Location</InfoHeading>
                <InfoText>Plot No 65/1, Girad Road, Leena Layout, Bhandarkar Layout, Nagpur, India</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaPhoneAlt />
              </InfoIcon>
              <InfoContent>
                <InfoHeading>Phone Number</InfoHeading>
                <InfoText>+91 8007675438</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaEnvelope />
              </InfoIcon>
              <InfoContent>
                <InfoHeading>Email Address</InfoHeading>
                <InfoText>mayursengar619@gmail.com</InfoText>
              </InfoContent>
            </InfoItem>
            
            <InfoItem>
              <InfoIcon>
                <FaClock />
              </InfoIcon>
              <InfoContent>
                <InfoHeading>Working Hours</InfoHeading>
                <InfoText>
                  Monday - Friday: 6:00 AM - 10:00 PM<br />
                  Saturday - Sunday: 8:00 AM - 8:00 PM
                </InfoText>
              </InfoContent>
            </InfoItem>
          </InfoList>
          
          <InfoHeading>Follow Us</InfoHeading>
          <SocialLinks>
            <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="https://www.instagram.com/mayursengar?igsh=MXMzNDR5MmRqY3YyMA==" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
      </ContactGrid>

      <MapContainer>
        <Map 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59407.66850968666!2d79.0230200074674!3d21.148828458045474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0a5a31faf13%3A0x19b37d06d0bb3e2b!2sNagpur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716909176361!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          title="Gym Location - Nagpur"
        />
      </MapContainer>
    </ContactPageContainer>
  );
};

export default ContactPage; 