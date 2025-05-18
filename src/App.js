import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Home Page Components
import HomePage from './components/home/HomePage';

// About Page
import AboutPage from './components/about/AboutPage';

// Classes Page
import ClassesPage from './components/classes/ClassesPage';

// Trainers Page
import TrainersPage from './components/trainers/TrainersPage';

// Pricing Page
import PricingPage from './components/pricing/PricingPage';

// Contact Page
import ContactPage from './components/contact/ContactPage';

// Auth Components
import LoginPage from './components/login/LoginPage';
import SignupPage from './components/signup/SignupPage';

// Dashboard
import Dashboard from './components/dashboard/Dashboard';

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }
  
  return children;
};

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/classes" element={<ClassesPage />} />
            <Route path="/trainers" element={<TrainersPage />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route 
              path="/dashboard" 
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
