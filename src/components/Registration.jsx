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

                    <form onSubmit={handleSubmit} className="needs-validation" noValidate>
                      <div className="row">
                        {/* Name Field */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-medium d-flex align-items-center">
                            <FaUser className="me-2 text-primary" />
                            Full Name
                          </label>
                          <input
                            type="text"
                            className={`form-control rounded-3 ${errors.userName ? 'is-invalid' : ''}`}
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Rakib Khan"
                          />
                          {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>

                        {/* Email Field */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-medium d-flex align-items-center">
                            <FaEnvelope className="me-2 text-primary" />
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={`form-control rounded-3 ${errors.userEmail ? 'is-invalid' : ''}`}
                            name="userEmail"
                            value={formData.userEmail}
                            onChange={handleChange}
                            placeholder="rakib@example.com"
                          />
                          {errors.userEmail && <div className="invalid-feedback">{errors.userEmail}</div>}
                        </div>
                      </div>

                      <div className="row">
                        {/* Password Field */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-medium d-flex align-items-center">
                            <FaLock className="me-2 text-primary" />
                            Password
                          </label>
                          <input
                            type="password"
                            className={`form-control rounded-3 ${errors.userPassword ? 'is-invalid' : ''}`}
                            name="userPassword"
                            value={formData.userPassword}
                            onChange={handleChange}
                            placeholder=""
                          />
                          {errors.userPassword && <div className="invalid-feedback">{errors.userPassword}</div>}
                        </div>

                        {/* Confirm Password Field */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-medium d-flex align-items-center">
                            <FaLock className="me-2 text-primary" />
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            className={`form-control rounded-3 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder=""
                          />
                          {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                        </div>
                      </div>

                      <div className="row">
                        {/* Phone Field */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-medium d-flex align-items-center">
                            <FaPhoneAlt className="me-2 text-primary" />
                            Phone Number
                          </label>
                          <input
                            type="text"
                            className={`form-control rounded-3 ${errors.userPhone ? 'is-invalid' : ''}`}
                            name="userPhone"
                            value={formData.userPhone}
                            onChange={handleChange}
                            placeholder="018********"
                          />
                          {errors.userPhone && <div className="invalid-feedback">{errors.userPhone}</div>}
                        </div>

                        {/* Role Field */}
                        <div className="col-md-6 mb-3">
                          <label className="form-label fw-medium">Role</label>
                          <select
                            className={`form-select rounded-3 ${errors.userRole ? 'is-invalid' : ''}`}
                            name="userRole"
                            value={formData.userRole}
                            onChange={handleChange}
                          >
                            <option value="">Select your role</option>
                            <option value="ADMIN">Admin</option>
                            <option value="USER">User</option>
                          </select>
                          {errors.userRole && <div className="invalid-feedback">{errors.userRole}</div>}
                        </div>
                      </div>

                      {/* Address Field */}
                      <div className="mb-4">
                        <label className="form-label fw-medium">Address</label>
                        <textarea
                          className={`form-control rounded-3 ${errors.userAddress ? 'is-invalid' : ''}`}
                          name="userAddress"
                          value={formData.userAddress}
                          onChange={handleChange}
                          placeholder="House 32 7/A, Dhanmodhi, Dhaka"
                          rows="3"
                        />
                        {errors.userAddress && <div className="invalid-feedback">{errors.userAddress}</div>}
                      </div>

                      {/* Submit Button */}
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
