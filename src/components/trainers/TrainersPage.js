import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const TrainersPageContainer = styled.div`
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

const TrainersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
`;

const TrainerCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`;

const TrainerImage = styled.div`
  height: 350px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  ${TrainerCard}:hover & img {
    transform: scale(1.1);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50%;
    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  ${TrainerCard}:hover &::after {
    opacity: 1;
  }
`;

const SocialIcons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 1rem;
  z-index: 1;
  transform: translateY(50px);
  opacity: 0;
  transition: all 0.3s ease;
  
  ${TrainerCard}:hover & {
    transform: translateY(0);
    opacity: 1;
  }
`;

const SocialIcon = styled.a`
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  color: #333;
  border-radius: 50%;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #ff4500;
    color: #fff;
    transform: translateY(-5px);
  }
`;

const TrainerContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TrainerName = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #333;
`;

const TrainerRole = styled.p`
  color: #ff4500;
  font-weight: 500;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const TrainerBio = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const SpecialtyList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Specialty = styled.span`
  padding: 0.4rem 0.8rem;
  background-color: #f5f5f5;
  border-radius: 30px;
  font-size: 0.8rem;
  color: #555;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 5rem 0 3rem;
  color: #333;
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: #ff4500;
  }
`;

const JoinTeamSection = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  text-align: center;
  margin-top: 5rem;
`;

const JoinTeamTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
`;

const JoinTeamText = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 2rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
`;

const JoinButton = styled.a`
  display: inline-block;
  background-color: #ff4500;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #cc3700;
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const TrainersPage = () => {
  const trainers = [
    {
      id: 1,
      name: 'John Davis',
      role: 'Lead Fitness Coach',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'With over 10 years of experience, John specializes in strength training and high-intensity workouts. His sessions are energetic and motivating.',
      specialties: ['HIIT', 'Strength Training', 'Weight Loss'],
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Yoga Instructor',
      image: 'https://images.unsplash.com/photo-1545205576-a37dcd3a31ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Sarah is a certified yoga instructor with expertise in different yoga styles including vinyasa, hatha, and power yoga, focusing on mind-body connection.',
      specialties: ['Yoga', 'Meditation', 'Flexibility'],
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 3,
      name: 'Mike Wilson',
      role: 'Strength & Conditioning',
      image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'As a former athlete, Mike brings expertise in sports-specific training and functional fitness to help you build strength and achieve your performance goals.',
      specialties: ['Strength', 'Sports Performance', 'Functional Training'],
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 4,
      name: 'Emily Parker',
      role: 'Pilates Specialist',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Emily specializes in Pilates and core training, helping clients improve their posture, flexibility, and overall strength through controlled movements.',
      specialties: ['Pilates', 'Core Training', 'Rehabilitation'],
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 5,
      name: 'David Thompson',
      role: 'Cardio & HIIT Coach',
      image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: "David's high-energy workouts combine cardio and HIIT training to maximize calorie burn and improve endurance, making every session challenging and fun.",
      specialties: ['Cardio', 'HIIT', 'Circuit Training'],
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    },
    {
      id: 6,
      name: 'Jessica Miller',
      role: 'Nutrition Coach',
      image: 'https://images.unsplash.com/photo-1529516548873-9ce57c8f155e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      bio: 'Jessica combines fitness training with nutrition guidance to help clients achieve a balanced approach to health and sustainable weight management.',
      specialties: ['Nutrition', 'Weight Management', 'Holistic Health'],
      social: {
        facebook: 'https://facebook.com',
        twitter: 'https://twitter.com',
        instagram: 'https://instagram.com',
        linkedin: 'https://linkedin.com'
      }
    }
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
    <TrainersPageContainer>
      <PageHeader>
        <PageTitle>Our <span>Expert Trainers</span></PageTitle>
        <PageSubtitle>
          Meet our team of certified fitness professionals dedicated to helping you achieve your fitness goals
        </PageSubtitle>
      </PageHeader>

      <TrainersGrid>
        {trainers.map((trainer, index) => (
          <TrainerCard
            key={trainer.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <TrainerImage>
              <img src={trainer.image} alt={trainer.name} />
              <SocialIcons>
                <SocialIcon href={trainer.social.facebook} target="_blank" rel="noopener noreferrer">
                  <FaFacebook />
                </SocialIcon>
                <SocialIcon href={trainer.social.twitter} target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </SocialIcon>
                <SocialIcon href={trainer.social.instagram} target="_blank" rel="noopener noreferrer">
                  <FaInstagram />
                </SocialIcon>
                <SocialIcon href={trainer.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </SocialIcon>
              </SocialIcons>
            </TrainerImage>
            <TrainerContent>
              <TrainerName>{trainer.name}</TrainerName>
              <TrainerRole>{trainer.role}</TrainerRole>
              <TrainerBio>{trainer.bio}</TrainerBio>
              <SpecialtyList>
                {trainer.specialties.map((specialty, i) => (
                  <Specialty key={i}>{specialty}</Specialty>
                ))}
              </SpecialtyList>
            </TrainerContent>
          </TrainerCard>
        ))}
      </TrainersGrid>

      <SectionTitle>Why Train With <span>Us</span></SectionTitle>
      <TrainersGrid>
        <TrainerCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <TrainerContent>
            <TrainerName>Certified Professionals</TrainerName>
            <TrainerBio>All our trainers are certified with nationally recognized certifications and have extensive experience in their specialties.</TrainerBio>
          </TrainerContent>
        </TrainerCard>
        <TrainerCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <TrainerContent>
            <TrainerName>Personalized Approach</TrainerName>
            <TrainerBio>We provide tailored training programs based on your fitness level, goals, and any physical limitations you may have.</TrainerBio>
          </TrainerContent>
        </TrainerCard>
        <TrainerCard
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <TrainerContent>
            <TrainerName>Continuous Support</TrainerName>
            <TrainerBio>Our trainers offer ongoing guidance, motivation, and accountability to help you stay on track with your fitness journey.</TrainerBio>
          </TrainerContent>
        </TrainerCard>
      </TrainersGrid>

      <JoinTeamSection>
        <JoinTeamTitle>Join Our Team</JoinTeamTitle>
        <JoinTeamText>
          Are you a certified fitness professional passionate about helping others achieve their fitness goals? 
          We're always looking for talented trainers to join our team. Send us your resume and let's connect!
        </JoinTeamText>
        <JoinButton href="/contact">Apply Now</JoinButton>
      </JoinTeamSection>
    </TrainersPageContainer>
  );
};

export default TrainersPage; 