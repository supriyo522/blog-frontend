import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogFeed from './components/BlogFeed';
import BlogEditor from './components/BlogEditor';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import TermsAndConditions from './components/TermsAndConditions';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogFeed />} />
        <Route path="/editor" element={<BlogEditor />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        
      </Routes>
    </Router>
  );
};

export default App;
