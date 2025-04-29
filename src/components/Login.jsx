// Your same login code (No design change)
import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import triloBackground from '../assets/trilo.png';

const ProfessionalLogin = () => {
  const [formData, setFormData] = useState({
    userEmail: '',
    userPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.userEmail.trim()) {
      newErrors.userEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      newErrors.userEmail = 'Please enter a valid email';
    }

    if (!formData.userPassword) {
      newErrors.userPassword = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3307/trilo/login', formData);
      console.log(response.data);
      
      if (response.data) {
        // If login is successful, navigate to the Home page
        alert('✅ Login successful!');
        navigate('/home');
      }
      else{
        alert('❌ Login failed');
      }
    } catch (error) {
      console.error('❌ Login failed:', error);
      alert(`❌ ${error.response?.data?.message || 'Invalid credentials'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      padding: '20px 0'
    }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div className="row justify-content-center m-0">
          <div className="col-12 p-0">
            <div className="card shadow-lg" style={{
              borderRadius: '1rem',
              overflow: 'hidden',
              border: 'none'
            }}>
              <div className="row g-0" style={{ minHeight: '600px' }}>
                
                <div className="col-md-5 d-none d-md-flex" style={{
                  backgroundImage: `url(${triloBackground})`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  position: 'relative'
                }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'rgba(102, 126, 234, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    color: 'white',
                    padding: '2rem',
                    textAlign: 'center'
                  }}>
                    <h2 style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.8rem' }}>Welcome Back</h2>
                    <p style={{ fontSize: '1rem' }}>We're glad to see you again</p>
                  </div>
                </div>
                
                <div className="col-md-7 d-flex align-items-center">
                  <div className="card-body p-4 p-md-5" style={{ overflowY: 'auto', maxHeight: '600px' }}>
                    <div className="text-center mb-4">
                      <h2 className="fw-bold" style={{ color: '#764ba2', fontSize: '1.8rem' }}>Login</h2>
                      <p className="text-muted">Sign in to continue to your account</p>
                    </div>
                    
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">
                          <FaEnvelope className="me-2" /> Email Address
                        </label>
                        <input
                          type="email"
                          className={`form-control ${errors.userEmail ? 'is-invalid' : ''}`}
                          name="userEmail"
                          value={formData.userEmail}
                          onChange={handleChange}
                          placeholder="Enter your email"
                        />
                        {errors.userEmail && <div className="invalid-feedback d-block">{errors.userEmail}</div>}
                      </div>
                      
                      <div className="mb-3">
                        <label className="form-label">
                          <FaLock className="me-2" /> Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.userPassword ? 'is-invalid' : ''}`}
                          name="userPassword"
                          value={formData.userPassword}
                          onChange={handleChange}
                          placeholder="Enter your password"
                        />
                        {errors.userPassword && <div className="invalid-feedback d-block">{errors.userPassword}</div>}
                      </div>
                      
                      <div className="d-flex justify-content-between align-items-center mb-4">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="rememberMe"
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                        <Link to="/forgot-password" style={{ color: '#764ba2', textDecoration: 'none' }}>
                          Forgot password?
                        </Link>
                      </div>
                      
                      <button
                        type="submit"
                        className="btn btn-primary w-100 py-2"
                        style={{
                          background: 'linear-gradient(to right, #667eea, #764ba2)',
                          border: 'none',
                          fontWeight: '600',
                          fontSize: '1rem'
                        }}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Logging in...
                          </>
                        ) : (
                          'Login'
                        )}
                      </button>
                    </form>
                    
                    <div className="text-center mt-4">
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                        Don't have an account?{' '}
                        <Link to="/register" style={{ color: '#764ba2', fontWeight: '500', textDecoration: 'none' }}>
                          Register
                        </Link>
                      </p>
                    </div>
                    
                    <div className="text-center mt-4">
                      <div className="divider mb-3">
                        <span className="text-muted">Or login with</span>
                      </div>
                      <div className="d-flex justify-content-center gap-3">
                        <button className="btn btn-outline-primary rounded-circle p-2">
                          <i className="fab fa-google"></i>
                        </button>
                        <button className="btn btn-outline-primary rounded-circle p-2">
                          <i className="fab fa-facebook-f"></i>
                        </button>
                        <button className="btn btn-outline-primary rounded-circle p-2">
                          <i className="fab fa-twitter"></i>
                        </button>
                      </div>
                    </div>
                    
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalLogin;
