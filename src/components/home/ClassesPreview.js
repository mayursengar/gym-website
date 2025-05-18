import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ClassesContainer = styled.section`
  padding: 5rem 2rem;
  background-color: #fff;
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #222;
  text-transform: uppercase;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.6;
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ClassCard = styled(motion.div)`
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const ClassImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${ClassCard}:hover & img {
    transform: scale(1.1);
  }
`;

const ClassSchedule = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: #ff4500;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const ClassContent = styled.div`
  padding: 1.5rem;
`;

const ClassTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.8rem;
  font-weight: 600;
`;

const ClassDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ClassInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 1rem;
  border-top: 1px solid #eee;
`;

const ClassTrainer = styled.span`
  color: #666;
  font-size: 0.9rem;
  
  strong {
    color: #333;
  }
`;

const ClassLink = styled(Link)`
  color: #ff4500;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s ease;
  
  &:hover {
    color: #cc3700;
  }
`;

const MoreButton = styled(Link)`
  display: block;
  text-align: center;
  margin: 3rem auto 0;
  background-color: transparent;
  color: #ff4500;
  border: 2px solid #ff4500;
  padding: 0.8rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
  max-width: 200px;
  
  &:hover {
    background-color: #ff4500;
    color: #fff;
  }
`;

const ClassesPreview = () => {
  const classes = [
    {
      id: 1,
      title: 'HIIT Workout',
      schedule: 'Mon, Wed, Fri - 6:00 AM',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'High-intensity interval training to boost your metabolism and burn fat effectively.',
      trainer: 'John Davis',
    },
    {
      id: 2,
      title: 'Power Yoga',
      schedule: 'Tue, Thu - 7:30 AM',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Combine physical postures, breathing techniques, and meditation for body and mind.',
      trainer: 'Sarah Johnson',
    },
    {
      id: 3,
      title: 'Strength Training',
      schedule: 'Mon, Wed, Fri - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Build muscle and increase strength with our comprehensive weight training program.',
      trainer: 'Mike Wilson',
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
    <ClassesContainer>
      <SectionHeader>
        <SectionTitle>Featured Classes</SectionTitle>
        <SectionSubtitle>
          Discover our diverse range of fitness classes designed to challenge and inspire you on your fitness journey
        </SectionSubtitle>
      </SectionHeader>

      <ClassesGrid>
        {classes.map((classItem, index) => (
          <ClassCard
            key={classItem.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
          >
            <ClassImage>
              <img src={classItem.image} alt={classItem.title} />
              <ClassSchedule>{classItem.schedule}</ClassSchedule>
            </ClassImage>
            <ClassContent>
              <ClassTitle>{classItem.title}</ClassTitle>
              <ClassDescription>{classItem.description}</ClassDescription>
              <ClassInfo>
                <ClassTrainer>
                  Trainer: <strong>{classItem.trainer}</strong>
                </ClassTrainer>
                <ClassLink to={`/classes/${classItem.id}`}>Learn More</ClassLink>
              </ClassInfo>
            </ClassContent>
          </ClassCard>
        ))}
      </ClassesGrid>

      <MoreButton to="/classes">View All Classes</MoreButton>
    </ClassesContainer>
  );
};

export default ClassesPreview; 