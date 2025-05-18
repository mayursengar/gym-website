import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaDumbbell, FaUsers, FaHistory, FaMedal } from 'react-icons/fa';

const AboutPageContainer = styled.div`
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

const Section = styled.section`
  margin-bottom: 5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
  
  span {
    color: #ff4500;
  }
`;

const StorySection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const StoryImage = styled.div`
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const StoryContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const StoryTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
  
  span {
    color: #ff4500;
  }
`;

const StoryText = styled.p`
  color: #666;
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
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
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
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
  color: #333;
`;

const FeatureText = styled.p`
  color: #666;
  line-height: 1.6;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const TeamCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

const TeamImage = styled.div`
  height: 300px;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease;
    
    &:hover {
      transform: scale(1.05);
    }
  }
`;

const TeamContent = styled.div`
  padding: 1.5rem;
  text-align: center;
`;

const TeamName = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #333;
`;

const TeamRole = styled.p`
  color: #ff4500;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const TeamBio = styled.p`
  color: #666;
  line-height: 1.6;
`;

const AboutPage = () => {
  return (
    <AboutPageContainer>
      <PageHeader>
        <PageTitle>About <span>Us</span></PageTitle>
        <PageSubtitle>
          Learn about our mission, our story, and the team that makes our gym special
        </PageSubtitle>
      </PageHeader>
      
      <Section>
        <StorySection>
          <StoryImage>
            <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" alt="Our Gym" />
          </StoryImage>
          <StoryContent>
            <StoryTitle>Our <span>Story</span></StoryTitle>
            <StoryText>
              Founded in 2015, Power Gym began with a simple mission: to create a fitness environment that is both welcoming and effective for people of all fitness levels. What started as a small studio in Nagpur has grown into a state-of-the-art facility with the latest equipment and expert trainers.
            </StoryText>
            <StoryText>
              Our founder, Mayur Sengar, a fitness enthusiast and certified personal trainer, recognized the need for a gym that balances professional training with a supportive community atmosphere. This vision has shaped Power Gym into what it is today – a place where fitness goals become achievements.
            </StoryText>
          </StoryContent>
        </StorySection>
      </Section>
      
      <Section>
        <SectionTitle>Why Choose <span>Us</span></SectionTitle>
        <FeaturesGrid>
          <FeatureCard 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <FaDumbbell />
            </FeatureIcon>
            <FeatureTitle>Modern Equipment</FeatureTitle>
            <FeatureText>
              Our facility is equipped with the latest, high-quality fitness equipment to ensure you get the most effective workout every time you visit.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <FaUsers />
            </FeatureIcon>
            <FeatureTitle>Expert Trainers</FeatureTitle>
            <FeatureText>
              Our team of certified trainers is passionate about fitness and dedicated to helping you achieve your personal health and fitness goals.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <FaHistory />
            </FeatureIcon>
            <FeatureTitle>Flexible Hours</FeatureTitle>
            <FeatureText>
              With early morning and late evening hours, our gym accommodates your busy schedule, helping you maintain your fitness routine without compromise.
            </FeatureText>
          </FeatureCard>
          
          <FeatureCard 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <FeatureIcon>
              <FaMedal />
            </FeatureIcon>
            <FeatureTitle>Proven Results</FeatureTitle>
            <FeatureText>
              Our programs and training methods are designed to deliver real results. Join the many members who have transformed their lives with us.
            </FeatureText>
          </FeatureCard>
        </FeaturesGrid>
      </Section>
      
      <Section>
        <SectionTitle>Our <span>Mission</span></SectionTitle>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <StoryText>
            Our mission is to inspire and empower individuals to improve their quality of life through fitness. We are committed to providing a supportive and motivating environment, professional guidance, and the tools necessary for our members to achieve their fitness goals.
          </StoryText>
          <StoryText>
            We believe fitness is for everyone, regardless of age, experience, or current fitness level. By fostering a community of like-minded individuals and offering personalized training solutions, we aim to make fitness an enjoyable and sustainable part of everyday life.
          </StoryText>
        </div>
      </Section>
      
      <Section>
        <SectionTitle>Leadership <span>Team</span></SectionTitle>
        <TeamGrid>
          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <TeamImage>
              <img src="https://i.postimg.cc/nzYtR3Dn/mayur-sengar.jpg" alt="Mayur Sengar" />
            </TeamImage>
            <TeamContent>
              <TeamName>Mayur Sengar</TeamName>
              <TeamRole>Founder & CEO</TeamRole>
              <TeamBio>
                With over 10 years of experience in fitness industry, Mayur has dedicated his career to helping people transform their lives through fitness.
              </TeamBio>
            </TeamContent>
          </TeamCard>
          
          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <TeamImage>
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Sarah Johnson" />
            </TeamImage>
            <TeamContent>
              <TeamName>Sarah Johnson</TeamName>
              <TeamRole>Fitness Director</TeamRole>
              <TeamBio>
                Sarah oversees our training programs and ensures that all members receive the highest quality instruction and support in their fitness journey.
              </TeamBio>
            </TeamContent>
          </TeamCard>
          
          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <TeamImage>
              <img src="https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Mike Wilson" />
            </TeamImage>
            <TeamContent>
              <TeamName>Mike Wilson</TeamName>
              <TeamRole>Head Trainer</TeamRole>
              <TeamBio>
                Mike leads our team of trainers and specializes in strength training and functional fitness. His approach focuses on building sustainable fitness habits.
              </TeamBio>
            </TeamContent>
          </TeamCard>

          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <TeamImage>
              <img src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Jennifer Lee" />
            </TeamImage>
            <TeamContent>
              <TeamName>Jennifer Lee</TeamName>
              <TeamRole>Yoga Instructor</TeamRole>
              <TeamBio>
                Jennifer brings over 8 years of yoga teaching experience, helping members improve flexibility, balance, and mental focus through specialized yoga programs.
              </TeamBio>
            </TeamContent>
          </TeamCard>

          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <TeamImage>
              <img src="https://images.unsplash.com/photo-1594759849645-15cc8b8d107a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="David Rodriguez" />
            </TeamImage>
            <TeamContent>
              <TeamName>David Rodriguez</TeamName>
              <TeamRole>Nutrition Specialist</TeamRole>
              <TeamBio>
                David helps members develop personalized nutrition plans that complement their fitness regimens, ensuring holistic health and optimal performance.
              </TeamBio>
            </TeamContent>
          </TeamCard>

          <TeamCard
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <TeamImage>
              <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" alt="Emma Chen" />
            </TeamImage>
            <TeamContent>
              <TeamName>Emma Chen</TeamName>
              <TeamRole>Client Relations Manager</TeamRole>
              <TeamBio>
                Emma ensures our members have the best possible experience, handling everything from membership questions to facility feedback and special requests.
              </TeamBio>
            </TeamContent>
          </TeamCard>
        </TeamGrid>
      </Section>
    </AboutPageContainer>
  );
};

export default AboutPage; 