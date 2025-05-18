import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaClock, FaUserFriends, FaRegCalendarAlt } from 'react-icons/fa';

const ClassesPageContainer = styled.div`
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

const ClassesFilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  flex-wrap: wrap;
  gap: 1rem;
`;

const FilterButton = styled.button`
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  background-color: ${props => props.active ? '#ff4500' : 'transparent'};
  color: ${props => props.active ? '#fff' : '#666'};
  border: 2px solid ${props => props.active ? '#ff4500' : '#ddd'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff4500;
    color: #fff;
    border-color: #ff4500;
  }
`;

const ClassesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ClassCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
`;

const ClassImage = styled.div`
  height: 250px;
  overflow: hidden;
  
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

const ClassContent = styled.div`
  padding: 1.5rem;
`;

const ClassTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.8rem;
  color: #333;
`;

const ClassDescription = styled.p`
  color: #666;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const ClassMeta = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.8rem;
  color: #666;
`;

const MetaIcon = styled.div`
  color: #ff4500;
  margin-right: 0.8rem;
  font-size: 1.1rem;
  width: 20px;
  text-align: center;
`;

const ScheduleTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin: 5rem 0 3rem;
  color: #333;
  text-transform: uppercase;
`;

const ScheduleTable = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  overflow: hidden;
`;

const ScheduleHeader = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  background-color: #333;
  color: #fff;
  padding: 1rem;
  font-weight: 600;
  text-align: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const TimeSlotHeader = styled.div`
  grid-column: 1;
  font-weight: 600;
`;

const ScheduleRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 1rem;
  border-bottom: 1px solid #eee;
  align-items: center;
  text-align: center;

  &:nth-child(even) {
    background-color: #f9f9f9;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    text-align: left;
    position: relative;
    padding-left: 120px;

    &::before {
      content: attr(data-time);
      position: absolute;
      left: 1rem;
      font-weight: 600;
    }
  }
`;

const TimeSlot = styled.div`
  font-weight: 600;
  color: #333;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ClassSession = styled.div`
  background-color: ${props => props.bgColor || '#fff'};
  color: ${props => props.textColor || '#333'};
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;

  @media (max-width: 768px) {
    &:empty {
      display: none;
    }
  }
`;

const ClassesPage = () => {
  const classes = [
    {
      id: 1,
      title: 'HIIT Workout',
      description: 'High-intensity interval training that alternates short periods of intense exercise with less intense recovery periods. Perfect for burning fat and improving cardiovascular health.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '45 minutes',
      capacity: '20 people',
      schedule: 'Mon, Wed, Fri - 6:00 AM, 5:30 PM',
      category: 'cardio'
    },
    {
      id: 2,
      title: 'Power Yoga',
      description: 'A fitness-based approach to vinyasa-style yoga that emphasizes strength and flexibility. This class will help improve your posture, balance, and mental focus.',
      image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60 minutes',
      capacity: '15 people',
      schedule: 'Tue, Thu - 7:30 AM, 6:00 PM',
      category: 'mind'
    },
    {
      id: 3,
      title: 'Strength Training',
      description: 'A comprehensive weight training program designed to build muscle mass, increase strength, and enhance overall fitness with both free weights and machines.',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60 minutes',
      capacity: '12 people',
      schedule: 'Mon, Wed, Fri - 7:30 AM, 6:30 PM',
      category: 'strength'
    },
    {
      id: 4,
      title: 'Spinning',
      description: 'An indoor cycling workout that combines cardio and strength training. Burn calories and build endurance in this energetic class led by experienced instructors.',
      image: 'https://images.unsplash.com/photo-1561214078-f3247647fc5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '45 minutes',
      capacity: '18 people',
      schedule: 'Tue, Thu, Sat - 6:00 AM, 5:00 PM',
      category: 'cardio'
    },
    {
      id: 5,
      title: 'Pilates',
      description: 'A method of exercise that focuses on improving flexibility, strength, and body awareness without building bulk. Great for toning the core and improving posture.',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '50 minutes',
      capacity: '15 people',
      schedule: 'Mon, Wed - 9:00 AM, 4:00 PM',
      category: 'mind'
    },
    {
      id: 6,
      title: 'Boxing',
      description: 'Learn proper boxing techniques while getting a full-body workout. Improve coordination, strength, and cardiovascular fitness in this high-energy class.',
      image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      duration: '60 minutes',
      capacity: '16 people',
      schedule: 'Tue, Thu, Sat - 8:30 AM, 7:00 PM',
      category: 'strength'
    },
  ];

  const schedule = [
    {
      time: '06:00 AM',
      monday: { name: 'HIIT', color: '#ff4500', textColor: '#fff' },
      tuesday: { name: 'Spinning', color: '#4CAF50', textColor: '#fff' },
      wednesday: { name: 'HIIT', color: '#ff4500', textColor: '#fff' },
      thursday: { name: 'Spinning', color: '#4CAF50', textColor: '#fff' },
      friday: { name: 'HIIT', color: '#ff4500', textColor: '#fff' },
      saturday: { name: 'Spinning', color: '#4CAF50', textColor: '#fff' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '07:30 AM',
      monday: { name: 'Strength', color: '#2196F3', textColor: '#fff' },
      tuesday: { name: 'Yoga', color: '#9C27B0', textColor: '#fff' },
      wednesday: { name: 'Strength', color: '#2196F3', textColor: '#fff' },
      thursday: { name: 'Yoga', color: '#9C27B0', textColor: '#fff' },
      friday: { name: 'Strength', color: '#2196F3', textColor: '#fff' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '08:30 AM',
      monday: { name: '', color: '', textColor: '' },
      tuesday: { name: 'Boxing', color: '#FF9800', textColor: '#fff' },
      wednesday: { name: '', color: '', textColor: '' },
      thursday: { name: 'Boxing', color: '#FF9800', textColor: '#fff' },
      friday: { name: '', color: '', textColor: '' },
      saturday: { name: 'Boxing', color: '#FF9800', textColor: '#fff' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '09:00 AM',
      monday: { name: 'Pilates', color: '#607D8B', textColor: '#fff' },
      tuesday: { name: '', color: '', textColor: '' },
      wednesday: { name: 'Pilates', color: '#607D8B', textColor: '#fff' },
      thursday: { name: '', color: '', textColor: '' },
      friday: { name: '', color: '', textColor: '' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '04:00 PM',
      monday: { name: 'Pilates', color: '#607D8B', textColor: '#fff' },
      tuesday: { name: '', color: '', textColor: '' },
      wednesday: { name: 'Pilates', color: '#607D8B', textColor: '#fff' },
      thursday: { name: '', color: '', textColor: '' },
      friday: { name: '', color: '', textColor: '' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '05:00 PM',
      monday: { name: '', color: '', textColor: '' },
      tuesday: { name: 'Spinning', color: '#4CAF50', textColor: '#fff' },
      wednesday: { name: '', color: '', textColor: '' },
      thursday: { name: 'Spinning', color: '#4CAF50', textColor: '#fff' },
      friday: { name: '', color: '', textColor: '' },
      saturday: { name: 'Spinning', color: '#4CAF50', textColor: '#fff' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '05:30 PM',
      monday: { name: 'HIIT', color: '#ff4500', textColor: '#fff' },
      tuesday: { name: '', color: '', textColor: '' },
      wednesday: { name: 'HIIT', color: '#ff4500', textColor: '#fff' },
      thursday: { name: '', color: '', textColor: '' },
      friday: { name: 'HIIT', color: '#ff4500', textColor: '#fff' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '06:00 PM',
      monday: { name: '', color: '', textColor: '' },
      tuesday: { name: 'Yoga', color: '#9C27B0', textColor: '#fff' },
      wednesday: { name: '', color: '', textColor: '' },
      thursday: { name: 'Yoga', color: '#9C27B0', textColor: '#fff' },
      friday: { name: '', color: '', textColor: '' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '06:30 PM',
      monday: { name: 'Strength', color: '#2196F3', textColor: '#fff' },
      tuesday: { name: '', color: '', textColor: '' },
      wednesday: { name: 'Strength', color: '#2196F3', textColor: '#fff' },
      thursday: { name: '', color: '', textColor: '' },
      friday: { name: 'Strength', color: '#2196F3', textColor: '#fff' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
    },
    {
      time: '07:00 PM',
      monday: { name: '', color: '', textColor: '' },
      tuesday: { name: 'Boxing', color: '#FF9800', textColor: '#fff' },
      wednesday: { name: '', color: '', textColor: '' },
      thursday: { name: 'Boxing', color: '#FF9800', textColor: '#fff' },
      friday: { name: '', color: '', textColor: '' },
      saturday: { name: '', color: '', textColor: '' },
      sunday: { name: '', color: '', textColor: '' },
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
    <ClassesPageContainer>
      <PageHeader>
        <PageTitle>Our <span>Classes</span></PageTitle>
        <PageSubtitle>
          Discover our diverse range of fitness classes designed to challenge and inspire you on your fitness journey
        </PageSubtitle>
      </PageHeader>

      <ClassesFilterContainer>
        <FilterButton active>All Classes</FilterButton>
        <FilterButton>Cardio</FilterButton>
        <FilterButton>Strength</FilterButton>
        <FilterButton>Mind & Body</FilterButton>
      </ClassesFilterContainer>

      <ClassesGrid>
        {classes.map((classItem, index) => (
          <ClassCard
            key={classItem.id}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
          >
            <ClassImage>
              <img src={classItem.image} alt={classItem.title} />
            </ClassImage>
            <ClassContent>
              <ClassTitle>{classItem.title}</ClassTitle>
              <ClassDescription>{classItem.description}</ClassDescription>
              
              <ClassMeta>
                <MetaIcon>
                  <FaClock />
                </MetaIcon>
                <span>{classItem.duration}</span>
              </ClassMeta>
              
              <ClassMeta>
                <MetaIcon>
                  <FaUserFriends />
                </MetaIcon>
                <span>Capacity: {classItem.capacity}</span>
              </ClassMeta>
              
              <ClassMeta>
                <MetaIcon>
                  <FaRegCalendarAlt />
                </MetaIcon>
                <span>{classItem.schedule}</span>
              </ClassMeta>
            </ClassContent>
          </ClassCard>
        ))}
      </ClassesGrid>

      <ScheduleTitle>Weekly Schedule</ScheduleTitle>
      <ScheduleTable>
        <ScheduleHeader>
          <TimeSlotHeader>Time</TimeSlotHeader>
          <div>Monday</div>
          <div>Tuesday</div>
          <div>Wednesday</div>
          <div>Thursday</div>
          <div>Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </ScheduleHeader>

        {schedule.map((slot, index) => (
          <ScheduleRow key={index} data-time={slot.time}>
            <TimeSlot>{slot.time}</TimeSlot>
            <ClassSession bgColor={slot.monday.color} textColor={slot.monday.textColor}>
              {slot.monday.name}
            </ClassSession>
            <ClassSession bgColor={slot.tuesday.color} textColor={slot.tuesday.textColor}>
              {slot.tuesday.name}
            </ClassSession>
            <ClassSession bgColor={slot.wednesday.color} textColor={slot.wednesday.textColor}>
              {slot.wednesday.name}
            </ClassSession>
            <ClassSession bgColor={slot.thursday.color} textColor={slot.thursday.textColor}>
              {slot.thursday.name}
            </ClassSession>
            <ClassSession bgColor={slot.friday.color} textColor={slot.friday.textColor}>
              {slot.friday.name}
            </ClassSession>
            <ClassSession bgColor={slot.saturday.color} textColor={slot.saturday.textColor}>
              {slot.saturday.name}
            </ClassSession>
            <ClassSession bgColor={slot.sunday.color} textColor={slot.sunday.textColor}>
              {slot.sunday.name}
            </ClassSession>
          </ScheduleRow>
        ))}
      </ScheduleTable>
    </ClassesPageContainer>
  );
};

export default ClassesPage; 