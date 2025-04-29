import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaLock, FaUser, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import triloBackground from '../assets/trilo.png';

const ProfessionalRegister = () => {
  const [formData, setFormData] = useState({
    userName: '',
    userEmail: '',
    userPassword: '',
    confirmPassword: '',
    userPhone: '',
    userAddress: '',
    userRole: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(e.target);

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

    if (!formData.userName.trim()) {
      newErrors.userName = 'Name is required';
    }
    if (!formData.userEmail.trim()) {
      newErrors.userEmail = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.userEmail)) {
      newErrors.userEmail = 'Please enter a valid email';
    }
    if (!formData.userPassword) {
      newErrors.userPassword = 'Password is required';
    } else if (formData.userPassword.length < 6) {
      newErrors.userPassword = 'Password must be at least 6 characters';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Confirm your password';
    } else if (formData.confirmPassword !== formData.userPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!formData.userPhone) {
      newErrors.userPhone = 'Phone number is required';
    }
    if (!formData.userAddress) {
      newErrors.userAddress = 'Address is required';
    }
    if (!formData.userRole) {
      newErrors.userRole = 'Role is required';
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await axios.post('http://localhost:3307/trilo/register', formData);
      console.log(response.data);
      alert('✅ Registration successful!');
      formData.userName = '';
      formData.userEmail = '';



    } catch (error) {
      console.error('❌ Registration failed:', error);
      alert(`❌ ${error.response?.data?.message || 'Error during registration'}`);
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
                {/* Left Side - Decorative Image (Hidden on mobile) */}
                <div
                  className="col-md-5 d-none d-md-flex"
                  style={{

                    backgroundImage: `url(${triloBackground})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    position: "relative"
                  }}
                >

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
                    <h2 style={{ fontWeight: '600', marginBottom: '1rem', fontSize: '1.8rem' }}>Join Trilo</h2>
                    <p style={{ fontSize: '1rem' }}>Create an account to get started</p>
                    <img src=".assets/trilo.png" alt="" />
                  </div>
                </div>

                {/* Right Side - Registration Form */}
                <div className="col-md-7 d-flex align-items-center">
                  <div className="card-body p-4 p-md-5" style={{ overflowY: 'auto', maxHeight: '600px' }}>
                    <div className="text-center mb-4">
                      <h2 className="fw-bold" style={{ color: '#764ba2', fontSize: '1.8rem' }}>Register</h2>
                      <p className="text-muted">Create a new account</p>
                    </div>

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label className="form-label">
                          <FaUser className="me-2" /> Name
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                          name="userName"
                          value={formData.userName}
                          onChange={handleChange}
                          placeholder="Enter your name"
                        />
                        {errors.userName && <div className="invalid-feedback d-block">{errors.userName}</div>}
                      </div>

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

                      <div className="mb-3">
                        <label className="form-label">
                          <FaLock className="me-2" /> Confirm Password
                        </label>
                        <input
                          type="password"
                          className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          placeholder="Confirm your password"
                        />
                        {errors.confirmPassword && <div className="invalid-feedback d-block">{errors.confirmPassword}</div>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">
                          <FaPhoneAlt className="me-2" /> Phone Number
                        </label>
                        <input
                          type="text"
                          className={`form-control ${errors.userPhone ? 'is-invalid' : ''}`}
                          name="userPhone"
                          value={formData.userPhone}
                          onChange={handleChange}
                          placeholder="Enter your phone number"
                        />
                        {errors.userPhone && <div className="invalid-feedback d-block">{errors.userPhone}</div>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea
                          className={`form-control ${errors.userAddress ? 'is-invalid' : ''}`}
                          name="userAddress"
                          value={formData.userAddress}
                          onChange={handleChange}
                          placeholder="Enter your address"
                        />
                        {errors.userAddress && <div className="invalid-feedback d-block">{errors.userAddress}</div>}
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Role</label>
                        <select
                          className={`form-select ${errors.userRole ? 'is-invalid' : ''}`}
                          name="userRole"
                          value={formData.userRole}
                          onChange={handleChange}
                        >
                          <option value="">Select your role</option>
                          <option value="ADMIN">ADMIN</option>
                          <option value="USER">USER</option>
                        </select>
                        {errors.userRole && <div className="invalid-feedback d-block">{errors.userRole}</div>}
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
                            Registering...
                          </>
                        ) : (
                          'Register'
                        )}
                      </button>
                    </form>

                    <div className="text-center mt-4">
                      <p className="text-muted" style={{ fontSize: '0.9rem' }}>
                        Already have an account?{' '}
                        <Link to="/login" style={{ color: '#764ba2', fontWeight: '500', textDecoration: 'none' }}>
                          Login
                        </Link>
                      </p>
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

export default ProfessionalRegister;
