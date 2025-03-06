// import React from 'react';
// import { Navigate } from 'react-router-dom';

// const AuthGuard = ({ children }) => {
//   const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

//   if (!isLoggedIn) {
//     alert('Please login or register to access this page');
//     return <Navigate to="/login" replace />;
//   }

//   return children;
// };

// export default AuthGuard;
//to derect users to login page if they are not logged in
import React, { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

  useEffect(() => {
    if (!isLoggedIn) {
      alert('Please login or register to access this page');
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null;
  }

  return children;
};

export default AuthGuard;