import React, { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import API from '../utils/api';
import { useNavigate } from 'react-router-dom';
import './BlogEditor.css'; 

const BlogEditor = () => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    media: [],
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
  
    if (!token) {
      alert('You need to be logged in to create a blog.');
      return;
    }
  
    try {
      const decoded = jwtDecode(token); 
      const formDataWithUser = {
        ...formData,
        author: decoded.id, 
        location: 'Your Location Here' 
      };
  
      await API.post('/blogs/create', formDataWithUser, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      });
  
      alert('Blog created successfully');
      navigate('/checkout');
    } catch (error) {
      console.error('Error creating blog:', error.response ? error.response.data : error.message);
      alert('Failed to create blog. Please try again.');
    }
  };
  

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Blog Title"
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Blog Content"
        onChange={handleChange}
        required
      />
      <button type="submit">Create Blog</button>
    </form>
  );
};

export default BlogEditor;
