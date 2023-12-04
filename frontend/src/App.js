import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const Home = lazy(() => import('./components/Home'));
const Login = lazy(() => import('./components/Login'));
const RegisterForm = lazy(() => import('./components/Register'));

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/login"
          element={
<Suspense fallback={<div style={{ textAlign: 'center', marginTop: '20px', fontSize: '180px' }}>Loading...</div>}>
              <Login />
            </Suspense>
          }
        />
        <Route
          exact
          path="/"
          element={
            <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '20px', fontSize: '180px' }}>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          exact
          path="/register"
          element={
            <Suspense fallback={<div style={{ textAlign: 'center', marginTop: '20px', fontSize: '180px' }}>Loading...</div>}>
              <RegisterForm />
            </Suspense>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
