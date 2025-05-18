import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PricingPageContainer = styled.div`
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

const BillingToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 3rem;
`;

const ToggleOption = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
  color: ${props => props.active ? '#ff4500' : '#666'};
  cursor: pointer;
`;

const ToggleSwitch = styled.div`
  width: 60px;
  height: 30px;
  background-color: ${props => props.isYearly ? '#ff4500' : '#ddd'};
  border-radius: 30px;
  margin: 0 1rem;
  cursor: pointer;
  position: relative;
  transition: background-color 0.3s ease;
  
  &::after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 50%;
    top: 3px;
    left: ${props => props.isYearly ? '33px' : '3px'};
    transition: left 0.3s ease;
  }
`;

const PricingSaveTag = styled.div`
  background-color: #ff4500;
  color: #fff;
  padding: 0.3rem 0.8rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-left: 1rem;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PricingCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  z-index: ${props => props.featured ? 2 : 1};
  
  ${props => props.featured && `
    transform: scale(1.05);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
    border: 2px solid #ff4500;
    
    @media (max-width: 768px) {
      transform: scale(1);
    }
  `}
  
  &:hover {
    transform: ${props => props.featured ? 'scale(1.08)' : 'scale(1.03)'};
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    
    @media (max-width: 768px) {
      transform: translateY(-10px);
    }
  }
`;

const PricingFeaturedTag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #ff4500;
  color: #fff;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-bottom-left-radius: 10px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const PricingHeader = styled.div`
  padding: 2rem;
  text-align: center;
  border-bottom: 1px solid #eee;
`;

const PricingTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #333;
  font-weight: 600;
`;

const PricingPrice = styled.div`
  font-size: 3rem;
  font-weight: 700;
  color: ${props => props.featured ? '#ff4500' : '#333'};
  margin-bottom: 0.5rem;
  
  span {
    font-size: 1.2rem;
    font-weight: 400;
    color: #666;
  }
`;

const PricingInterval = styled.div`
  color: #666;
  font-size: 1rem;
  margin-bottom: 1.5rem;
`;

const PricingContent = styled.div`
  padding: 2rem;
`;

const FeaturesList = styled.ul`
  list-style: none;
  margin-bottom: 2rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: #666;
  
  svg {
    margin-right: 1rem;
    color: ${props => props.available ? '#4CAF50' : '#f44336'};
  }
`;

const PricingButton = styled(Link)`
  display: block;
  width: 100%;
  padding: 1rem;
  text-align: center;
  background-color: ${props => props.featured ? '#ff4500' : '#333'};
  color: #fff;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.featured ? '#cc3700' : '#000'};
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const ComparissonSection = styled.div`
  max-width: 1000px;
  margin: 5rem auto 0;
`;

const ComparissonTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: #ff4500;
  }
`;

const ComparissonTable = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const TableHeader = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  background-color: #333;
  color: #fff;
  padding: 1.5rem 1rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid #eee;
  align-items: center;
  padding: 1.2rem 1rem;
  text-align: center;

  &:nth-child(even) {
    background-color: #f8f8f8;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    text-align: left;
    padding: 1.5rem 1rem;
    
    > div:first-child {
      font-weight: 600;
      margin-bottom: 0.5rem;
    }
    
    > div:not(:first-child) {
      display: flex;
      justify-content: space-between;
      
      &::before {
        content: attr(data-label);
        font-weight: 600;
      }
    }
  }
`;

const TableFeature = styled.div`
  font-weight: 500;
  color: #333;
  text-align: left;
`;

const TableCell = styled.div`
  svg {
    color: ${props => props.check ? '#4CAF50' : '#f44336'};
  }

  @media (max-width: 768px) {
    &[data-label] {
      padding-left: 1rem;
    }
  }
`;

const FaqSection = styled.div`
  max-width: 900px;
  margin: 5rem auto 0;
`;

const FaqTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #333;
  text-transform: uppercase;
  font-weight: 700;

  span {
    color: #ff4500;
  }
`;

const FaqList = styled.div`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const FaqItem = styled.div`
  border-bottom: 1px solid #eee;
  padding: 1.5rem;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FaqQuestion = styled.h3`
  font-size: 1.2rem;
  color: #333;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FaqAnswer = styled.p`
  color: #666;
  line-height: 1.6;
`;

const PricingPage = () => {
  const [isYearly, setIsYearly] = useState(false);

  const monthlyPlans = [
    {
      id: 1,
      title: 'Basic',
      price: '₹999',
      interval: 'per month',
      features: [
        { text: 'Access to gym floor', available: true },
        { text: 'Basic equipment use', available: true },
        { text: 'Locker room access', available: true },
        { text: 'Group classes (2 per month)', available: true },
        { text: 'Trainer assessment (1 session)', available: true },
        { text: 'Personal training sessions', available: false },
        { text: 'Nutrition consultation', available: false },
        { text: 'Access to all locations', available: false },
      ],
      featured: false,
      buttonText: 'Get Started'
    },
    {
      id: 2,
      title: 'Premium',
      price: '₹1,999',
      interval: 'per month',
      features: [
        { text: 'Access to gym floor', available: true },
        { text: 'Full equipment use', available: true },
        { text: 'Locker room access', available: true },
        { text: 'Unlimited group classes', available: true },
        { text: 'Trainer assessment (2 sessions)', available: true },
        { text: 'Personal training sessions (2 per month)', available: true },
        { text: 'Nutrition consultation', available: false },
        { text: 'Access to all locations', available: false },
      ],
      featured: true,
      buttonText: 'Join Now'
    },
    {
      id: 3,
      title: 'Elite',
      price: '₹2,999',
      interval: 'per month',
      features: [
        { text: 'Access to gym floor', available: true },
        { text: 'Full equipment use', available: true },
        { text: 'Locker room access with towel service', available: true },
        { text: 'Unlimited group classes', available: true },
        { text: 'Trainer assessment (4 sessions)', available: true },
        { text: 'Personal training sessions (4 per month)', available: true },
        { text: 'Nutrition consultation', available: true },
        { text: 'Access to all locations', available: true },
      ],
      featured: false,
      buttonText: 'Choose Elite'
    }
  ];

  const yearlyPlans = [
    {
      id: 1,
      title: 'Basic',
      price: '₹9,999',
      interval: 'per year (save ₹1,989)',
      features: [
        { text: 'Access to gym floor', available: true },
        { text: 'Basic equipment use', available: true },
        { text: 'Locker room access', available: true },
        { text: 'Group classes (2 per month)', available: true },
        { text: 'Trainer assessment (1 session)', available: true },
        { text: 'Personal training sessions', available: false },
        { text: 'Nutrition consultation', available: false },
        { text: 'Access to all locations', available: false },
      ],
      featured: false,
      buttonText: 'Get Started'
    },
    {
      id: 2,
      title: 'Premium',
      price: '₹19,999',
      interval: 'per year (save ₹3,989)',
      features: [
        { text: 'Access to gym floor', available: true },
        { text: 'Full equipment use', available: true },
        { text: 'Locker room access', available: true },
        { text: 'Unlimited group classes', available: true },
        { text: 'Trainer assessment (2 sessions)', available: true },
        { text: 'Personal training sessions (2 per month)', available: true },
        { text: 'Nutrition consultation', available: false },
        { text: 'Access to all locations', available: false },
      ],
      featured: true,
      buttonText: 'Join Now'
    },
    {
      id: 3,
      title: 'Elite',
      price: '₹29,999',
      interval: 'per year (save ₹5,989)',
      features: [
        { text: 'Access to gym floor', available: true },
        { text: 'Full equipment use', available: true },
        { text: 'Locker room access with towel service', available: true },
        { text: 'Unlimited group classes', available: true },
        { text: 'Trainer assessment (4 sessions)', available: true },
        { text: 'Personal training sessions (4 per month)', available: true },
        { text: 'Nutrition consultation', available: true },
        { text: 'Access to all locations', available: true },
      ],
      featured: false,
      buttonText: 'Choose Elite'
    }
  ];

  const plans = isYearly ? yearlyPlans : monthlyPlans;

  const toggleBilling = () => {
    setIsYearly(!isYearly);
  };

  const planFeatures = [
    { feature: 'Access to Gym Floor', basic: true, premium: true, elite: true },
    { feature: 'Equipment Use', basic: 'Basic Only', premium: 'Full Access', elite: 'Full Access' },
    { feature: 'Locker Room', basic: 'Basic', premium: 'Standard', elite: 'Premium w/ Towels' },
    { feature: 'Group Classes', basic: '2 per month', premium: 'Unlimited', elite: 'Unlimited' },
    { feature: 'Trainer Assessment', basic: '1 session', premium: '2 sessions', elite: '4 sessions' },
    { feature: 'Personal Training', basic: false, premium: '2 per month', elite: '4 per month' },
    { feature: 'Nutrition Consultation', basic: false, premium: false, elite: true },
    { feature: 'Multi-Location Access', basic: false, premium: false, elite: true },
    { feature: 'Guest Passes', basic: false, premium: '2 per month', elite: 'Unlimited' },
    { feature: 'Discounts on Pro Shop', basic: '5%', premium: '10%', elite: '15%' }
  ];

  const faqItems = [
    {
      question: 'Can I cancel my membership at any time?',
      answer: 'Yes, you can cancel your monthly membership at any time with 30 days notice. Annual memberships can be canceled with a small cancellation fee or under special circumstances outlined in our membership terms.'
    },
    {
      question: 'Do you offer family discounts?',
      answer: 'Yes, we offer a 10% discount for each additional family member who joins under the same plan. Please inquire at the front desk for more details.'
    },
    {
      question: 'Is there a joining fee?',
      answer: 'We occasionally run promotions where the joining fee is waived. Standard joining fee is $49, which covers your key card, initial fitness assessment, and welcome pack.'
    },
    {
      question: 'What happens if I want to upgrade my membership?',
      answer: 'You can upgrade your membership at any time! The price difference will be prorated for the remainder of your billing cycle.'
    },
    {
      question: 'Are there any age restrictions?',
      answer: 'Members must be at least 16 years old. Members aged 16-17 require parent/guardian consent and must be accompanied by an adult during certain hours.'
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
    <PricingPageContainer>
      <PageHeader>
        <PageTitle>Membership <span>Plans</span></PageTitle>
        <PageSubtitle>
          Choose the perfect membership plan to fit your fitness needs and budget
        </PageSubtitle>
      </PageHeader>

      <BillingToggle>
        <ToggleOption active={!isYearly}>Monthly</ToggleOption>
        <ToggleSwitch isYearly={isYearly} onClick={toggleBilling} />
        <ToggleOption active={isYearly}>Yearly</ToggleOption>
        <PricingSaveTag>Save up to 20%</PricingSaveTag>
      </BillingToggle>

      <PricingGrid>
        {plans.map((plan, index) => (
          <PricingCard
            key={plan.id}
            featured={plan.featured}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            {plan.featured && <PricingFeaturedTag>Most Popular</PricingFeaturedTag>}
            <PricingHeader>
              <PricingTitle>{plan.title}</PricingTitle>
              <PricingPrice featured={plan.featured}>{plan.price} <span>/</span></PricingPrice>
              <PricingInterval>{plan.interval}</PricingInterval>
            </PricingHeader>
            <PricingContent>
              <FeaturesList>
                {plan.features.map((feature, i) => (
                  <FeatureItem key={i} available={feature.available}>
                    {feature.available ? <FaCheck /> : <FaTimes />}
                    {feature.text}
                  </FeatureItem>
                ))}
              </FeaturesList>
              <PricingButton to="/signup" featured={plan.featured}>
                {plan.buttonText}
              </PricingButton>
            </PricingContent>
          </PricingCard>
        ))}
      </PricingGrid>

      <ComparissonSection>
        <ComparissonTitle>Feature <span>Comparison</span></ComparissonTitle>
        <ComparissonTable>
          <TableHeader>
            <div>Feature</div>
            <div>Basic</div>
            <div>Premium</div>
            <div>Elite</div>
          </TableHeader>
          {planFeatures.map((item, index) => (
            <TableRow key={index}>
              <TableFeature>{item.feature}</TableFeature>
              <TableCell data-label="Basic" check={item.basic !== false}>
                {typeof item.basic === 'boolean' ? (item.basic ? <FaCheck /> : <FaTimes />) : item.basic}
              </TableCell>
              <TableCell data-label="Premium" check={item.premium !== false}>
                {typeof item.premium === 'boolean' ? (item.premium ? <FaCheck /> : <FaTimes />) : item.premium}
              </TableCell>
              <TableCell data-label="Elite" check={item.elite !== false}>
                {typeof item.elite === 'boolean' ? (item.elite ? <FaCheck /> : <FaTimes />) : item.elite}
              </TableCell>
            </TableRow>
          ))}
        </ComparissonTable>
      </ComparissonSection>

      <FaqSection>
        <FaqTitle>Frequently Asked <span>Questions</span></FaqTitle>
        <FaqList>
          {faqItems.map((item, index) => (
            <FaqItem key={index}>
              <FaqQuestion>{item.question}</FaqQuestion>
              <FaqAnswer>{item.answer}</FaqAnswer>
            </FaqItem>
          ))}
        </FaqList>
      </FaqSection>
    </PricingPageContainer>
  );
};

export default PricingPage; 