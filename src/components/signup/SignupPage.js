import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaIdCard } from 'react-icons/fa';
import { useNavigate, Link } from 'react-router-dom';

const SignupPageContainer = styled.div`
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
  max-width: 600px;
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

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
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

const FormSelect = styled.select`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  appearance: none;
  background-color: white;

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

const LoginLink = styled.div`
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

const membershipPlans = [
  {
    id: 'basic',
    name: 'Basic Membership',
    price: '₹999',
    cycle: 'monthly'
  },
  {
    id: 'premium',
    name: 'Premium Membership',
    price: '₹1,999',
    cycle: 'monthly'
  },
  {
    id: 'elite',
    name: 'Elite Membership',
    price: '₹2,999',
    cycle: 'monthly'
  }
];

const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    membership: 'premium'
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serverError, setServerError] = useState('');

  const validateForm = () => {
    const newErrors = {};
    
    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    // Phone number validation
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phoneNumber.replace(/\D/g, ''))) {
      newErrors.phoneNumber = 'Phone number must be 10 digits';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError('');
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      try {
        // For demo purposes, we'll simulate account creation
        // In a real application, this would be an API call to your backend
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));
        
        console.log('Signup data:', {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phoneNumber: formData.phoneNumber,
          membership: formData.membership
        });
        
        // Get the selected membership plan details
        const selectedPlan = membershipPlans.find(plan => plan.id === formData.membership);
        
        // Create a new user object
        const newUser = {
          id: Math.random().toString(36).substr(2, 9),
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password, // In a real app, this would be securely hashed
          phoneNumber: formData.phoneNumber,
          membership: formData.membership,
          membershipStartDate: new Date().toISOString().split('T')[0],
          membershipEndDate: (() => {
            const date = new Date();
            date.setFullYear(date.getFullYear() + 1);
            return date.toISOString().split('T')[0];
          })(),
          feesStructure: {
            amount: selectedPlan.price,
            cycle: selectedPlan.cycle,
            nextDueDate: (() => {
              const date = new Date();
              date.setMonth(date.getMonth() + 1);
              return date.toISOString().split('T')[0];
            })(),
            history: [
              { 
                date: new Date().toISOString().split('T')[0], 
                amount: selectedPlan.price, 
                status: 'Paid', 
                receiptNo: `INV-${Math.floor(Math.random() * 1000).toString().padStart(3, '0')}` 
              }
            ]
          },
          attendanceRecords: []
        };
        
        // In a real application, this would be saved to a database
        // For demo purposes, we'll just save it to localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('user', JSON.stringify(newUser));
        
        setIsSubmitted(true);
        setIsSubmitting(false);
        
        // Redirect to dashboard after success message
        setTimeout(() => {
          setIsSubmitted(false);
          navigate('/dashboard');
        }, 1500);
      } catch (error) {
        console.error('Signup error:', error);
        setIsSubmitting(false);
        setServerError('Something went wrong during registration. Please try again.');
      }
    }
  };

  return (
    <SignupPageContainer>
      <PageHeader>
        <PageTitle>Join <span>Our Gym</span></PageTitle>
        <PageSubtitle>
          Create your account and start your fitness journey with us today. Access personalized training programs, track your progress, and more.
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
            Registration successful! Redirecting to your dashboard...
          </SuccessMessage>
        )}
        
        {serverError && (
          <ErrorMessage style={{ textAlign: 'center', marginBottom: '1rem', padding: '0.8rem', backgroundColor: '#ffeeee', borderRadius: '5px', border: '1px solid #ffcccc' }}>
            {serverError}
          </ErrorMessage>
        )}
        
        <FormTitle>Create New Account</FormTitle>
        
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <FormGroup>
              <FormLabel>First Name</FormLabel>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <FormInput 
                type="text" 
                name="firstName" 
                value={formData.firstName} 
                onChange={handleChange} 
                placeholder="Enter your first name"
              />
              {errors.firstName && <ErrorMessage>{errors.firstName}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Last Name</FormLabel>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <FormInput 
                type="text" 
                name="lastName" 
                value={formData.lastName} 
                onChange={handleChange} 
                placeholder="Enter your last name"
              />
              {errors.lastName && <ErrorMessage>{errors.lastName}</ErrorMessage>}
            </FormGroup>
          </FormRow>
          
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
          
          <FormRow>
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
                placeholder="Create a password"
              />
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Confirm Password</FormLabel>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <FormInput 
                type="password" 
                name="confirmPassword" 
                value={formData.confirmPassword} 
                onChange={handleChange} 
                placeholder="Confirm your password"
              />
              {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
            </FormGroup>
          </FormRow>
          
          <FormRow>
            <FormGroup>
              <FormLabel>Phone Number</FormLabel>
              <InputIcon>
                <FaPhone />
              </InputIcon>
              <FormInput 
                type="tel" 
                name="phoneNumber" 
                value={formData.phoneNumber} 
                onChange={handleChange} 
                placeholder="Enter your phone number"
              />
              {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber}</ErrorMessage>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel>Membership Plan</FormLabel>
              <InputIcon>
                <FaIdCard />
              </InputIcon>
              <FormSelect 
                name="membership" 
                value={formData.membership} 
                onChange={handleChange}
              >
                {membershipPlans.map(plan => (
                  <option key={plan.id} value={plan.id}>
                    {plan.name} - {plan.price}/{plan.cycle}
                  </option>
                ))}
              </FormSelect>
              {errors.membership && <ErrorMessage>{errors.membership}</ErrorMessage>}
            </FormGroup>
          </FormRow>
          
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </SubmitButton>
          
          <LoginLink>
            Already have an account? <Link to="/login">Login here</Link>
          </LoginLink>
        </Form>
      </FormContainer>
    </SignupPageContainer>
  );
};

export default SignupPage; 