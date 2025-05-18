import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaCalendarAlt, FaFileInvoiceDollar, FaSignOutAlt, FaUserEdit, FaDumbbell } from 'react-icons/fa';

const DashboardContainer = styled.div`
  padding: 2rem;
  min-height: 90vh;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const WelcomeSection = styled.div`
  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
    color: #333;
    
    span {
      color: #ff4500;
    }
  }
  
  p {
    color: #666;
    font-size: 1.1rem;
  }
`;

const UserActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    margin-top: 0;
  }
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: ${props => props.primary ? '#ff4500' : '#fff'};
  color: ${props => props.primary ? '#fff' : '#333'};
  border: 1px solid ${props => props.primary ? '#ff4500' : '#ddd'};
  padding: 0.6rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${props => props.primary ? '#cc3700' : '#f8f8f8'};
    transform: translateY(-2px);
  }
`;

const DashboardContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
`;

const DashboardCard = styled(motion.div)`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #eee;
  
  h2 {
    font-size: 1.5rem;
    color: #333;
    margin: 0;
  }
  
  svg {
    color: #ff4500;
    font-size: 1.5rem;
  }
`;

const CardContent = styled.div`
  flex-grow: 1;
`;

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const ProfileField = styled.div`
  margin-bottom: 1rem;
  
  label {
    display: block;
    font-size: 0.9rem;
    color: #777;
    margin-bottom: 0.3rem;
  }
  
  p {
    font-size: 1.1rem;
    color: #333;
    font-weight: 500;
    margin: 0;
  }
`;

const MembershipInfo = styled.div`
  background-color: #f9f9f9;
  padding: 1.2rem;
  border-radius: 8px;
  border-left: 4px solid #ff4500;
  margin-top: 1rem;
  
  h3 {
    margin: 0 0 1rem 0;
    color: #333;
    font-size: 1.2rem;
  }
  
  .membership-details {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
  }
  
  .detail-item {
    .label {
      font-size: 0.9rem;
      color: #777;
    }
    
    .value {
      font-size: 1.1rem;
      color: #333;
      font-weight: 600;
    }
  }
`;

const FeeHistory = styled.div`
  margin-top: 1rem;
  
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9rem;
    
    th, td {
      padding: 0.8rem;
      text-align: left;
      border-bottom: 1px solid #eee;
    }
    
    th {
      font-weight: 600;
      color: #555;
    }
    
    td {
      color: #333;
    }
    
    tr:last-child td {
      border-bottom: none;
    }
    
    .status {
      font-weight: 500;
      
      &.paid {
        color: #4CAF50;
      }
      
      &.pending {
        color: #FF9800;
      }
      
      &.overdue {
        color: #F44336;
      }
    }
  }
`;

const AttendanceSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }
`;

const AttendanceRecord = styled.div`
  display: flex;
  align-items: center;
  padding: 0.8rem;
  border-radius: 8px;
  background-color: ${props => props.present ? '#f1f9f1' : '#f9f1f1'};
  border-left: 4px solid ${props => props.present ? '#4CAF50' : '#F44336'};
  margin-bottom: 0.8rem;
  
  .date {
    flex: 1;
    font-weight: 500;
    color: #333;
  }
  
  .status {
    padding: 0.3rem 0.6rem;
    border-radius: 4px;
    font-size: 0.8rem;
    font-weight: 600;
    color: #fff;
    background-color: ${props => props.present ? '#4CAF50' : '#F44336'};
  }
  
  .time {
    margin-right: 1rem;
    color: #555;
    font-size: 0.9rem;
  }
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 2rem;
  color: #777;
  
  p {
    margin: 1rem 0;
  }
  
  svg {
    font-size: 3rem;
    color: #ddd;
    margin-bottom: 1rem;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userData = localStorage.getItem('user');
    
    if (isLoggedIn !== 'true' || !userData) {
      navigate('/login');
      return;
    }
    
    try {
      setUser(JSON.parse(userData));
    } catch (error) {
      console.error('Error parsing user data:', error);
      navigate('/login');
    }
    
    setLoading(false);
  }, [navigate]);
  
  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    navigate('/login');
  };
  
  const formatMembership = (membership) => {
    switch(membership) {
      case 'basic':
        return 'Basic';
      case 'premium':
        return 'Premium';
      case 'elite':
        return 'Elite';
      default:
        return membership;
    }
  };
  
  const getTimeLeft = () => {
    if (!user || !user.membershipEndDate) return '';
    
    const endDate = new Date(user.membershipEndDate);
    const today = new Date();
    const diffTime = Math.abs(endDate - today);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (endDate < today) {
      return 'Expired';
    }
    
    if (diffDays > 30) {
      const diffMonths = Math.floor(diffDays / 30);
      return `${diffMonths} month${diffMonths > 1 ? 's' : ''}`;
    }
    
    return `${diffDays} day${diffDays > 1 ? 's' : ''}`;
  };
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (!user) {
    return <div>No user data found. Please login again.</div>;
  }
  
  return (
    <DashboardContainer>
      <DashboardHeader>
        <WelcomeSection>
          <h1>Welcome back, <span>{user.firstName}!</span></h1>
          <p>Here's a summary of your membership and activity.</p>
        </WelcomeSection>
        
        <UserActions>
          <ActionButton>
            <FaUserEdit />
            Edit Profile
          </ActionButton>
          <ActionButton primary onClick={handleLogout}>
            <FaSignOutAlt />
            Logout
          </ActionButton>
        </UserActions>
      </DashboardHeader>
      
      <DashboardContent>
        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <CardHeader>
            <FaUser />
            <h2>Profile Information</h2>
          </CardHeader>
          
          <CardContent>
            <ProfileInfo>
              <ProfileField>
                <label>First Name</label>
                <p>{user.firstName}</p>
              </ProfileField>
              
              <ProfileField>
                <label>Last Name</label>
                <p>{user.lastName}</p>
              </ProfileField>
              
              <ProfileField>
                <label>Email</label>
                <p>{user.email}</p>
              </ProfileField>
              
              <ProfileField>
                <label>Phone</label>
                <p>{user.phoneNumber || 'Not provided'}</p>
              </ProfileField>
            </ProfileInfo>
            
            <MembershipInfo>
              <h3>Membership Details</h3>
              <div className="membership-details">
                <div className="detail-item">
                  <div className="label">Membership Type</div>
                  <div className="value">{formatMembership(user.membership)}</div>
                </div>
                
                <div className="detail-item">
                  <div className="label">Start Date</div>
                  <div className="value">{user.membershipStartDate}</div>
                </div>
                
                <div className="detail-item">
                  <div className="label">End Date</div>
                  <div className="value">{user.membershipEndDate}</div>
                </div>
                
                <div className="detail-item">
                  <div className="label">Time Left</div>
                  <div className="value">{getTimeLeft()}</div>
                </div>
              </div>
            </MembershipInfo>
          </CardContent>
        </DashboardCard>
        
        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <CardHeader>
            <FaFileInvoiceDollar />
            <h2>Fees Structure</h2>
          </CardHeader>
          
          <CardContent>
            {user.feesStructure ? (
              <>
                <MembershipInfo>
                  <div className="membership-details">
                    <div className="detail-item">
                      <div className="label">Fee Amount</div>
                      <div className="value">{user.feesStructure.amount}</div>
                    </div>
                    
                    <div className="detail-item">
                      <div className="label">Billing Cycle</div>
                      <div className="value">{user.feesStructure.cycle}</div>
                    </div>
                    
                    <div className="detail-item">
                      <div className="label">Next Due Date</div>
                      <div className="value">{user.feesStructure.nextDueDate}</div>
                    </div>
                  </div>
                </MembershipInfo>
                
                <FeeHistory>
                  <h3>Payment History</h3>
                  {user.feesStructure.history && user.feesStructure.history.length > 0 ? (
                    <table>
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Amount</th>
                          <th>Status</th>
                          <th>Receipt</th>
                        </tr>
                      </thead>
                      <tbody>
                        {user.feesStructure.history.map((payment, index) => (
                          <tr key={index}>
                            <td>{payment.date}</td>
                            <td>{payment.amount}</td>
                            <td>
                              <span className={`status ${payment.status.toLowerCase()}`}>
                                {payment.status}
                              </span>
                            </td>
                            <td>{payment.receiptNo}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p>No payment history available.</p>
                  )}
                </FeeHistory>
              </>
            ) : (
              <EmptyState>
                <FaFileInvoiceDollar />
                <p>No fee structure information available.</p>
              </EmptyState>
            )}
          </CardContent>
        </DashboardCard>
        
        <DashboardCard
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <CardHeader>
            <FaCalendarAlt />
            <h2>Attendance</h2>
          </CardHeader>
          
          <CardContent>
            <AttendanceSection>
              <h3>Recent Attendance</h3>
              {user.attendanceRecords && user.attendanceRecords.length > 0 ? (
                user.attendanceRecords.map((record, index) => (
                  <AttendanceRecord key={index} present={record.present}>
                    <div className="date">{record.date}</div>
                    {record.checkInTime && <div className="time">{record.checkInTime}</div>}
                    <div className="status">{record.present ? 'Present' : 'Absent'}</div>
                  </AttendanceRecord>
                ))
              ) : (
                <EmptyState>
                  <FaDumbbell />
                  <p>No attendance records yet.</p>
                  <p>Visit the gym to start tracking your sessions!</p>
                </EmptyState>
              )}
            </AttendanceSection>
          </CardContent>
        </DashboardCard>
      </DashboardContent>
    </DashboardContainer>
  );
};

export default Dashboard; 