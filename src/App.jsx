// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ProfessionalRegistration from './components/Registration';
import ProfessionalLogin from './components/Login';
import Home from './components/Home';


const App = () => {
  return (

    <>

      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<ProfessionalLogin />} />
          <Route path="/register" element={<ProfessionalRegistration />} />
          <Route path="*" element={<div style={{ textAlign: 'center', marginTop: '50px' }}><h1>404 - Page Not Found</h1></div>} />
        </Routes>
      </Router>



    </>

  );
};

export default App;
