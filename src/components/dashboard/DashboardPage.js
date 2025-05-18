import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  FaCalendarAlt, 
  FaCreditCard, 
  FaDumbbell, 
  FaUserCircle, 
  FaSignOutAlt,
  FaCheckCircle,
  FaChartLine
} from 'react-icons/fa';

const DashboardContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f8f9fa;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #333;
  color: #fff;
  padding: 2rem 0;
  
  @media (max-width: 768px) {
    width: 100%;
    padding: 1rem 0;
  }
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1.5rem 1.5rem;
  border-bottom: 1px solid #444;
  margin-bottom: 1.5rem;
`;

const UserAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ff4500;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const UserName = styled.h3`
  margin: 0;
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
`;

const UserEmail = styled.p`
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
`;

const NavMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  padding: 0;
`;

const NavLink = styled.button`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem 1.5rem;
  color: ${props => props.active ? '#ff4500' : '#fff'};
  background-color: ${props => props.active ? '#444' : 'transparent'};
  border: none;
  text-align: left;
  font-size: 1rem;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #444;
    color: #ff4500;
  }
  
  svg {
    margin-right: 0.8rem;
    font-size: 1.2rem;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WelcomeText = styled.div`
  h1 {
    font-size: 2rem;
    margin: 0 0 0.5rem 0;
    
    span {
      color: #ff4500;
    }
  }
  
  p {
    color: #666;
    margin: 0;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  background-color: #f44336;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    background-color: #d32f2f;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const Card = styled(motion.div)`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  color: #333;
`;

const CardIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background-color: ${props => props.bgColor || '#ff4500'};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const MainSection = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin: 0 0 1.5rem 0;
  display: flex;
  align-items: center;

  svg {
    margin-right: 0.8rem;
    color: #ff4500;
  }
`;

const AttendanceTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 0.8rem 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }
  
  th {
    font-weight: 600;
    color: #555;
  }
  
  tbody tr:hover {
    background-color: #f9f9f9;
  }
`;

const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  padding: 0.3rem 0.8rem;
  border-radius: 50px;
  font-size: 0.8rem;
  font-weight: 500;
  background-color: ${props => props.present ? '#e8f5e9' : '#ffebee'};
  color: ${props => props.present ? '#43a047' : '#e53935'};
  
  svg {
    margin-right: 0.3rem;
  }
`;

const ProgressBar = styled.div`
  height: 8px;
  background-color: #eee;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 0.5rem;
  
  div {
    height: 100%;
    background-color: ${props => props.color || '#ff4500'};
    width: ${props => props.progress || '0%'};
    transition: width 0.5s ease;
  }
`;

const FeeHistory = styled.div`
  margin-top: 1rem;
`;

const FeeItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid #eee;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FeeDetails = styled.div`
  h4 {
    margin: 0 0 0.3rem 0;
    font-size: 1rem;
  }
  
  p {
    margin: 0;
    font-size: 0.9rem;
    color: #666;
  }
`;

const FeeAmount = styled.div`
  font-weight: 600;
  color: #333;
`;

const DashboardPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('user');
    
    if (!isLoggedIn || !userData) {
      navigate('/login');
      return;
    }
    
    // Set user data
    setUser(JSON.parse(userData));
    setLoading(false);
    
    // For demo purposes, we're setting up fake attendance data
    // In a real application, this would come from a database
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
  };
  
  // Dummy attendance data
  const attendanceData = [
    { date: '2023-11-05', day: 'Sunday', present: true, checkInTime: '10:15 AM' },
    { date: '2023-11-04', day: 'Saturday', present: true, checkInTime: '09:30 AM' },
    { date: '2023-11-03', day: 'Friday', present: true, checkInTime: '06:45 PM' },
    { date: '2023-11-02', day: 'Thursday', present: false, checkInTime: null },
    { date: '2023-11-01', day: 'Wednesday', present: true, checkInTime: '07:15 PM' },
    { date: '2023-10-31', day: 'Tuesday', present: true, checkInTime: '06:30 PM' },
    { date: '2023-10-30', day: 'Monday', present: false, checkInTime: null },
  ];
  
  // Dummy payment history
  const paymentHistory = [
    { id: 'INV-001', date: '2023-10-15', amount: '₹1,999', status: 'Paid', period: 'Nov 2023' },
    { id: 'INV-002', date: '2023-09-15', amount: '₹1,999', status: 'Paid', period: 'Oct 2023' },
    { id: 'INV-003', date: '2023-08-15', amount: '₹1,999', status: 'Paid', period: 'Sep 2023' },
  ];
  
  // Calculate membership stats
  const membershipStartDate = user ? new Date(user.membershipStartDate) : new Date();
  const membershipEndDate = user ? new Date(user.membershipEndDate) : new Date();
  const today = new Date();
  
  const totalDays = Math.floor((membershipEndDate - membershipStartDate) / (1000 * 60 * 60 * 24));
  const daysRemaining = Math.floor((membershipEndDate - today) / (1000 * 60 * 60 * 24));
  const daysUsed = totalDays - daysRemaining;
  const percentageUsed = Math.floor((daysUsed / totalDays) * 100);
  
  // Calculate attendance stats
  const totalDaysThisMonth = 30;
  const daysAttended = attendanceData.filter(day => day.present).length;
  const attendancePercentage = Math.floor((daysAttended / totalDaysThisMonth) * 100);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <CardGrid>
              <Card 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CardHeader>
                  <CardTitle>Membership Status</CardTitle>
                  <CardIcon bgColor="#ff4500">
                    <FaDumbbell />
                  </CardIcon>
                </CardHeader>
                <p>
                  <strong>Plan:</strong> {user.membership === 'premium' ? 'Premium Membership - ₹1,999/month' : user.membership}
                </p>
                <p>
                  <strong>Expiry:</strong> {new Date(user.membershipEndDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p>
                  <strong>Status:</strong> Active
                </p>
                <p>{daysRemaining} days remaining</p>
                <ProgressBar progress={`${percentageUsed}%`}>
                  <div></div>
                </ProgressBar>
              </Card>
              
              <Card
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <CardHeader>
                  <CardTitle>Attendance</CardTitle>
                  <CardIcon bgColor="#4caf50">
                    <FaCalendarAlt />
                  </CardIcon>
                </CardHeader>
                <p>
                  <strong>Current Month:</strong> {daysAttended} days attended
                </p>
                <p>
                  <strong>Last Check-in:</strong> {attendanceData[0].present ? attendanceData[0].checkInTime : 'N/A'}
                </p>
                <p>Attendance rate: {attendancePercentage}%</p>
                <ProgressBar progress={`${attendancePercentage}%`} color="#4caf50">
                  <div></div>
                </ProgressBar>
              </Card>
              
              <Card
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <CardHeader>
                  <CardTitle>Payment Status</CardTitle>
                  <CardIcon bgColor="#2196f3">
                    <FaCreditCard />
                  </CardIcon>
                </CardHeader>
                <p>
                  <strong>Last Payment:</strong> {paymentHistory[0].date}
                </p>
                <p>
                  <strong>Amount:</strong> {paymentHistory[0].amount}
                </p>
                <p>
                  <strong>Next Due:</strong> {new Date(new Date(paymentHistory[0].date).setMonth(new Date(paymentHistory[0].date).getMonth() + 1)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
                <p>Payment Status: <span style={{ color: '#4caf50', fontWeight: '600' }}>Up to date</span></p>
              </Card>
            </CardGrid>
            
            <MainSection>
              <SectionTitle>
                <FaChartLine />
                Recent Activity
              </SectionTitle>
              <AttendanceTable>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Day</th>
                    <th>Status</th>
                    <th>Check-in Time</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceData.map((record, index) => (
                    <tr key={index}>
                      <td>{record.date}</td>
                      <td>{record.day}</td>
                      <td>
                        <StatusBadge present={record.present}>
                          {record.present ? <FaCheckCircle /> : '✕'}
                          {record.present ? 'Present' : 'Absent'}
                        </StatusBadge>
                      </td>
                      <td>{record.present ? record.checkInTime : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </AttendanceTable>
            </MainSection>
          </>
        );
        
      case 'attendance':
        return (
          <MainSection>
            <SectionTitle>
              <FaCalendarAlt />
              Attendance History
            </SectionTitle>
            <AttendanceTable>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Day</th>
                  <th>Status</th>
                  <th>Check-in Time</th>
                </tr>
              </thead>
              <tbody>
                {attendanceData.map((record, index) => (
                  <tr key={index}>
                    <td>{record.date}</td>
                    <td>{record.day}</td>
                    <td>
                      <StatusBadge present={record.present}>
                        {record.present ? <FaCheckCircle /> : '✕'}
                        {record.present ? 'Present' : 'Absent'}
                      </StatusBadge>
                    </td>
                    <td>{record.present ? record.checkInTime : '-'}</td>
                  </tr>
                ))}
              </tbody>
            </AttendanceTable>
          </MainSection>
        );
        
      case 'membership':
        return (
          <MainSection>
            <SectionTitle>
              <FaDumbbell />
              Membership Details
            </SectionTitle>
            <Card>
              <h3>Current Plan</h3>
              <p>
                <strong>Plan Type:</strong> {user.membership === 'premium' ? 'Premium Membership' : user.membership}
              </p>
              <p>
                <strong>Monthly Fee:</strong> ₹1,999
              </p>
              <p>
                <strong>Start Date:</strong> {new Date(user.membershipStartDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                <strong>Expiry Date:</strong> {new Date(user.membershipEndDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              <p>
                <strong>Status:</strong> <span style={{ color: '#4caf50', fontWeight: '600' }}>Active</span>
              </p>
              <p>
                <strong>Time Remaining:</strong> {daysRemaining} days
              </p>
              <ProgressBar progress={`${percentageUsed}%`}>
                <div></div>
              </ProgressBar>
              
              <h3 style={{ marginTop: '2rem' }}>Membership Features</h3>
              <ul>
                <li>Access to gym floor</li>
                <li>Full equipment use</li>
                <li>Locker room access</li>
                <li>Unlimited group classes</li>
                <li>Trainer assessment (2 sessions)</li>
                <li>Personal training sessions (2 per month)</li>
              </ul>
            </Card>
          </MainSection>
        );
        
      case 'payments':
        return (
          <MainSection>
            <SectionTitle>
              <FaCreditCard />
              Payment History
            </SectionTitle>
            <Card>
              <h3>Payment Summary</h3>
              <p>
                <strong>Current Plan:</strong> Premium Membership
              </p>
              <p>
                <strong>Monthly Fee:</strong> ₹1,999
              </p>
              <p>
                <strong>Payment Method:</strong> Credit Card (ending in 4242)
              </p>
              <p>
                <strong>Billing Cycle:</strong> 15th of each month
              </p>
              <p>
                <strong>Next Payment:</strong> {new Date(new Date(paymentHistory[0].date).setMonth(new Date(paymentHistory[0].date).getMonth() + 1)).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
              
              <h3 style={{ marginTop: '2rem' }}>Recent Payments</h3>
              <FeeHistory>
                {paymentHistory.map((payment, index) => (
                  <FeeItem key={index}>
                    <FeeDetails>
                      <h4>Invoice #{payment.id}</h4>
                      <p>{payment.date} • {payment.period}</p>
                    </FeeDetails>
                    <FeeAmount>{payment.amount}</FeeAmount>
                  </FeeItem>
                ))}
              </FeeHistory>
            </Card>
          </MainSection>
        );
        
      default:
        return null;
    }
  };

  return (
    <DashboardContainer>
      <Sidebar>
        <UserInfo>
          <UserAvatar>
            <FaUserCircle />
          </UserAvatar>
          <UserName>{`${user.firstName} ${user.lastName}`}</UserName>
          <UserEmail>{user.email}</UserEmail>
        </UserInfo>
        
        <NavMenu>
          <NavItem>
            <NavLink 
              active={activeTab === 'overview'} 
              onClick={() => setActiveTab('overview')}
            >
              <FaChartLine /> Overview
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={activeTab === 'attendance'} 
              onClick={() => setActiveTab('attendance')}
            >
              <FaCalendarAlt /> Attendance
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={activeTab === 'membership'} 
              onClick={() => setActiveTab('membership')}
            >
              <FaDumbbell /> Membership
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink 
              active={activeTab === 'payments'} 
              onClick={() => setActiveTab('payments')}
            >
              <FaCreditCard /> Payments
            </NavLink>
          </NavItem>
        </NavMenu>
      </Sidebar>
      <ContentArea>
        <DashboardHeader>
          <WelcomeText>
            <h1>Welcome back, <span>{user.firstName}</span></h1>
            <p>Here's an overview of your gym membership and activity</p>
          </WelcomeText>
          <LogoutButton onClick={handleLogout}>
            <FaSignOutAlt /> Logout
          </LogoutButton>
        </DashboardHeader>
        
        {renderContent()}
      </ContentArea>
    </DashboardContainer>
  );
};

export default DashboardPage; 