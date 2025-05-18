import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaHeart, FaHeartbeat } from 'react-icons/fa';

const FeaturesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #f8f8f8;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #222;
  text-transform: uppercase;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  margin-bottom: 4rem;
  color: #666;
  font-size: 1.1rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const FeatureCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: #ff4500;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: #fff;
  font-size: 1.8rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #222;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Features = () => {
  const featuresList = [
    {
      id: 1,
      icon: <FaDumbbell />,
      title: 'Modern Equipment',
      description: 'Our gym is equipped with the latest fitness technology and high-quality machines for all your training needs.',
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: 'Expert Trainers',
      description: 'Our certified professional trainers are dedicated to helping you achieve your fitness goals with personalized plans.',
    },
    {
      id: 3,
      icon: <FaHeart />,
      title: 'Healthy Lifestyle',
      description: 'We promote a balanced approach to fitness that includes nutrition advice and wellness programs.',
    },
    {
      id: 4,
      icon: <FaHeartbeat />,
      title: 'Diverse Classes',
      description: 'From high-intensity workouts to relaxing yoga sessions, we offer a wide variety of classes for all fitness levels.',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <FeaturesContainer>
      <SectionTitle>Why Choose Us</SectionTitle>
      <SectionSubtitle>
        We provide the perfect environment to help you achieve your fitness goals
      </SectionSubtitle>
      <FeaturesGrid>
        {featuresList.map((feature, index) => (
          <FeatureCard
            key={feature.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </FeaturesContainer>
  );
};

export default Features; 