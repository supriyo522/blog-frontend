import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogFeed from './components/BlogFeed';
import BlogEditor from './components/BlogEditor';
import Register from './components/Register';
import Login from './components/Login';
import Checkout from './components/Checkout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BlogFeed />} />
        <Route path="/editor" element={<BlogEditor />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
