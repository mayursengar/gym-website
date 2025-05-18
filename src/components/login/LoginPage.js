import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const LoginPageContainer = styled.div`
  padding: 6rem 2rem;
  min-height: 100vh;
  background-color: #f8f9fa;
`;

const PageHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
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

const FormContainer = styled(motion.div)`
  max-width: 500px;
  margin: 0 auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 2.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 600;
  text-align: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: #555;
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ff4500;
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 2.3rem;
  color: #777;
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

const RememberForgotRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  
  input {
    margin-right: 0.5rem;
  }
  
  label {
    color: #666;
    font-size: 0.9rem;
  }
`;

const ForgotPassword = styled(Link)`
  color: #666;
  font-size: 0.9rem;
  text-decoration: none;
  
  &:hover {
    color: #ff4500;
    text-decoration: underline;
  }
`;

const SignupLink = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: #666;
  font-size: 0.9rem;

  a {
    color: #ff4500;
    text-decoration: none;
    font-weight: 600;
    margin-left: 0.5rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const ErrorMessage = styled.div`
  color: #d9534f;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

const SuccessMessage = styled(motion.div)`
  background-color: #4CAF50;
  color: white;
  padding: 1rem;
  border-radius: 5px;
  margin-bottom: 1.5rem;
  text-align: center;
`;

// Demo user database (in a real app, this would come from a backend)
const usersDatabase = [
  {
    id: '1',
    email: 'demo@example.com',
    password: 'password123',
    firstName: 'Demo',
    lastName: 'User',
    membership: 'premium',
    membershipStartDate: '2023-05-15',
    membershipEndDate: '2024-05-15',
    feesStructure: {
      amount: '₹1,999',
      cycle: 'monthly',
      nextDueDate: '2023-12-15',
      history: [
        { date: '2023-11-15', amount: '₹1,999', status: 'Paid', receiptNo: 'INV-001' },
        { date: '2023-10-15', amount: '₹1,999', status: 'Paid', receiptNo: 'INV-002' },
        { date: '2023-09-15', amount: '₹1,999', status: 'Paid', receiptNo: 'INV-003' }
      ]
    },
    attendanceRecords: [
      { date: '2023-11-05', checkInTime: '10:15 AM', present: true },
      { date: '2023-11-04', checkInTime: '09:30 AM', present: true },
      { date: '2023-11-03', checkInTime: '06:45 PM', present: true },
      { date: '2023-11-02', checkInTime: null, present: false },
      { date: '2023-11-01', checkInTime: '07:15 PM', present: true }
    ]
  },
  {
    id: '2',
    email: 'mayur@example.com',
    password: 'password123',
    firstName: 'Mayur',
    lastName: 'Sengar',
    membership: 'elite',
    membershipStartDate: '2023-04-10',
    membershipEndDate: '2024-04-10',
    feesStructure: {
      amount: '₹2,999',
      cycle: 'monthly',
      nextDueDate: '2023-12-10',
      history: [
        { date: '2023-11-10', amount: '₹2,999', status: 'Paid', receiptNo: 'INV-004' },
        { date: '2023-10-10', amount: '₹2,999', status: 'Paid', receiptNo: 'INV-005' },
        { date: '2023-09-10', amount: '₹2,999', status: 'Paid', receiptNo: 'INV-006' }
      ]
    },
    attendanceRecords: [
      { date: '2023-11-06', checkInTime: '06:30 AM', present: true },
      { date: '2023-11-05', checkInTime: '07:00 AM', present: true },
      { date: '2023-11-03', checkInTime: '06:15 PM', present: true },
      { date: '2023-11-02', checkInTime: '07:45 PM', present: true },
      { date: '2023-11-01', checkInTime: '06:30 AM', present: true }
    ]
  }
];

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  useEffect(() => {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/dashboard');
    }
  }, [navigate]);

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // For demo purposes, we'll check against our demo user database
        // In a real application, this would be an API call to your backend
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        console.log('Login attempt:', {
          email: formData.email,
          rememberMe: formData.rememberMe
        });
        
        // Find user in our database
        const user = usersDatabase.find(
          user => user.email === formData.email && user.password === formData.password
        );
        
        if (user) {
          // Successful login
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('user', JSON.stringify(user));
          
          setIsSubmitted(true);
          setIsSubmitting(false);
          
          // Redirect to dashboard after success message
          setTimeout(() => {
            setIsSubmitted(false);
            navigate('/dashboard');
          }, 1000);
        } else {
          // Authentication failed
          throw new Error('Invalid credentials');
        }
      } catch (error) {
        console.error('Login error:', error);
        setIsSubmitting(false);
        setServerError('Invalid email or password. Please try again.');
      }
    }
  };

  // For demo purposes only - handle direct login
  const handleDemoLogin = async () => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const demoUser = usersDatabase[0]; // Use the first demo user
      
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('user', JSON.stringify(demoUser));
      
      setIsSubmitted(true);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setIsSubmitted(false);
        navigate('/dashboard');
      }, 1000);
    } catch (error) {
      console.error('Demo login error:', error);
      setIsSubmitting(false);
      setServerError('Something went wrong. Please try again.');
    }
  };

  return (
    <LoginPageContainer>
      <PageHeader>
        <PageTitle>Welcome <span>Back</span></PageTitle>
        <PageSubtitle>
          Log in to your account to access your membership details, track your progress, and manage your fitness journey.
        </PageSubtitle>
      </PageHeader>

      <FormContainer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {isSubmitted && (
          <SuccessMessage 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Login successful! Redirecting to your dashboard...
          </SuccessMessage>
        )}
        
        {serverError && (
          <ErrorMessage style={{ textAlign: 'center', marginBottom: '1rem', padding: '0.8rem', backgroundColor: '#ffeeee', borderRadius: '5px', border: '1px solid #ffcccc' }}>
            {serverError}
          </ErrorMessage>
        )}
        
        <FormTitle>Login to Your Account</FormTitle>
        
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <FormLabel>Email Address</FormLabel>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <FormInput 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="Enter your email address"
            />
            {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
          </FormGroup>
          
          <FormGroup>
            <FormLabel>Password</FormLabel>
            <InputIcon>
              <FaLock />
            </InputIcon>
            <FormInput 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              placeholder="Enter your password"
            />
            {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
          </FormGroup>
          
          <RememberForgotRow>
            <RememberMe>
              <input 
                type="checkbox" 
                name="rememberMe" 
                id="rememberMe" 
                checked={formData.rememberMe} 
                onChange={handleChange}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMe>
            
            <ForgotPassword to="/forgot-password">Forgot Password?</ForgotPassword>
          </RememberForgotRow>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Logging in...' : 'Login'}
          </SubmitButton>

          <div style={{ textAlign: 'center', margin: '1rem 0' }}>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '0.5rem' }}>Demo Accounts:</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '0.85rem' }}>
              <div style={{ color: '#555' }}>
                <div>Email: demo@example.com</div>
                <div>Password: password123</div>
              </div>
              <div style={{ color: '#555' }}>
                <div>Email: mayur@example.com</div>
                <div>Password: password123</div>
              </div>
            </div>
          </div>
          
          <SignupLink>
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </SignupLink>
        </Form>
      </FormContainer>
    </LoginPageContainer>
  );
};

export default LoginPage; 